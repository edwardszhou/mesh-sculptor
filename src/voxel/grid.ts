import * as THREE from "three";
import { clamp } from "../utils/math";

type SDF = (wx: number, wy: number, wz: number) => number;

type VoxelChunk = {
  idx: number;
  vx: number;
  vy: number;
  vz: number;
  filledCount: number;
  dirty: boolean;
  readonly size: number;
  readonly maxVoxels: number;
};
class VoxelGrid {
  readonly voxelResolution: number;
  readonly vdx: number;
  readonly vdy: number;
  readonly vdz: number;
  readonly numVoxels: number;

  readonly worldSize: number;
  readonly halfWorldSize: number;
  readonly voxelWorldSize: number;

  readonly voxelsPerChunk: number;
  readonly cdx: number;
  readonly cdy: number;
  readonly cdz: number;
  readonly chunkResolution: number;
  readonly chunks: VoxelChunk[];
  readonly chunksDirty: Uint8Array;

  data: Float32Array;
  mesh: THREE.InstancedMesh;
  showMesh: boolean;

  isosurface: number;

  constructor(
    resolution: number,
    worldSize: number = 1,
    voxelsPerChunk: number = 8,
    showMesh: boolean = false
  ) {
    this.voxelResolution = resolution;
    this.vdx = 1;
    this.vdy = resolution;
    this.vdz = resolution * resolution;
    this.numVoxels = resolution * resolution * resolution;

    this.worldSize = worldSize;
    this.halfWorldSize = worldSize / 2;
    this.voxelWorldSize = worldSize / resolution;

    // Chunks for partial surface extraction
    this.voxelsPerChunk = voxelsPerChunk;
    this.chunkResolution = Math.ceil(this.voxelResolution / this.voxelsPerChunk);
    this.cdx = 1;
    this.cdy = this.chunkResolution;
    this.cdz = this.chunkResolution * this.chunkResolution;
    this.chunks = [];
    this.chunksDirty = new Uint8Array(this.chunkResolution ** 3);

    for (let cz = 0; cz < this.chunkResolution; cz++) {
      for (let cy = 0; cy < this.chunkResolution; cy++) {
        for (let cx = 0; cx < this.chunkResolution; cx++) {
          const idx = cx + cy * this.chunkResolution + cz * this.chunkResolution ** 2;
          this.chunks.push({
            idx,
            vx: cx * this.voxelsPerChunk,
            vy: cy * this.voxelsPerChunk,
            vz: cz * this.voxelsPerChunk,
            filledCount: 0,
            dirty: false,
            size: this.voxelsPerChunk,
            maxVoxels:
              Math.min(this.voxelsPerChunk, this.voxelResolution - cx * this.voxelsPerChunk) *
              Math.min(this.voxelsPerChunk, this.voxelResolution - cy * this.voxelsPerChunk) *
              Math.min(this.voxelsPerChunk, this.voxelResolution - cz * this.voxelsPerChunk)
          });
        }
      }
    }

    this.data = new Float32Array(this.numVoxels).fill(1);
    this.isosurface = 0;

    const geometry = new THREE.BoxGeometry(
      this.voxelWorldSize,
      this.voxelWorldSize,
      this.voxelWorldSize
    );
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.1
    });
    this.mesh = new THREE.InstancedMesh(geometry, material, this.numVoxels);
    this.showMesh = showMesh;
    this.mesh.visible = showMesh;
    this.updateMesh();
  }

  vToW(vx: number, vy: number, vz: number) {
    return new THREE.Vector3(
      vx * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2,
      vy * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2,
      vz * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2
    );
  }

  wToV(wx: number, wy: number, wz: number) {
    return [
      Math.floor((wx + this.halfWorldSize) / this.voxelWorldSize),
      Math.floor((wy + this.halfWorldSize) / this.voxelWorldSize),
      Math.floor((wz + this.halfWorldSize) / this.voxelWorldSize)
    ];
  }

  vIdx(vx: number, vy: number, vz: number) {
    return this.vdx * vx + this.vdy * vy + this.vdz * vz;
  }

  getVoxel(vx: number, vy: number, vz: number) {
    return this.data[this.vIdx(vx, vy, vz)];
  }

  getChunk(vx: number, vy: number, vz: number) {
    const cx = Math.floor(vx / this.voxelsPerChunk);
    const cy = Math.floor(vy / this.voxelsPerChunk);
    const cz = Math.floor(vz / this.voxelsPerChunk);
    return this.chunks[cx * this.cdx + cy * this.cdy + cz * this.cdz];
  }

  markChunkDirty(chunk: VoxelChunk) {
    if (!chunk.dirty) {
      chunk.dirty = true;
      this.chunksDirty[chunk.idx] = 1;
    }
  }

  markChunkNotDirty(chunk: VoxelChunk) {
    if (chunk.dirty) {
      chunk.dirty = false;
      this.chunksDirty[chunk.idx] = 0;
    }
  }
  markAllChunksDirty() {
    for (const chunk of this.chunks) {
      chunk.dirty = true;
    }
    this.chunksDirty.fill(1);
  }

  setVoxel(vx: number, vy: number, vz: number, val: number) {
    const idx = this.vIdx(vx, vy, vz);
    const prev = this.data[idx];
    this.data[idx] = val;

    // Update filledCount on the owning chunk
    const chunk = this.getChunk(vx, vy, vz);
    const prevInside = prev < this.isosurface;
    const valInside = val < this.isosurface;
    chunk.filledCount += !prevInside && valInside ? 1 : prevInside && !valInside ? -1 : 0;
    this.markChunkDirty(chunk);

    // const lx = i % this.chunkSize;
    // const ly = j % this.chunkSize;
    // const lz = k % this.chunkSize;

    // if (lx === this.chunkSize - 1 && i + 1 < this.resolution)
    //   this.markChunkDirty(this.getChunk(i + 1, j, k));
    // if (ly === this.chunkSize - 1 && j + 1 < this.resolution)
    //   this.markChunkDirty(this.getChunk(i, j + 1, k));
    // if (lz === this.chunkSize - 1 && k + 1 < this.resolution)
    //   this.markChunkDirty(this.getChunk(i, j, k + 1));
    // if (lx === 0 && i - 1 >= 0) this.markChunkDirty(this.getChunk(i - 1, j, k));
    // if (ly === 0 && j - 1 >= 0) this.markChunkDirty(this.getChunk(i, j - 1, k));
    // if (lz === 0 && k - 1 >= 0) this.markChunkDirty(this.getChunk(i, j, k - 1));
  }

  setSDF(sdf: SDF) {
    for (let vx = 0; vx < this.voxelResolution; vx++) {
      const wx = vx * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2;
      for (let vy = 0; vy < this.voxelResolution; vy++) {
        const wy = vy * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2;
        for (let vz = 0; vz < this.voxelResolution; vz++) {
          const wz = vz * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2;
          this.data[this.vIdx(vx, vy, vz)] = sdf(wx, wy, wz);
        }
      }
    }
    this.markAllChunksDirty();
    this.updateChunkFilledCounts();
    this.updateMesh();
  }

  applyMinSDF(sdf: SDF) {
    for (let vx = 0; vx < this.voxelResolution; vx++) {
      const wx = vx * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2;
      for (let vy = 0; vy < this.voxelResolution; vy++) {
        const wy = vy * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2;
        for (let vz = 0; vz < this.voxelResolution; vz++) {
          const wz = vz * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2;
          const val = sdf(wx, wy, wz);
          const idx = this.vIdx(vx, vy, vz);
          this.data[idx] = Math.min(this.data[idx], val);
        }
      }
    }
    this.markAllChunksDirty();
    this.updateChunkFilledCounts();
    this.updateMesh();
  }

  applyMaxSDF(sdf: SDF) {
    for (let vx = 0; vx < this.voxelResolution; vx++) {
      const wx = vx * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2;
      for (let vy = 0; vy < this.voxelResolution; vy++) {
        const wy = vy * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2;
        for (let vz = 0; vz < this.voxelResolution; vz++) {
          const wz = vz * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2;
          const val = sdf(wx, wy, wz);
          const idx = this.vIdx(vx, vy, vz);
          this.data[idx] = Math.max(this.data[idx], val);
        }
      }
    }
    this.markAllChunksDirty();
    this.updateChunkFilledCounts();
    this.updateMesh();
  }

  setGrid(val: number) {
    this.data.fill(val);
    this.markAllChunksDirty();
    this.updateChunkFilledCounts();
    this.updateMesh();
  }

  setIsosurface(val: number) {
    this.isosurface = val;
    this.markAllChunksDirty();
    this.updateChunkFilledCounts();
  }

  applyBrush(
    bwx: number,
    bwy: number,
    bwz: number,
    radius: number,
    strengthFn: (dist: number) => number
  ) {
    const [vxBrush, vyBrush, vzBrush] = this.wToV(bwx, bwy, bwz);
    const vRadius = Math.ceil(radius / this.voxelWorldSize);

    const vx0 = Math.max(0, vxBrush - vRadius - 1);
    const vx1 = Math.min(this.voxelResolution - 1, vxBrush + vRadius);
    const vy0 = Math.max(0, vyBrush - vRadius - 1);
    const vy1 = Math.min(this.voxelResolution - 1, vyBrush + vRadius);
    const vz0 = Math.max(0, vzBrush - vRadius - 1);
    const vz1 = Math.min(this.voxelResolution - 1, vzBrush + vRadius);

    for (let vz = vz0; vz <= vz1; vz++) {
      const wz = vz * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2;
      for (let vy = vy0; vy <= vy1; vy++) {
        const wy = vy * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2;
        for (let vx = vx0; vx <= vx1; vx++) {
          const wx = vx * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2;

          const dwx = wx - bwx;
          const dwy = wy - bwy;
          const dwz = wz - bwz;

          const normDist = Math.sqrt(dwx * dwx + dwy * dwy + dwz * dwz) / radius;
          if (normDist > 1) continue;

          const delta = strengthFn(normDist);
          const prev = this.getVoxel(vx, vy, vz);
          const newVal = clamp(prev + delta, -1, 1);
          this.setVoxel(vx, vy, vz, newVal);
        }
      }
    }
    const cx0 = Math.floor(vx0 / this.voxelsPerChunk);
    const cx1 = Math.floor(vx1 / this.voxelsPerChunk);
    const cy0 = Math.floor(vy0 / this.voxelsPerChunk);
    const cy1 = Math.floor(vy1 / this.voxelsPerChunk);
    const cz0 = Math.floor(vz0 / this.voxelsPerChunk);
    const cz1 = Math.floor(vz1 / this.voxelsPerChunk);

    for (let cz = cz0; cz <= cz1; cz++)
      for (let cy = cy0; cy <= cy1; cy++)
        for (let cx = cx0; cx <= cx1; cx++)
          this.markChunkDirty(this.chunks[cx * this.cdx + cy * this.cdy + cz * this.cdz]);
  }

  carve(wx: number, wy: number, wz: number, radius: number, strength = 0.1) {
    this.applyBrush(wx, wy, wz, radius, (t) => {
      const falloff = 1 - t * t * (3 - 2 * t);
      return strength * falloff;
    });
  }

  stuff(wx: number, wy: number, wz: number, radius: number, strength = 0.1) {
    this.applyBrush(wx, wy, wz, radius, (t) => {
      const falloff = 1 - t * t * (3 - 2 * t);
      return -strength * falloff;
    });
  }

  updateChunkFilledCounts() {
    for (const chunk of this.chunks) chunk.filledCount = 0;
    for (let vz = 0; vz < this.voxelResolution; vz++) {
      for (let vy = 0; vy < this.voxelResolution; vy++) {
        for (let vx = 0; vx < this.voxelResolution; vx++) {
          if (this.data[this.vIdx(vx, vy, vz)] < this.isosurface) {
            this.getChunk(vx, vy, vz).filledCount++;
          }
        }
      }
    }
  }

  updateMesh() {
    const matrix = new THREE.Matrix4();

    for (let vx = 0; vx < this.voxelResolution; vx++) {
      const wx = vx * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2;
      for (let vy = 0; vy < this.voxelResolution; vy++) {
        const wy = vy * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2;
        for (let vz = 0; vz < this.voxelResolution; vz++) {
          const wz = vz * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2;
          const idx = this.vIdx(vx, vy, vz);
          matrix.setPosition(wx, wy, wz);

          // const intensity = 1.05 - clamp(this.data[idx], 0.05, 1);
          const intensity = this.data[idx] < 0 ? 1 : 0.05;
          this.mesh.setMatrixAt(idx, matrix);
          this.mesh.setColorAt(idx, new THREE.Color(intensity, 0.05, 0.05));
        }
      }
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    this.mesh.instanceColor!.needsUpdate = true;
  }
}

export { VoxelGrid, type VoxelChunk };
