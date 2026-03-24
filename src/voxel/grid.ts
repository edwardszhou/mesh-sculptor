import * as THREE from "three";
import { clamp } from "../utils/math";

class VoxelGrid {
  resolution: number;
  dx: number;
  dy: number;
  dz: number;
  size: number;

  worldSize: number;
  halfSize: number;
  voxelSize: number;

  data: Float32Array;
  mesh: THREE.InstancedMesh;
  showMesh: boolean;

  constructor(resolution: number, worldSize: number = 1, showMesh: boolean = false) {
    this.resolution = resolution;
    this.dx = 1;
    this.dy = resolution;
    this.dz = resolution * resolution;
    this.size = resolution * resolution * resolution;

    this.worldSize = worldSize;
    this.halfSize = worldSize / 2;
    this.voxelSize = worldSize / resolution;
    this.data = new Float32Array(this.size).fill(1);

    const geometry = new THREE.BoxGeometry(this.voxelSize, this.voxelSize, this.voxelSize);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
    this.mesh = new THREE.InstancedMesh(geometry, material, this.size);
    this.showMesh = showMesh;
    this.updateMesh();
  }

  idx(i: number, j: number, k: number) {
    return this.dx * i + this.dy * j + this.dz * k;
  }

  getVoxel(i: number, j: number, k: number) {
    return this.data[this.idx(i, j, k)];
  }

  setVoxel(i: number, j: number, k: number, val: number) {
    this.data[this.idx(i, j, k)] = val;
  }

  idxToWorld(i: number, j: number, k: number) {
    const offset = this.worldSize / 2;
    return new THREE.Vector3(
      i * this.voxelSize - offset + this.voxelSize / 2,
      j * this.voxelSize - offset + this.voxelSize / 2,
      k * this.voxelSize - offset + this.voxelSize / 2
    );
  }

  worldToIdx(x: number, y: number, z: number) {
    const offset = this.worldSize / 2;
    return this.idx(
      Math.floor((x + offset) / this.voxelSize),
      Math.floor((y + offset) / this.voxelSize),
      Math.floor((z + offset) / this.voxelSize)
    );
  }

  updateMesh() {
    const matrix = new THREE.Matrix4();
    const offset = this.worldSize / 2;

    for (let i = 0; i < this.resolution; i++) {
      const x = i * this.voxelSize - offset + this.voxelSize / 2;
      for (let j = 0; j < this.resolution; j++) {
        const y = j * this.voxelSize - offset + this.voxelSize / 2;
        for (let k = 0; k < this.resolution; k++) {
          const z = k * this.voxelSize - offset + this.voxelSize / 2;
          const idx = this.idx(i, j, k);
          matrix.setPosition(x, y, z);

          // const intensity = 1.05 - clamp(this.data[idx], 0.05, 1);
          const intensity = this.data[idx] < 0 ? 1 : 0.05;
          this.mesh.setMatrixAt(idx, matrix);
          this.mesh.setColorAt(idx, new THREE.Color(intensity, 0.05, 0.05));
        }
      }
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }

  setSDF(sdfFn: (x: number, y: number, z: number) => number) {
    const offset = this.worldSize / 2;
    for (let i = 0; i < this.resolution; i++) {
      const x = i * this.voxelSize - offset + this.voxelSize / 2;
      for (let j = 0; j < this.resolution; j++) {
        const y = j * this.voxelSize - offset + this.voxelSize / 2;
        for (let k = 0; k < this.resolution; k++) {
          const z = k * this.voxelSize - offset + this.voxelSize / 2;
          const val = sdfFn(x, y, z);
          this.setVoxel(i, j, k, val);
        }
      }
    }
    this.updateMesh();
  }

  setGrid(val: number) {
    this.data.fill(val);
  }
}

export { VoxelGrid };
