import * as THREE from "three";
import { NUM_LMS, type LM } from "../gestures/landmarks";
import { HandLandmarker } from "@mediapipe/tasks-vision";
import { HANDEDNESSES, type Handedness } from "../gestures/mediapipe";
import type { HandState } from "../gestures/handState";

const CONNECTIONS = HandLandmarker.HAND_CONNECTIONS;
const UP = new THREE.Vector3(0, 1, 0);

class HandMesh {
  points: THREE.InstancedMesh;
  bones: THREE.InstancedMesh;

  private _pointMatrix = new THREE.Matrix4();
  private _boneMatrix = new THREE.Matrix4();
  private _boneQuat = new THREE.Quaternion();
  private _boneScale = new THREE.Vector3();
  private _bonePos = new THREE.Vector3();
  private _boneDir = new THREE.Vector3();

  constructor() {
    const pointsMaterial = new THREE.MeshPhysicalMaterial({ color: 0xffffff });
    const pointsGeometry = new THREE.SphereGeometry(0.12);
    const numPoints = NUM_LMS * 2;
    this.points = new THREE.InstancedMesh(pointsGeometry, pointsMaterial, numPoints);
    this.points.frustumCulled = false;

    const bonesMaterial = new THREE.MeshPhysicalMaterial({ color: 0xffffff });
    const bonesGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 8);
    const numBones = CONNECTIONS.length * 2;
    this.bones = new THREE.InstancedMesh(bonesGeometry, bonesMaterial, numBones);
    this.bones.frustumCulled = false;
  }

  update(hand: HandState, h: Handedness) {
    const handIndex = HANDEDNESSES.indexOf(h);
    const pointOffset = NUM_LMS * handIndex;
    const boneOffset = CONNECTIONS.length * handIndex;

    const landmarks = hand.sceneLandmarks;

    for (let i = 0; i < NUM_LMS; i++) {
      if (!hand.present) this._pointMatrix.setPosition(-1000, -1000, -1000);
      else this._pointMatrix.setPosition(landmarks[i].x, landmarks[i].y, landmarks[i].z);

      this.points.setMatrixAt(pointOffset + i, this._pointMatrix);
    }
    this.points.instanceMatrix.needsUpdate = true;

    for (let i = 0; i < CONNECTIONS.length; i++) {
      if (!hand.present) {
        this._boneMatrix.setPosition(-1000, -1000, -1000);
        this.bones.setMatrixAt(boneOffset + i, this._pointMatrix);
        continue;
      }

      const { start, end } = CONNECTIONS[i];
      const a = landmarks[start];
      const b = landmarks[end];
      this._boneDir.set(b.x - a.x, b.y - a.y, b.z - a.z);
      this._bonePos.set(
        a.x + this._boneDir.x / 2,
        a.y + this._boneDir.y / 2,
        a.z + this._boneDir.z / 2
      );

      const length = this._boneDir.length();
      this._boneScale.set(1, length, 1);
      this._boneDir.normalize();
      this._boneQuat.setFromUnitVectors(UP, this._boneDir);
      this._boneMatrix.compose(this._bonePos, this._boneQuat, this._boneScale);
      this.bones.setMatrixAt(boneOffset + i, this._boneMatrix);
    }
    this.bones.instanceMatrix.needsUpdate = true;
  }

  setColors(color: THREE.Color, h: Handedness, landmarks: LM[]) {
    const pointOffset = NUM_LMS * HANDEDNESSES.indexOf(h);
    for (let lm of landmarks) {
      this.points.setColorAt(pointOffset + lm, color);
    }
    this.points.instanceMatrix.needsUpdate = true;
  }
}

export { HandMesh };
