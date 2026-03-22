import * as THREE from "three";
import { clamp } from "../utils/math";

class VoxelGrid {
  resolution: number;
  cellSize: number;
  data: Float32Array;
  mesh: THREE.InstancedMesh;
  showMesh: boolean;

  constructor(res: number, cellSize: number = 1, showMesh: boolean = false) {
    this.resolution = res;
    this.cellSize = cellSize;
    this.data = new Float32Array(res * res * res).fill(1);

    const geometry = new THREE.BoxGeometry(this.cellSize, this.cellSize, this.cellSize);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
    this.mesh = new THREE.InstancedMesh(geometry, material, res * res * res);
    this.showMesh = showMesh;
    this.updateMesh();
  }

  idx(i: number, j: number, k: number) {
    return i + this.resolution * j + this.resolution * this.resolution * k;
  }

  getVoxel(i: number, j: number, k: number) {
    return this.data[this.idx(i, j, k)];
  }

  setVoxel(i: number, j: number, k: number, val: number) {
    this.data[this.idx(i, j, k)] = val;
  }

  idxToWorld(i: number, j: number, k: number) {
    const offset = (this.resolution * this.cellSize) / 2;
    return new THREE.Vector3(
      i * this.cellSize - offset + this.cellSize / 2,
      j * this.cellSize - offset + this.cellSize / 2,
      k * this.cellSize - offset + this.cellSize / 2
    );
  }

  worldToIdx(x: number, y: number, z: number) {
    const offset = (this.resolution * this.cellSize) / 2;
    return this.idx(
      Math.floor((x + offset) / this.cellSize),
      Math.floor((y + offset) / this.cellSize),
      Math.floor((z + offset) / this.cellSize)
    );
  }

  updateMesh() {
    const matrix = new THREE.Matrix4();
    const offset = (this.resolution * this.cellSize) / 2;

    for (let i = 0; i < this.resolution; i++) {
      const x = i * this.cellSize - offset + this.cellSize / 2;
      for (let j = 0; j < this.resolution; j++) {
        const y = j * this.cellSize - offset + this.cellSize / 2;
        for (let k = 0; k < this.resolution; k++) {
          const z = k * this.cellSize - offset + this.cellSize / 2;
          const idx = this.idx(i, j, k);
          matrix.setPosition(x, y, z);

          const intensity = 1.05 - clamp(this.data[idx], 0.05, 1);
          this.mesh.setMatrixAt(idx, matrix);
          this.mesh.setColorAt(idx, new THREE.Color(intensity, 0.05, 0.05));
        }
      }
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }

  setSDF(sdfFn: (x: number, y: number, z: number) => number) {
    const offset = (this.resolution * this.cellSize) / 2;
    for (let i = 0; i < this.resolution; i++) {
      const x = i * this.cellSize - offset + this.cellSize / 2;
      for (let j = 0; j < this.resolution; j++) {
        const y = j * this.cellSize - offset + this.cellSize / 2;
        for (let k = 0; k < this.resolution; k++) {
          const z = k * this.cellSize - offset + this.cellSize / 2;
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
