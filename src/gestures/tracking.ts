import { MotionGesture, type Gesture } from "./gesture";
import { HANDEDNESSES, type Handedness, type HandsResult } from "./mediapipe";
import { HandState } from "./handState";
import type { SculptScene } from "../render/scene";
import { HandMesh } from "../mesh/handMesh";

export type TrackedGesture = {
  gesture: Gesture;
  priority: number;
  handedness?: Handedness;
};

export class HandsTracker {
  gestures: TrackedGesture[];
  left: HandState;
  right: HandState;

  mesh: HandMesh;
  showMesh: boolean;

  constructor(showMesh = false) {
    this.gestures = [];
    this.left = new HandState();
    this.right = new HandState();
    this.mesh = new HandMesh();
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

  update(results: HandsResult, scene: SculptScene) {
    this.updateHands(results, scene);
    this.updateGestures();
  }

  private updateHands(results: HandsResult, scene: SculptScene) {
    for (const h of HANDEDNESSES) {
      const handResult = results[h];
      const handState = this[h];
      handState.updateFromResult(handResult, scene);

      if (this.showMesh) {
        this.mesh.update(handState, h);
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
