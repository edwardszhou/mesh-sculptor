import * as THREE from "three";
import { VoxelGrid } from "../voxel/grid";
import { lerp } from "../utils/math";

class MarchingCubes {
  geometry: THREE.BufferGeometry;
  enableUvs: boolean;
  enableColors: boolean;
  maxVertexCount: number;
  isosurface: number;

  grid: VoxelGrid;
  normalCache: Float32Array;
  colorCache: Float32Array;

  positionArray: Float32Array;
  normalArray: Float32Array;
  uvArray: Float32Array;
  colorArray: Float32Array;
  vertexCount: number;

  tempPos: Float32Array;
  tempNor: Float32Array;
  tempCol: Float32Array;

  constructor(grid: VoxelGrid, enableUvs = false, enableColors = false, maxVertexCount = 30000) {
    this.geometry = new THREE.BufferGeometry();

    // temp buffers used in polygonize
    this.tempPos = new Float32Array(12 * 3);
    this.tempNor = new Float32Array(12 * 3);
    this.tempCol = new Float32Array(12 * 3);

    this.enableUvs = enableUvs;
    this.enableColors = enableColors;
    this.maxVertexCount = maxVertexCount;
    this.isosurface = 0;

    this.grid = grid;
    this.normalCache = new Float32Array(grid.size * 3);
    this.colorCache = new Float32Array(grid.size * 3);

    this.vertexCount = 0;
    this.positionArray = new Float32Array(maxVertexCount * 3);
    const positionAttribute = new THREE.BufferAttribute(this.positionArray, 3);
    positionAttribute.setUsage(THREE.DynamicDrawUsage);
    this.geometry.setAttribute("position", positionAttribute);

    this.normalArray = new Float32Array(maxVertexCount * 3);
    const normalAttribute = new THREE.BufferAttribute(this.normalArray, 3);
    normalAttribute.setUsage(THREE.DynamicDrawUsage);
    this.geometry.setAttribute("normal", normalAttribute);

    this.uvArray = new Float32Array(maxVertexCount * 2);
    if (this.enableUvs) {
      const uvAttribute = new THREE.BufferAttribute(this.uvArray, 2);
      uvAttribute.setUsage(THREE.DynamicDrawUsage);
      this.geometry.setAttribute("uv", uvAttribute);
    }

    this.colorArray = new Float32Array(maxVertexCount * 3);
    if (this.enableColors) {
      const colorAttribute = new THREE.BufferAttribute(this.colorArray, 3);
      colorAttribute.setUsage(THREE.DynamicDrawUsage);
      this.geometry.setAttribute("color", colorAttribute);
    }
  }

  ///////////////////////
  // Polygonization
  ///////////////////////

  private interpolateEdge(
    axis: number,
    vIdx: number,
    eIdx: number,
    x: number,
    y: number,
    z: number,
    aVal: number,
    bVal: number
  ) {
    const aOffset = vIdx * 3;
    const bOffset = aOffset + [3 * this.grid.dx, 3 * this.grid.dy, 3 * this.grid.dz][axis];
    const tempBufferOffset = eIdx * 3;
    const axisToInterpolate = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ][axis];

    const mu = Math.abs(aVal - bVal) < 1e-5 ? 0.5 : (this.isosurface - aVal) / (bVal - aVal);
    this.tempPos[tempBufferOffset + 0] = x + mu * axisToInterpolate[0];
    this.tempPos[tempBufferOffset + 1] = y + mu * axisToInterpolate[1];
    this.tempPos[tempBufferOffset + 2] = z + mu * axisToInterpolate[2];

    const normalCache = this.normalCache;
    this.tempNor[tempBufferOffset + 0] = lerp(
      normalCache[aOffset + 0],
      normalCache[bOffset + 0],
      mu
    );
    this.tempNor[tempBufferOffset + 1] = lerp(
      normalCache[aOffset + 1],
      normalCache[bOffset + 1],
      mu
    );
    this.tempNor[tempBufferOffset + 2] = lerp(
      normalCache[aOffset + 2],
      normalCache[bOffset + 2],
      mu
    );
  }

  private calcNormal(vIdx: number) {
    const nIdx = vIdx * 3;

    if (this.normalCache[nIdx] === 0.0) {
      // only compute if not cached
      const grid = this.grid;
      this.normalCache[nIdx + 0] = grid.data[nIdx - grid.dx] - grid.data[nIdx + grid.dx];
      this.normalCache[nIdx + 1] = grid.data[nIdx - grid.dy] - grid.data[nIdx + grid.dy];
      this.normalCache[nIdx + 2] = grid.data[nIdx - grid.dz] - grid.data[nIdx + grid.dz];
    }
  }

  // Returns total number of triangles. Fills triangles.
  // (this is where most of time is spent - it's inner work of O(n3) loop )
  // https://paulbourke.net/geometry/polygonise/
  private polygonize(x: number, y: number, z: number, vIdx: number) {
    const grid = this.grid;

    // Get values of the voxel grid at each corner of the cube
    const i0 = vIdx, // 0,0,0,
      i1 = i0 + grid.dx, // 1,0,0
      i2 = i0 + grid.dy, // 0,1,0
      i3 = i1 + grid.dy, // 1,1,0
      i4 = i0 + grid.dz, // 0,0,1
      i5 = i1 + grid.dz, // 1,0,1
      i6 = i2 + grid.dz, // 0,1,1
      i7 = i3 + grid.dz; // 1,1,1

    let cubeIdx = 0;
    const field0 = grid.data[i0],
      field1 = grid.data[i1],
      field2 = grid.data[i2],
      field3 = grid.data[i3],
      field4 = grid.data[i4],
      field5 = grid.data[i5],
      field6 = grid.data[i6],
      field7 = grid.data[i7];

    // cubeIdx is an 8 bit index, one per vertex
    if (field0 < this.isosurface) cubeIdx |= 0b00000001;
    if (field1 < this.isosurface) cubeIdx |= 0b00000010;
    if (field2 < this.isosurface) cubeIdx |= 0b00001000;
    if (field3 < this.isosurface) cubeIdx |= 0b00000100;
    if (field4 < this.isosurface) cubeIdx |= 0b00010000;
    if (field5 < this.isosurface) cubeIdx |= 0b00100000;
    if (field6 < this.isosurface) cubeIdx |= 0b10000000;
    if (field7 < this.isosurface) cubeIdx |= 0b01000000;

    // Map 8 bit cube index to 12 bit edge index (marking which edges cross the isosurface)
    const crossedEdges = edgeTable[cubeIdx];

    // Early exit if no edges cross the isosurface
    if (crossedEdges === 0) return 0;

    // Interpolate crossed edges, load temporary buffers
    // Top of the cube
    if (crossedEdges & 0b000000000001) {
      this.calcNormal(i0);
      this.calcNormal(i1);
      this.interpolateEdge(0, i0, 0, x, y, z, field0, field1);
    }
    if (crossedEdges & 0b000000000010) {
      this.calcNormal(i1);
      this.calcNormal(i3);
      this.interpolateEdge(1, i1, 1, x + 1, y, z, field1, field3);
    }
    if (crossedEdges & 0b000000000100) {
      this.calcNormal(i2);
      this.calcNormal(i3);
      this.interpolateEdge(0, i2, 2, x, y + 1, z, field2, field3);
    }
    if (crossedEdges & 0b000000001000) {
      this.calcNormal(i0);
      this.calcNormal(i2);
      this.interpolateEdge(1, i0, 3, x, y, z, field0, field2);
    }
    // Bottom of the cube
    if (crossedEdges & 0b000000010000) {
      this.calcNormal(i4);
      this.calcNormal(i5);
      this.interpolateEdge(0, i4, 4, x, y, z + 1, field4, field5);
    }
    if (crossedEdges & 0b000000100000) {
      this.calcNormal(i5);
      this.calcNormal(i7);
      this.interpolateEdge(1, i5, 5, x + 1, y, z + 1, field5, field7);
    }

    if (crossedEdges & 0b000001000000) {
      this.calcNormal(i6);
      this.calcNormal(i7);
      this.interpolateEdge(0, i6, 6, x, y + 1, z + 1, field6, field7);
    }

    if (crossedEdges & 0b000010000000) {
      this.calcNormal(i4);
      this.calcNormal(i6);
      this.interpolateEdge(1, i4, 7, x, y, z + 1, field4, field6);
    }
    // Vertical lines of the cube
    if (crossedEdges & 0b000100000000) {
      this.calcNormal(i0);
      this.calcNormal(i4);
      this.interpolateEdge(2, i0, 8, x, y, z, field0, field4);
    }
    if (crossedEdges & 0b001000000000) {
      this.calcNormal(i1);
      this.calcNormal(i5);
      this.interpolateEdge(2, i1, 9, x + 1, y, z, field1, field5);
    }
    if (crossedEdges & 0b010000000000) {
      this.calcNormal(i3);
      this.calcNormal(i7);
      this.interpolateEdge(2, i3, 10, x + 1, y + 1, z, field3, field7);
    }
    if (crossedEdges & 0b100000000000) {
      this.calcNormal(i2);
      this.calcNormal(i6);
      this.interpolateEdge(2, i2, 11, x, y + 1, z, field2, field6);
    }

    // Create triangles
    let numTriangles = 0;
    let triIdx = cubeIdx << 4;
    while (triTable[triIdx] != -1) {
      this.createTriangle(
        3 * triTable[triIdx + 0],
        3 * triTable[triIdx + 1],
        3 * triTable[triIdx + 2]
      );
      numTriangles++;
      triIdx += 3;
    }

    return numTriangles;
  }

  private createTriangle(edge1: number, edge2: number, edge3: number) {
    let offset = this.vertexCount * 3;

    // positions
    this.positionArray[offset + 0] = this.tempPos[edge1 + 0];
    this.positionArray[offset + 1] = this.tempPos[edge1 + 1];
    this.positionArray[offset + 2] = this.tempPos[edge1 + 2];

    this.positionArray[offset + 3] = this.tempPos[edge2 + 0];
    this.positionArray[offset + 4] = this.tempPos[edge2 + 1];
    this.positionArray[offset + 5] = this.tempPos[edge2 + 2];

    this.positionArray[offset + 6] = this.tempPos[edge3 + 0];
    this.positionArray[offset + 7] = this.tempPos[edge3 + 1];
    this.positionArray[offset + 8] = this.tempPos[edge3 + 2];

    // normals
    this.normalArray[offset + 0] = this.tempNor[edge1 + 0];
    this.normalArray[offset + 1] = this.tempNor[edge1 + 1];
    this.normalArray[offset + 2] = this.tempNor[edge1 + 2];

    this.normalArray[offset + 3] = this.tempNor[edge2 + 0];
    this.normalArray[offset + 4] = this.tempNor[edge2 + 1];
    this.normalArray[offset + 5] = this.tempNor[edge2 + 2];

    this.normalArray[offset + 6] = this.tempNor[edge3 + 0];
    this.normalArray[offset + 7] = this.tempNor[edge3 + 1];
    this.normalArray[offset + 8] = this.tempNor[edge3 + 2];

    // colors
    if (this.enableColors) {
      this.colorArray[offset + 0] = this.tempCol[edge1 + 0];
      this.colorArray[offset + 1] = this.tempCol[edge1 + 1];
      this.colorArray[offset + 2] = this.tempCol[edge1 + 2];

      this.colorArray[offset + 3] = this.tempCol[edge2 + 0];
      this.colorArray[offset + 4] = this.tempCol[edge2 + 1];
      this.colorArray[offset + 5] = this.tempCol[edge2 + 2];

      this.colorArray[offset + 6] = this.tempCol[edge3 + 0];
      this.colorArray[offset + 7] = this.tempCol[edge3 + 1];
      this.colorArray[offset + 8] = this.tempCol[edge3 + 2];
    }

    // uvs
    if (this.enableUvs) {
      offset = this.vertexCount * 2;

      this.uvArray[offset + 0] = this.tempPos[edge1 + 0];
      this.uvArray[offset + 1] = this.tempPos[edge1 + 2];

      this.uvArray[offset + 2] = this.tempPos[edge2 + 0];
      this.uvArray[offset + 3] = this.tempPos[edge2 + 2];

      this.uvArray[offset + 4] = this.tempPos[edge3 + 0];
      this.uvArray[offset + 5] = this.tempPos[edge3 + 2];
    }

    this.vertexCount += 3;
  }

  reset() {
    this.grid.setGrid(1);
    this.normalCache.fill(0);
    this.colorCache.fill(0);
  }

  triangulate() {
    this.vertexCount = 0;

    // Avoid triangulating edges b/c degenerate normals
    const resolution = this.grid.resolution - 2;

    for (let z = 1; z < resolution; z++) {
      const zOffset = this.grid.dz * z;
      for (let y = 1; y < resolution; y++) {
        const yzOffset = zOffset + this.grid.dy * y;
        for (let x = 1; x < resolution; x++) {
          const xyzOffset = yzOffset + this.grid.dx * x;
          this.polygonize(x, y, z, xyzOffset);
        }
      }
    }

    this.geometry.setDrawRange(0, this.vertexCount);
    this.geometry.getAttribute("position").needsUpdate = true;
    this.geometry.getAttribute("normal").needsUpdate = true;
    if (this.enableUvs) this.geometry.getAttribute("uv").needsUpdate = true;
    if (this.enableColors) this.geometry.getAttribute("color").needsUpdate = true;

    if (this.vertexCount > this.maxVertexCount)
      console.log("Marching cubes max vertex count exceeded.");
  }
}

// Marching cubes lookup tables from the original paper

// prettier-ignore
const edgeTable = new Int32Array( [
	0x0, 0x109, 0x203, 0x30a, 0x406, 0x50f, 0x605, 0x70c,
	0x80c, 0x905, 0xa0f, 0xb06, 0xc0a, 0xd03, 0xe09, 0xf00,
	0x190, 0x99, 0x393, 0x29a, 0x596, 0x49f, 0x795, 0x69c,
	0x99c, 0x895, 0xb9f, 0xa96, 0xd9a, 0xc93, 0xf99, 0xe90,
	0x230, 0x339, 0x33, 0x13a, 0x636, 0x73f, 0x435, 0x53c,
	0xa3c, 0xb35, 0x83f, 0x936, 0xe3a, 0xf33, 0xc39, 0xd30,
	0x3a0, 0x2a9, 0x1a3, 0xaa, 0x7a6, 0x6af, 0x5a5, 0x4ac,
	0xbac, 0xaa5, 0x9af, 0x8a6, 0xfaa, 0xea3, 0xda9, 0xca0,
	0x460, 0x569, 0x663, 0x76a, 0x66, 0x16f, 0x265, 0x36c,
	0xc6c, 0xd65, 0xe6f, 0xf66, 0x86a, 0x963, 0xa69, 0xb60,
	0x5f0, 0x4f9, 0x7f3, 0x6fa, 0x1f6, 0xff, 0x3f5, 0x2fc,
	0xdfc, 0xcf5, 0xfff, 0xef6, 0x9fa, 0x8f3, 0xbf9, 0xaf0,
	0x650, 0x759, 0x453, 0x55a, 0x256, 0x35f, 0x55, 0x15c,
	0xe5c, 0xf55, 0xc5f, 0xd56, 0xa5a, 0xb53, 0x859, 0x950,
	0x7c0, 0x6c9, 0x5c3, 0x4ca, 0x3c6, 0x2cf, 0x1c5, 0xcc,
	0xfcc, 0xec5, 0xdcf, 0xcc6, 0xbca, 0xac3, 0x9c9, 0x8c0,
	0x8c0, 0x9c9, 0xac3, 0xbca, 0xcc6, 0xdcf, 0xec5, 0xfcc,
	0xcc, 0x1c5, 0x2cf, 0x3c6, 0x4ca, 0x5c3, 0x6c9, 0x7c0,
	0x950, 0x859, 0xb53, 0xa5a, 0xd56, 0xc5f, 0xf55, 0xe5c,
	0x15c, 0x55, 0x35f, 0x256, 0x55a, 0x453, 0x759, 0x650,
	0xaf0, 0xbf9, 0x8f3, 0x9fa, 0xef6, 0xfff, 0xcf5, 0xdfc,
	0x2fc, 0x3f5, 0xff, 0x1f6, 0x6fa, 0x7f3, 0x4f9, 0x5f0,
	0xb60, 0xa69, 0x963, 0x86a, 0xf66, 0xe6f, 0xd65, 0xc6c,
	0x36c, 0x265, 0x16f, 0x66, 0x76a, 0x663, 0x569, 0x460,
	0xca0, 0xda9, 0xea3, 0xfaa, 0x8a6, 0x9af, 0xaa5, 0xbac,
	0x4ac, 0x5a5, 0x6af, 0x7a6, 0xaa, 0x1a3, 0x2a9, 0x3a0,
	0xd30, 0xc39, 0xf33, 0xe3a, 0x936, 0x83f, 0xb35, 0xa3c,
	0x53c, 0x435, 0x73f, 0x636, 0x13a, 0x33, 0x339, 0x230,
	0xe90, 0xf99, 0xc93, 0xd9a, 0xa96, 0xb9f, 0x895, 0x99c,
	0x69c, 0x795, 0x49f, 0x596, 0x29a, 0x393, 0x99, 0x190,
	0xf00, 0xe09, 0xd03, 0xc0a, 0xb06, 0xa0f, 0x905, 0x80c,
	0x70c, 0x605, 0x50f, 0x406, 0x30a, 0x203, 0x109, 0x0 ] );

// prettier-ignore
const triTable = new Int32Array( [
	- 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 8, 3, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 1, 9, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 8, 3, 9, 8, 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 2, 10, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 8, 3, 1, 2, 10, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	9, 2, 10, 0, 2, 9, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	2, 8, 3, 2, 10, 8, 10, 9, 8, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	3, 11, 2, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 11, 2, 8, 11, 0, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 9, 0, 2, 3, 11, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 11, 2, 1, 9, 11, 9, 8, 11, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	3, 10, 1, 11, 10, 3, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 10, 1, 0, 8, 10, 8, 11, 10, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	3, 9, 0, 3, 11, 9, 11, 10, 9, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	9, 8, 10, 10, 8, 11, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	4, 7, 8, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	4, 3, 0, 7, 3, 4, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 1, 9, 8, 4, 7, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	4, 1, 9, 4, 7, 1, 7, 3, 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 2, 10, 8, 4, 7, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	3, 4, 7, 3, 0, 4, 1, 2, 10, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	9, 2, 10, 9, 0, 2, 8, 4, 7, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	2, 10, 9, 2, 9, 7, 2, 7, 3, 7, 9, 4, - 1, - 1, - 1, - 1,
	8, 4, 7, 3, 11, 2, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	11, 4, 7, 11, 2, 4, 2, 0, 4, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	9, 0, 1, 8, 4, 7, 2, 3, 11, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	4, 7, 11, 9, 4, 11, 9, 11, 2, 9, 2, 1, - 1, - 1, - 1, - 1,
	3, 10, 1, 3, 11, 10, 7, 8, 4, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 11, 10, 1, 4, 11, 1, 0, 4, 7, 11, 4, - 1, - 1, - 1, - 1,
	4, 7, 8, 9, 0, 11, 9, 11, 10, 11, 0, 3, - 1, - 1, - 1, - 1,
	4, 7, 11, 4, 11, 9, 9, 11, 10, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	9, 5, 4, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	9, 5, 4, 0, 8, 3, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 5, 4, 1, 5, 0, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	8, 5, 4, 8, 3, 5, 3, 1, 5, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 2, 10, 9, 5, 4, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	3, 0, 8, 1, 2, 10, 4, 9, 5, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	5, 2, 10, 5, 4, 2, 4, 0, 2, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	2, 10, 5, 3, 2, 5, 3, 5, 4, 3, 4, 8, - 1, - 1, - 1, - 1,
	9, 5, 4, 2, 3, 11, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 11, 2, 0, 8, 11, 4, 9, 5, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 5, 4, 0, 1, 5, 2, 3, 11, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	2, 1, 5, 2, 5, 8, 2, 8, 11, 4, 8, 5, - 1, - 1, - 1, - 1,
	10, 3, 11, 10, 1, 3, 9, 5, 4, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	4, 9, 5, 0, 8, 1, 8, 10, 1, 8, 11, 10, - 1, - 1, - 1, - 1,
	5, 4, 0, 5, 0, 11, 5, 11, 10, 11, 0, 3, - 1, - 1, - 1, - 1,
	5, 4, 8, 5, 8, 10, 10, 8, 11, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	9, 7, 8, 5, 7, 9, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	9, 3, 0, 9, 5, 3, 5, 7, 3, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 7, 8, 0, 1, 7, 1, 5, 7, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 5, 3, 3, 5, 7, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	9, 7, 8, 9, 5, 7, 10, 1, 2, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	10, 1, 2, 9, 5, 0, 5, 3, 0, 5, 7, 3, - 1, - 1, - 1, - 1,
	8, 0, 2, 8, 2, 5, 8, 5, 7, 10, 5, 2, - 1, - 1, - 1, - 1,
	2, 10, 5, 2, 5, 3, 3, 5, 7, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	7, 9, 5, 7, 8, 9, 3, 11, 2, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	9, 5, 7, 9, 7, 2, 9, 2, 0, 2, 7, 11, - 1, - 1, - 1, - 1,
	2, 3, 11, 0, 1, 8, 1, 7, 8, 1, 5, 7, - 1, - 1, - 1, - 1,
	11, 2, 1, 11, 1, 7, 7, 1, 5, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	9, 5, 8, 8, 5, 7, 10, 1, 3, 10, 3, 11, - 1, - 1, - 1, - 1,
	5, 7, 0, 5, 0, 9, 7, 11, 0, 1, 0, 10, 11, 10, 0, - 1,
	11, 10, 0, 11, 0, 3, 10, 5, 0, 8, 0, 7, 5, 7, 0, - 1,
	11, 10, 5, 7, 11, 5, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	10, 6, 5, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 8, 3, 5, 10, 6, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	9, 0, 1, 5, 10, 6, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 8, 3, 1, 9, 8, 5, 10, 6, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 6, 5, 2, 6, 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 6, 5, 1, 2, 6, 3, 0, 8, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	9, 6, 5, 9, 0, 6, 0, 2, 6, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	5, 9, 8, 5, 8, 2, 5, 2, 6, 3, 2, 8, - 1, - 1, - 1, - 1,
	2, 3, 11, 10, 6, 5, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	11, 0, 8, 11, 2, 0, 10, 6, 5, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 1, 9, 2, 3, 11, 5, 10, 6, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	5, 10, 6, 1, 9, 2, 9, 11, 2, 9, 8, 11, - 1, - 1, - 1, - 1,
	6, 3, 11, 6, 5, 3, 5, 1, 3, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 8, 11, 0, 11, 5, 0, 5, 1, 5, 11, 6, - 1, - 1, - 1, - 1,
	3, 11, 6, 0, 3, 6, 0, 6, 5, 0, 5, 9, - 1, - 1, - 1, - 1,
	6, 5, 9, 6, 9, 11, 11, 9, 8, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	5, 10, 6, 4, 7, 8, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	4, 3, 0, 4, 7, 3, 6, 5, 10, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 9, 0, 5, 10, 6, 8, 4, 7, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	10, 6, 5, 1, 9, 7, 1, 7, 3, 7, 9, 4, - 1, - 1, - 1, - 1,
	6, 1, 2, 6, 5, 1, 4, 7, 8, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 2, 5, 5, 2, 6, 3, 0, 4, 3, 4, 7, - 1, - 1, - 1, - 1,
	8, 4, 7, 9, 0, 5, 0, 6, 5, 0, 2, 6, - 1, - 1, - 1, - 1,
	7, 3, 9, 7, 9, 4, 3, 2, 9, 5, 9, 6, 2, 6, 9, - 1,
	3, 11, 2, 7, 8, 4, 10, 6, 5, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	5, 10, 6, 4, 7, 2, 4, 2, 0, 2, 7, 11, - 1, - 1, - 1, - 1,
	0, 1, 9, 4, 7, 8, 2, 3, 11, 5, 10, 6, - 1, - 1, - 1, - 1,
	9, 2, 1, 9, 11, 2, 9, 4, 11, 7, 11, 4, 5, 10, 6, - 1,
	8, 4, 7, 3, 11, 5, 3, 5, 1, 5, 11, 6, - 1, - 1, - 1, - 1,
	5, 1, 11, 5, 11, 6, 1, 0, 11, 7, 11, 4, 0, 4, 11, - 1,
	0, 5, 9, 0, 6, 5, 0, 3, 6, 11, 6, 3, 8, 4, 7, - 1,
	6, 5, 9, 6, 9, 11, 4, 7, 9, 7, 11, 9, - 1, - 1, - 1, - 1,
	10, 4, 9, 6, 4, 10, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	4, 10, 6, 4, 9, 10, 0, 8, 3, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	10, 0, 1, 10, 6, 0, 6, 4, 0, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	8, 3, 1, 8, 1, 6, 8, 6, 4, 6, 1, 10, - 1, - 1, - 1, - 1,
	1, 4, 9, 1, 2, 4, 2, 6, 4, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	3, 0, 8, 1, 2, 9, 2, 4, 9, 2, 6, 4, - 1, - 1, - 1, - 1,
	0, 2, 4, 4, 2, 6, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	8, 3, 2, 8, 2, 4, 4, 2, 6, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	10, 4, 9, 10, 6, 4, 11, 2, 3, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 8, 2, 2, 8, 11, 4, 9, 10, 4, 10, 6, - 1, - 1, - 1, - 1,
	3, 11, 2, 0, 1, 6, 0, 6, 4, 6, 1, 10, - 1, - 1, - 1, - 1,
	6, 4, 1, 6, 1, 10, 4, 8, 1, 2, 1, 11, 8, 11, 1, - 1,
	9, 6, 4, 9, 3, 6, 9, 1, 3, 11, 6, 3, - 1, - 1, - 1, - 1,
	8, 11, 1, 8, 1, 0, 11, 6, 1, 9, 1, 4, 6, 4, 1, - 1,
	3, 11, 6, 3, 6, 0, 0, 6, 4, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	6, 4, 8, 11, 6, 8, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	7, 10, 6, 7, 8, 10, 8, 9, 10, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 7, 3, 0, 10, 7, 0, 9, 10, 6, 7, 10, - 1, - 1, - 1, - 1,
	10, 6, 7, 1, 10, 7, 1, 7, 8, 1, 8, 0, - 1, - 1, - 1, - 1,
	10, 6, 7, 10, 7, 1, 1, 7, 3, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 2, 6, 1, 6, 8, 1, 8, 9, 8, 6, 7, - 1, - 1, - 1, - 1,
	2, 6, 9, 2, 9, 1, 6, 7, 9, 0, 9, 3, 7, 3, 9, - 1,
	7, 8, 0, 7, 0, 6, 6, 0, 2, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	7, 3, 2, 6, 7, 2, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	2, 3, 11, 10, 6, 8, 10, 8, 9, 8, 6, 7, - 1, - 1, - 1, - 1,
	2, 0, 7, 2, 7, 11, 0, 9, 7, 6, 7, 10, 9, 10, 7, - 1,
	1, 8, 0, 1, 7, 8, 1, 10, 7, 6, 7, 10, 2, 3, 11, - 1,
	11, 2, 1, 11, 1, 7, 10, 6, 1, 6, 7, 1, - 1, - 1, - 1, - 1,
	8, 9, 6, 8, 6, 7, 9, 1, 6, 11, 6, 3, 1, 3, 6, - 1,
	0, 9, 1, 11, 6, 7, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	7, 8, 0, 7, 0, 6, 3, 11, 0, 11, 6, 0, - 1, - 1, - 1, - 1,
	7, 11, 6, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	7, 6, 11, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	3, 0, 8, 11, 7, 6, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 1, 9, 11, 7, 6, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	8, 1, 9, 8, 3, 1, 11, 7, 6, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	10, 1, 2, 6, 11, 7, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 2, 10, 3, 0, 8, 6, 11, 7, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	2, 9, 0, 2, 10, 9, 6, 11, 7, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	6, 11, 7, 2, 10, 3, 10, 8, 3, 10, 9, 8, - 1, - 1, - 1, - 1,
	7, 2, 3, 6, 2, 7, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	7, 0, 8, 7, 6, 0, 6, 2, 0, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	2, 7, 6, 2, 3, 7, 0, 1, 9, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 6, 2, 1, 8, 6, 1, 9, 8, 8, 7, 6, - 1, - 1, - 1, - 1,
	10, 7, 6, 10, 1, 7, 1, 3, 7, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	10, 7, 6, 1, 7, 10, 1, 8, 7, 1, 0, 8, - 1, - 1, - 1, - 1,
	0, 3, 7, 0, 7, 10, 0, 10, 9, 6, 10, 7, - 1, - 1, - 1, - 1,
	7, 6, 10, 7, 10, 8, 8, 10, 9, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	6, 8, 4, 11, 8, 6, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	3, 6, 11, 3, 0, 6, 0, 4, 6, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	8, 6, 11, 8, 4, 6, 9, 0, 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	9, 4, 6, 9, 6, 3, 9, 3, 1, 11, 3, 6, - 1, - 1, - 1, - 1,
	6, 8, 4, 6, 11, 8, 2, 10, 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 2, 10, 3, 0, 11, 0, 6, 11, 0, 4, 6, - 1, - 1, - 1, - 1,
	4, 11, 8, 4, 6, 11, 0, 2, 9, 2, 10, 9, - 1, - 1, - 1, - 1,
	10, 9, 3, 10, 3, 2, 9, 4, 3, 11, 3, 6, 4, 6, 3, - 1,
	8, 2, 3, 8, 4, 2, 4, 6, 2, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 4, 2, 4, 6, 2, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 9, 0, 2, 3, 4, 2, 4, 6, 4, 3, 8, - 1, - 1, - 1, - 1,
	1, 9, 4, 1, 4, 2, 2, 4, 6, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	8, 1, 3, 8, 6, 1, 8, 4, 6, 6, 10, 1, - 1, - 1, - 1, - 1,
	10, 1, 0, 10, 0, 6, 6, 0, 4, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	4, 6, 3, 4, 3, 8, 6, 10, 3, 0, 3, 9, 10, 9, 3, - 1,
	10, 9, 4, 6, 10, 4, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	4, 9, 5, 7, 6, 11, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 8, 3, 4, 9, 5, 11, 7, 6, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	5, 0, 1, 5, 4, 0, 7, 6, 11, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	11, 7, 6, 8, 3, 4, 3, 5, 4, 3, 1, 5, - 1, - 1, - 1, - 1,
	9, 5, 4, 10, 1, 2, 7, 6, 11, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	6, 11, 7, 1, 2, 10, 0, 8, 3, 4, 9, 5, - 1, - 1, - 1, - 1,
	7, 6, 11, 5, 4, 10, 4, 2, 10, 4, 0, 2, - 1, - 1, - 1, - 1,
	3, 4, 8, 3, 5, 4, 3, 2, 5, 10, 5, 2, 11, 7, 6, - 1,
	7, 2, 3, 7, 6, 2, 5, 4, 9, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	9, 5, 4, 0, 8, 6, 0, 6, 2, 6, 8, 7, - 1, - 1, - 1, - 1,
	3, 6, 2, 3, 7, 6, 1, 5, 0, 5, 4, 0, - 1, - 1, - 1, - 1,
	6, 2, 8, 6, 8, 7, 2, 1, 8, 4, 8, 5, 1, 5, 8, - 1,
	9, 5, 4, 10, 1, 6, 1, 7, 6, 1, 3, 7, - 1, - 1, - 1, - 1,
	1, 6, 10, 1, 7, 6, 1, 0, 7, 8, 7, 0, 9, 5, 4, - 1,
	4, 0, 10, 4, 10, 5, 0, 3, 10, 6, 10, 7, 3, 7, 10, - 1,
	7, 6, 10, 7, 10, 8, 5, 4, 10, 4, 8, 10, - 1, - 1, - 1, - 1,
	6, 9, 5, 6, 11, 9, 11, 8, 9, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	3, 6, 11, 0, 6, 3, 0, 5, 6, 0, 9, 5, - 1, - 1, - 1, - 1,
	0, 11, 8, 0, 5, 11, 0, 1, 5, 5, 6, 11, - 1, - 1, - 1, - 1,
	6, 11, 3, 6, 3, 5, 5, 3, 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 2, 10, 9, 5, 11, 9, 11, 8, 11, 5, 6, - 1, - 1, - 1, - 1,
	0, 11, 3, 0, 6, 11, 0, 9, 6, 5, 6, 9, 1, 2, 10, - 1,
	11, 8, 5, 11, 5, 6, 8, 0, 5, 10, 5, 2, 0, 2, 5, - 1,
	6, 11, 3, 6, 3, 5, 2, 10, 3, 10, 5, 3, - 1, - 1, - 1, - 1,
	5, 8, 9, 5, 2, 8, 5, 6, 2, 3, 8, 2, - 1, - 1, - 1, - 1,
	9, 5, 6, 9, 6, 0, 0, 6, 2, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 5, 8, 1, 8, 0, 5, 6, 8, 3, 8, 2, 6, 2, 8, - 1,
	1, 5, 6, 2, 1, 6, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 3, 6, 1, 6, 10, 3, 8, 6, 5, 6, 9, 8, 9, 6, - 1,
	10, 1, 0, 10, 0, 6, 9, 5, 0, 5, 6, 0, - 1, - 1, - 1, - 1,
	0, 3, 8, 5, 6, 10, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	10, 5, 6, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	11, 5, 10, 7, 5, 11, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	11, 5, 10, 11, 7, 5, 8, 3, 0, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	5, 11, 7, 5, 10, 11, 1, 9, 0, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	10, 7, 5, 10, 11, 7, 9, 8, 1, 8, 3, 1, - 1, - 1, - 1, - 1,
	11, 1, 2, 11, 7, 1, 7, 5, 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 8, 3, 1, 2, 7, 1, 7, 5, 7, 2, 11, - 1, - 1, - 1, - 1,
	9, 7, 5, 9, 2, 7, 9, 0, 2, 2, 11, 7, - 1, - 1, - 1, - 1,
	7, 5, 2, 7, 2, 11, 5, 9, 2, 3, 2, 8, 9, 8, 2, - 1,
	2, 5, 10, 2, 3, 5, 3, 7, 5, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	8, 2, 0, 8, 5, 2, 8, 7, 5, 10, 2, 5, - 1, - 1, - 1, - 1,
	9, 0, 1, 5, 10, 3, 5, 3, 7, 3, 10, 2, - 1, - 1, - 1, - 1,
	9, 8, 2, 9, 2, 1, 8, 7, 2, 10, 2, 5, 7, 5, 2, - 1,
	1, 3, 5, 3, 7, 5, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 8, 7, 0, 7, 1, 1, 7, 5, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	9, 0, 3, 9, 3, 5, 5, 3, 7, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	9, 8, 7, 5, 9, 7, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	5, 8, 4, 5, 10, 8, 10, 11, 8, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	5, 0, 4, 5, 11, 0, 5, 10, 11, 11, 3, 0, - 1, - 1, - 1, - 1,
	0, 1, 9, 8, 4, 10, 8, 10, 11, 10, 4, 5, - 1, - 1, - 1, - 1,
	10, 11, 4, 10, 4, 5, 11, 3, 4, 9, 4, 1, 3, 1, 4, - 1,
	2, 5, 1, 2, 8, 5, 2, 11, 8, 4, 5, 8, - 1, - 1, - 1, - 1,
	0, 4, 11, 0, 11, 3, 4, 5, 11, 2, 11, 1, 5, 1, 11, - 1,
	0, 2, 5, 0, 5, 9, 2, 11, 5, 4, 5, 8, 11, 8, 5, - 1,
	9, 4, 5, 2, 11, 3, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	2, 5, 10, 3, 5, 2, 3, 4, 5, 3, 8, 4, - 1, - 1, - 1, - 1,
	5, 10, 2, 5, 2, 4, 4, 2, 0, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	3, 10, 2, 3, 5, 10, 3, 8, 5, 4, 5, 8, 0, 1, 9, - 1,
	5, 10, 2, 5, 2, 4, 1, 9, 2, 9, 4, 2, - 1, - 1, - 1, - 1,
	8, 4, 5, 8, 5, 3, 3, 5, 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 4, 5, 1, 0, 5, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	8, 4, 5, 8, 5, 3, 9, 0, 5, 0, 3, 5, - 1, - 1, - 1, - 1,
	9, 4, 5, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	4, 11, 7, 4, 9, 11, 9, 10, 11, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 8, 3, 4, 9, 7, 9, 11, 7, 9, 10, 11, - 1, - 1, - 1, - 1,
	1, 10, 11, 1, 11, 4, 1, 4, 0, 7, 4, 11, - 1, - 1, - 1, - 1,
	3, 1, 4, 3, 4, 8, 1, 10, 4, 7, 4, 11, 10, 11, 4, - 1,
	4, 11, 7, 9, 11, 4, 9, 2, 11, 9, 1, 2, - 1, - 1, - 1, - 1,
	9, 7, 4, 9, 11, 7, 9, 1, 11, 2, 11, 1, 0, 8, 3, - 1,
	11, 7, 4, 11, 4, 2, 2, 4, 0, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	11, 7, 4, 11, 4, 2, 8, 3, 4, 3, 2, 4, - 1, - 1, - 1, - 1,
	2, 9, 10, 2, 7, 9, 2, 3, 7, 7, 4, 9, - 1, - 1, - 1, - 1,
	9, 10, 7, 9, 7, 4, 10, 2, 7, 8, 7, 0, 2, 0, 7, - 1,
	3, 7, 10, 3, 10, 2, 7, 4, 10, 1, 10, 0, 4, 0, 10, - 1,
	1, 10, 2, 8, 7, 4, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	4, 9, 1, 4, 1, 7, 7, 1, 3, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	4, 9, 1, 4, 1, 7, 0, 8, 1, 8, 7, 1, - 1, - 1, - 1, - 1,
	4, 0, 3, 7, 4, 3, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	4, 8, 7, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	9, 10, 8, 10, 11, 8, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	3, 0, 9, 3, 9, 11, 11, 9, 10, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 1, 10, 0, 10, 8, 8, 10, 11, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	3, 1, 10, 11, 3, 10, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 2, 11, 1, 11, 9, 9, 11, 8, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	3, 0, 9, 3, 9, 11, 1, 2, 9, 2, 11, 9, - 1, - 1, - 1, - 1,
	0, 2, 11, 8, 0, 11, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	3, 2, 11, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	2, 3, 8, 2, 8, 10, 10, 8, 9, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	9, 10, 2, 0, 9, 2, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	2, 3, 8, 2, 8, 10, 0, 1, 8, 1, 10, 8, - 1, - 1, - 1, - 1,
	1, 10, 2, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	1, 3, 8, 9, 1, 8, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 9, 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	0, 3, 8, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1,
	- 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1 ] );

export { MarchingCubes };
