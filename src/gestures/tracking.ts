import * as THREE from "three";
import { MotionGesture, type Gesture } from "./gesture";
import { HANDEDNESSES, type Handedness, type HandsResult } from "./mediapipe";
import { HandState } from "./handState";
import type { SculptScene } from "../render/scene";
import { NUM_LMS } from "./landmarks";

export type TrackedGesture = {
  gesture: Gesture;
  priority: number;
  handedness?: Handedness;
};

export class HandsTracker {
  gestures: TrackedGesture[];
  left: HandState;
  right: HandState;

  mesh: THREE.InstancedMesh;
  showMesh: boolean;

  constructor(showMesh = false) {
    this.gestures = [];
    this.left = new HandState();
    this.right = new HandState();

    const geometry = new THREE.SphereGeometry(0.05);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    this.mesh = new THREE.InstancedMesh(geometry, material, NUM_LMS * 2);
    this.mesh.frustumCulled = false;
    this.showMesh = showMesh;
  }

  addGesture(gesture: Gesture, handedness?: Handedness, priority = 0) {
    if (gesture instanceof MotionGesture) priority = Infinity;
    this.gestures.push({ gesture, handedness, priority });
    this.gestures.sort((a, b) => b.priority - a.priority);
  }

  removeGesture(id: string) {
    this.gestures = this.gestures.filter((it) => it.gesture.id != id);
  }

  update(handsResult: HandsResult, scene: SculptScene) {
    this.updateHands(handsResult, scene);
    this.updateGestures();
  }

  private updateHands(hands: HandsResult, scene: SculptScene) {
    for (const h of HANDEDNESSES) {
      const hand = hands[h];
      const state = this[h];
      state.updateFromResult(hand, scene);

      if (this.showMesh) {
        const offset = NUM_LMS * HANDEDNESSES.indexOf(h);
        const matrix = new THREE.Matrix4();
        const landmarks = state.sceneLandmarks;

        for (let i = 0; i < NUM_LMS; i++) {
          if (state.present) matrix.setPosition(landmarks[i].x, landmarks[i].y, landmarks[i].z);
          else matrix.setPosition(-1000, -1000, -1000);

          this.mesh.setMatrixAt(offset + i, matrix);
        }
        this.mesh.instanceMatrix.needsUpdate = true;
      }
    }
  }

  private updateGestures() {
    const now = Date.now();
    this.left.gesture = null;
    this.right.gesture = null;

    for (const h of HANDEDNESSES) {
      const hand = this[h];

      if (!hand) continue;

      for (const { gesture, handedness } of this.gestures) {
        // Skip if gesture is meant for different hand
        if (handedness && handedness !== h) continue;

        // Silent update if gesture is already detected
        if (hand.gesture) gesture.update(hand, h, true, now);
        // Set active gesture for hand
        else hand.gesture = gesture.update(hand, h, false, now) ? gesture : null;
      }
    }
  }
}
