import * as THREE from "three";
import type { Brush } from "./brush";
import { clamp, FALLOFF, wendlandRBF, type V3 } from "../utils/math";

export type SDF = (wx: number, wy: number, wz: number) => number;

export type AABB = {
  min: V3;
  max: V3;
};

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

  vToW(vx: number, vy: number, vz: number): V3 {
    return [
      vx * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2,
      vy * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2,
      vz * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2
    ];
  }

  wToV(wx: number, wy: number, wz: number): V3 {
    return [
      clamp(Math.floor((wx + this.halfWorldSize) / this.voxelWorldSize), 0, this.voxelResolution),
      clamp(Math.floor((wy + this.halfWorldSize) / this.voxelWorldSize), 0, this.voxelResolution),
      clamp(Math.floor((wz + this.halfWorldSize) / this.voxelWorldSize), 0, this.voxelResolution)
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

  findComponent(seedWx: number, seedWy: number, seedWz: number): Int32Array {
    const [svx, svy, svz] = this.wToV(seedWx, seedWy, seedWz);
    if (this.getVoxel(svx, svy, svz) > this.isosurface) return new Int32Array(0);

    const res = this.voxelResolution;

    const visited = new Uint8Array(this.numVoxels);
    const queueVx = new Int32Array(this.numVoxels);
    const queueVy = new Int32Array(this.numVoxels);
    const queueVz = new Int32Array(this.numVoxels);

    const addToQueue = (vx: number, vy: number, vz: number) => {
      const idx = this.vIdx(vx, vy, vz);
      if (visited[idx]) return;
      visited[idx] = 1;
      queueVx[tail] = vx;
      queueVy[tail] = vy;
      queueVz[tail] = vz;
      tail++;
    };
    let head = 0;
    let tail = 0;
    addToQueue(svx, svy, svz);

    const resultArr = [];

    const dx = [1, -1, 0, 0, 0, 0];
    const dy = [0, 0, 1, -1, 0, 0];
    const dz = [0, 0, 0, 0, 1, -1];

    while (head < tail) {
      const vx = queueVx[head];
      const vy = queueVy[head];
      const vz = queueVz[head];
      head++;
      resultArr.push(vx);
      resultArr.push(vy);
      resultArr.push(vz);
      if (this.getVoxel(vx, vy, vz) > this.isosurface + 0.15) continue;
      for (let i = 0; i < 6; i++) {
        const nx = vx + dx[i];
        const ny = vy + dy[i];
        const nz = vz + dz[i];
        if (nx < 0 || ny < 0 || nz < 0 || nx >= res || ny >= res || nz >= res) continue;
        addToQueue(nx, ny, nz);
      }
    }

    return new Int32Array(resultArr);
  }

  transformComponent(component: Int32Array, translation: V3, rotation: [V3, V3, V3], pivot: V3) {
    const componentVoxelCount = component.length / 3;
    const res = this.voxelResolution;
    const [tx, ty, tz] = translation;
    const [px, py, pz] = pivot;
    const r = rotation;

    // Snapshot component
    const prev = new Float32Array(componentVoxelCount);
    for (let i = 0; i < componentVoxelCount; i++) {
      const vx = component[i * 3];
      const vy = component[i * 3 + 1];
      const vz = component[i * 3 + 2];
      prev[i] = this.getVoxel(vx, vy, vz);
      this.setVoxel(vx, vy, vz, 1.0);
    }

    for (let i = 0; i < componentVoxelCount; i++) {
      const vx = component[i * 3];
      const vy = component[i * 3 + 1];
      const vz = component[i * 3 + 2];

      const [wx, wy, wz] = this.vToW(vx, vy, vz);
      // const lx = wx - px;
      // const ly = wy - py;
      // const lz = wz - pz;

      // const rx = r[0][0] * lx + r[0][1] * ly + r[0][2] * lz + px + tx;
      // const ry = r[1][0] * lx + r[1][1] * ly + r[1][2] * lz + py + ty;
      // const rz = r[2][0] * lx + r[2][1] * ly + r[2][2] * lz + pz + tz;
      const rx = wx + tx;
      const ry = wy + ty;
      const rz = wz + tz;

      const [nvx, nvy, nvz] = this.wToV(rx, ry, rz);

      if (nvx < 0 || nvy < 0 || nvz < 0 || nvx >= res || nvy >= res || nvz >= res) continue;
      const nIdx = this.vIdx(nvx, nvy, nvz);
      const current = this.data[nIdx];
      this.setVoxel(nvx, nvy, nvz, Math.min(current, prev[i]));
    }
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
          this.data[this.vIdx(vx, vy, vz)] = clamp(sdf(wx, wy, wz), -1, 1);
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
          const val = clamp(sdf(wx, wy, wz), -1, 1);
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
          const val = clamp(sdf(wx, wy, wz), -1, 1);
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

  applyBrush(brush: Brush, bwx: number, bwy: number, bwz: number, correctVolume = true) {
    const [vxBrush, vyBrush, vzBrush] = this.wToV(bwx, bwy, bwz);
    const vRadius = Math.ceil(brush.radius / this.voxelWorldSize);
    const bRadius2 = brush.radius ** 2;

    const vx0 = Math.max(0, vxBrush - vRadius - 1);
    const vx1 = Math.min(this.voxelResolution - 1, vxBrush + vRadius);
    const vy0 = Math.max(0, vyBrush - vRadius - 1);
    const vy1 = Math.min(this.voxelResolution - 1, vyBrush + vRadius);
    const vz0 = Math.max(0, vzBrush - vRadius - 1);
    const vz1 = Math.min(this.voxelResolution - 1, vzBrush + vRadius);

    const dyTemp = vx1 - vx0 + 1;
    const dzTemp = dyTemp * (vy1 - vy0 + 1);
    const temp = new Float32Array(dzTemp * (vz1 - vz0 + 1));
    const tempIdx = (vx: number, vy: number, vz: number) => {
      vx = clamp(vx, vx0, vx1);
      vy = clamp(vy, vy0, vy1);
      vz = clamp(vz, vz0, vz1);
      return (vz - vz0) * dzTemp + (vy - vy0) * dyTemp + (vx - vx0);
    };
    const getTemp = (vx: number, vy: number, vz: number) => temp[tempIdx(vx, vy, vz)];

    for (let vz = vz0; vz <= vz1; vz++)
      for (let vy = vy0; vy <= vy1; vy++)
        for (let vx = vx0; vx <= vx1; vx++) temp[tempIdx(vx, vy, vz)] = this.getVoxel(vx, vy, vz);

    const massBefore = this.calculateMass(vxBrush, vyBrush, vzBrush, vRadius * 2);

    let changed = false;
    for (let vz = vz0; vz <= vz1; vz++) {
      const wz = vz * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2;
      for (let vy = vy0; vy <= vy1; vy++) {
        const wy = vy * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2;
        for (let vx = vx0; vx <= vx1; vx++) {
          const wx = vx * this.voxelWorldSize - this.halfWorldSize + this.voxelWorldSize / 2;

          const dwx = wx - bwx;
          const dwy = wy - bwy;
          const dwz = wz - bwz;

          const direction = [dwx, dwy, dwz] satisfies V3;

          const normDist2 = dwx * dwx + dwy * dwy + dwz * dwz;
          if (normDist2 > bRadius2) continue;

          const weight = brush.falloff(Math.sqrt(normDist2) / brush.radius) * brush.strength;
          const current = getTemp(vx, vy, vz);
          const next = brush.apply(brush, {
            vx,
            vy,
            vz,
            current,
            weight,
            direction,
            getVal: getTemp
          });

          if (next != undefined && next !== current) {
            this.setVoxel(vx, vy, vz, next);
            changed = true;
          }
        }
      }
    }

    if (correctVolume) {
      const massAfter = this.calculateMass(vxBrush, vyBrush, vzBrush, vRadius * 2);
      const delta = massAfter - massBefore;
      this.applyVolumeCorrection(vxBrush, vyBrush, vzBrush, vRadius, vRadius * 2, delta);
    }
    // const massCorrected = this.calculateMass(vxBrush, vyBrush, vzBrush, vRadius * 2);
    // const delta2 = massCorrected - massAfter;
    // console.log(delta, delta2);

    if (changed) {
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
  }

  calculateMass(vxc: number, vyc: number, vzc: number, radius: number) {
    const vx0 = Math.max(0, vxc - radius - 1);
    const vx1 = Math.min(this.voxelResolution - 1, vxc + radius);
    const vy0 = Math.max(0, vyc - radius - 1);
    const vy1 = Math.min(this.voxelResolution - 1, vyc + radius);
    const vz0 = Math.max(0, vzc - radius - 1);
    const vz1 = Math.min(this.voxelResolution - 1, vzc + radius);
    const radius2 = radius * radius;
    let mass = 0;

    for (let vz = vz0; vz <= vz1; vz++) {
      for (let vy = vy0; vy <= vy1; vy++) {
        for (let vx = vx0; vx <= vx1; vx++) {
          const vDist2 = (vx - vxc) ** 2 + (vy - vyc) ** 2 + (vz - vzc) ** 2;
          if (vDist2 > radius2) continue;

          const val = this.getVoxel(vx, vy, vz);
          if (val < this.isosurface) mass += this.isosurface - val;
        }
      }
    }

    return mass;
  }

  private applyVolumeCorrection(
    vxc: number,
    vyc: number,
    vzc: number,
    innerRadius: number,
    outerRadius: number,
    delta: number
  ) {
    if (Math.abs(delta) < 1e-5) return;

    const WENDLAND_RADIUS = 1;
    const MIN_CAPACITY = 0.001;

    const vx0 = Math.max(0, vxc - outerRadius - 1);
    const vx1 = Math.min(this.voxelResolution - 1, vxc + outerRadius);
    const vy0 = Math.max(0, vyc - outerRadius - 1);
    const vy1 = Math.min(this.voxelResolution - 1, vyc + outerRadius);
    const vz0 = Math.max(0, vzc - outerRadius - 1);
    const vz1 = Math.min(this.voxelResolution - 1, vzc + outerRadius);

    const innerRadius2 = innerRadius ** 2;
    const outerRadius2 = outerRadius ** 2;

    let totalWeight = 0;
    for (let vz = vz0; vz <= vz1; vz++) {
      for (let vy = vy0; vy <= vy1; vy++) {
        for (let vx = vx0; vx <= vx1; vx++) {
          const dist2 = (vx - vxc) ** 2 + (vy - vyc) ** 2 + (vz - vzc) ** 2;
          if (dist2 < innerRadius2 || dist2 > outerRadius2) continue;

          const val = this.getVoxel(vx, vy, vz);
          const capacity = wendlandRBF(val - this.isosurface, WENDLAND_RADIUS);
          if (val < this.isosurface && capacity < MIN_CAPACITY) continue;

          const dist = Math.sqrt(dist2);
          totalWeight += capacity * FALLOFF.cubic(dist / outerRadius);
        }
      }
    }

    if (totalWeight < 1e-7) return;

    const scale = delta / totalWeight;

    for (let vz = vz0; vz <= vz1; vz++) {
      for (let vy = vy0; vy <= vy1; vy++) {
        for (let vx = vx0; vx <= vx1; vx++) {
          const dist2 = (vx - vxc) ** 2 + (vy - vyc) ** 2 + (vz - vzc) ** 2;
          if (dist2 < innerRadius2 || dist2 > outerRadius2) continue;

          const val = this.getVoxel(vx, vy, vz);
          const capacity = wendlandRBF(val - this.isosurface, WENDLAND_RADIUS);
          if (val < this.isosurface && capacity < MIN_CAPACITY) continue;

          const dist = Math.sqrt(dist2);
          const weight = capacity * FALLOFF.cubic(dist / outerRadius);
          this.setVoxel(vx, vy, vz, clamp(val + weight * scale, -1, 1));
        }
      }
    }
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
