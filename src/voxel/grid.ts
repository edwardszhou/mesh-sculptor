import * as THREE from "three";
import { clamp } from "../utils/math";

type SDF = (x: number, y: number, z: number) => number;

type VoxelChunk = {
  idx: number;
  x: number;
  y: number;
  z: number;
  filledCount: number;
  dirty: boolean;
  readonly size: number;
  readonly maxVoxels: number;
};
class VoxelGrid {
  readonly resolution: number;
  readonly dx: number;
  readonly dy: number;
  readonly dz: number;
  readonly size: number;

  readonly worldSize: number;
  readonly halfSize: number;
  readonly voxelSize: number;

  readonly chunkSize: number;
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
    chunkSize: number = 8,
    showMesh: boolean = false
  ) {
    this.resolution = resolution;
    this.dx = 1;
    this.dy = resolution;
    this.dz = resolution * resolution;
    this.size = resolution * resolution * resolution;

    this.worldSize = worldSize;
    this.halfSize = worldSize / 2;
    this.voxelSize = worldSize / resolution;

    // Chunks for partial surface extration
    this.chunkSize = chunkSize;
    this.chunkResolution = Math.ceil(this.resolution / this.chunkSize);
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
            x: cx * this.chunkSize,
            y: cy * this.chunkSize,
            z: cz * this.chunkSize,
            filledCount: 0,
            dirty: false,
            size: this.chunkSize,
            maxVoxels:
              Math.min(this.chunkSize, this.resolution - cx * this.chunkSize) *
              Math.min(this.chunkSize, this.resolution - cy * this.chunkSize) *
              Math.min(this.chunkSize, this.resolution - cz * this.chunkSize)
          });
        }
      }
    }

    this.data = new Float32Array(this.size).fill(1);
    this.isosurface = 0;

    const geometry = new THREE.BoxGeometry(this.voxelSize, this.voxelSize, this.voxelSize);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.1
    });
    this.mesh = new THREE.InstancedMesh(geometry, material, this.size);
    this.showMesh = showMesh;
    this.updateMesh();
  }

  idxToWorld(i: number, j: number, k: number) {
    return new THREE.Vector3(
      i * this.voxelSize - this.halfSize + this.voxelSize / 2,
      j * this.voxelSize - this.halfSize + this.voxelSize / 2,
      k * this.voxelSize - this.halfSize + this.voxelSize / 2
    );
  }

  worldToIdx(x: number, y: number, z: number) {
    return [
      Math.floor((x + this.halfSize) / this.voxelSize),
      Math.floor((y + this.halfSize) / this.voxelSize),
      Math.floor((z + this.halfSize) / this.voxelSize)
    ];
  }

  getIdx(i: number, j: number, k: number) {
    return this.dx * i + this.dy * j + this.dz * k;
  }

  getVoxel(i: number, j: number, k: number) {
    return this.data[this.getIdx(i, j, k)];
  }

  getChunk(i: number, j: number, k: number) {
    const cx = Math.floor(i / this.chunkSize);
    const cy = Math.floor(j / this.chunkSize);
    const cz = Math.floor(k / this.chunkSize);
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

  setVoxel(i: number, j: number, k: number, val: number) {
    const idx = this.getIdx(i, j, k);
    const prev = this.data[idx];
    this.data[idx] = val;

    // Update filledCount on the owning chunk
    const chunk = this.getChunk(i, j, k);
    const prevInside = prev < this.isosurface;
    const valInside = val < this.isosurface;
    chunk.filledCount += !prevInside && valInside ? 1 : prevInside && !valInside ? -1 : 0;
    this.markChunkDirty(chunk);
  }

  setSDF(sdf: SDF) {
    for (let i = 0; i < this.resolution; i++) {
      const x = i * this.voxelSize - this.halfSize + this.voxelSize / 2;
      for (let j = 0; j < this.resolution; j++) {
        const y = j * this.voxelSize - this.halfSize + this.voxelSize / 2;
        for (let k = 0; k < this.resolution; k++) {
          const z = k * this.voxelSize - this.halfSize + this.voxelSize / 2;
          this.data[this.getIdx(i, j, k)] = sdf(x, y, z);
        }
      }
    }
    this.markAllChunksDirty();
    this.updateChunkFilledCounts();
    this.updateMesh();
  }

  applyMinSDF(sdf: SDF) {
    for (let i = 0; i < this.resolution; i++) {
      const x = i * this.voxelSize - this.halfSize + this.voxelSize / 2;
      for (let j = 0; j < this.resolution; j++) {
        const y = j * this.voxelSize - this.halfSize + this.voxelSize / 2;
        for (let k = 0; k < this.resolution; k++) {
          const z = k * this.voxelSize - this.halfSize + this.voxelSize / 2;
          const val = sdf(x, y, z);
          const idx = this.getIdx(i, j, k);
          this.data[idx] = Math.min(this.data[idx], val);
        }
      }
    }
    this.markAllChunksDirty();
    this.updateChunkFilledCounts();
    this.updateMesh();
  }

  applyMaxSDF(sdf: SDF) {
    for (let i = 0; i < this.resolution; i++) {
      const x = i * this.voxelSize - this.halfSize + this.voxelSize / 2;
      for (let j = 0; j < this.resolution; j++) {
        const y = j * this.voxelSize - this.halfSize + this.voxelSize / 2;
        for (let k = 0; k < this.resolution; k++) {
          const z = k * this.voxelSize - this.halfSize + this.voxelSize / 2;
          const val = sdf(x, y, z);
          const idx = this.getIdx(i, j, k);
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
    this.updateChunkFilledCounts();
  }

  applyBrush(
    wx: number,
    wy: number,
    wz: number,
    radius: number,
    strengthFn: (dist: number) => number
  ) {
    const [bi, bj, bk] = this.worldToIdx(wx, wy, wz);
    const r = Math.ceil(radius / this.voxelSize);

    const i0 = Math.max(0, bi - r);
    const i1 = Math.min(this.resolution - 1, bi + r);
    const j0 = Math.max(0, bj - r);
    const j1 = Math.min(this.resolution - 1, bj + r);
    const k0 = Math.max(0, bk - r);
    const k1 = Math.min(this.resolution - 1, bk + r);

    for (let k = k0; k <= k1; k++) {
      const z = k * this.voxelSize - this.halfSize + this.voxelSize / 2;
      for (let j = j0; j <= j1; j++) {
        const y = j * this.voxelSize - this.halfSize + this.voxelSize / 2;
        for (let i = i0; i <= i1; i++) {
          const x = i * this.voxelSize - this.halfSize + this.voxelSize / 2;

          const dx = x - wx;
          const dy = y - wy;
          const dz = z - wz;

          const normDist = Math.sqrt(dx * dx + dy * dy + dz * dz) / radius;
          if (normDist > 1) continue;

          const delta = strengthFn(normDist);
          const prev = this.getVoxel(i, j, k);
          const newVal = clamp(prev + delta, -1, 1);
          this.setVoxel(i, j, k, newVal);
        }
      }
    }
  }

  carve(x: number, y: number, z: number, radius: number, strength = 0.1) {
    this.applyBrush(x, y, z, radius, (t) => {
      const falloff = 1 - t * t * (3 - 2 * t);
      return strength * falloff;
    });
  }

  stuff(x: number, y: number, z: number, radius: number, strength = 0.1) {
    this.applyBrush(x, y, z, radius, (t) => {
      const falloff = 1 - t * t * (3 - 2 * t);
      return -strength * falloff;
    });
  }

  updateChunkFilledCounts() {
    for (const chunk of this.chunks) chunk.filledCount = 0;
    for (let k = 0; k < this.resolution; k++) {
      for (let j = 0; j < this.resolution; j++) {
        for (let i = 0; i < this.resolution; i++) {
          if (this.data[this.getIdx(i, j, k)] < this.isosurface) {
            this.getChunk(i, j, k).filledCount++;
          }
        }
      }
    }
  }

  updateMesh() {
    const matrix = new THREE.Matrix4();

    for (let i = 0; i < this.resolution; i++) {
      const x = i * this.voxelSize - this.halfSize + this.voxelSize / 2;
      for (let j = 0; j < this.resolution; j++) {
        const y = j * this.voxelSize - this.halfSize + this.voxelSize / 2;
        for (let k = 0; k < this.resolution; k++) {
          const z = k * this.voxelSize - this.halfSize + this.voxelSize / 2;
          const idx = this.getIdx(i, j, k);
          matrix.setPosition(x, y, z);

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
