import { HandGesturePair, MotionGesture, type Gesture } from "./gesture";
import { HANDEDNESSES, type Handedness, type Hands, type HandsResult } from "./mediapipe";
import { HandState } from "./handState";
import type { SculptScene } from "../render/scene";
import { HandMesh } from "../mesh/handMesh";

type TrackedGesture = {
  gesture: Gesture;
  priority: number;
  handedness?: Handedness;
};

type TrackedGesturePair = {
  gesture: HandGesturePair;
  priority: number;
};

export class HandsTracker {
  gestures: TrackedGesture[];
  gesturePairs: TrackedGesturePair[];
  left: HandState;
  right: HandState;

  mesh: HandMesh;
  showMesh: boolean;

  constructor(showMesh = false) {
    this.gestures = [];
    this.gesturePairs = [];

    this.left = new HandState();
    this.right = new HandState();
    this.mesh = new HandMesh();
    this.showMesh = showMesh;
  }

  addGesture(gesture: Gesture | HandGesturePair, priority = 0, handedness?: Handedness) {
    if (gesture instanceof HandGesturePair) {
      this.gesturePairs.push({ gesture, priority });
      this.gesturePairs.sort((a, b) => b.priority - a.priority);
      return;
    }
    if (gesture instanceof MotionGesture) priority = Infinity;
    this.gestures.push({ gesture, handedness, priority });
    this.gestures.sort((a, b) => b.priority - a.priority);
  }

  update(results: HandsResult, scene: SculptScene) {
    this.updateHands(results, scene);
    this.updateGestures();
  }

  private updateHands(results: HandsResult, scene: SculptScene) {
    for (const h of HANDEDNESSES) {
      const handResult = results[h];
      const handState = this[h];
      handState.updateFromResult(handResult, h, scene);

      if (this.showMesh) {
        this.mesh.update(handState, h);
      }
    }
  }

  private updateGestures() {
    const now = Date.now();
    this.left.gesture = null;
    this.right.gesture = null;

    const hands = { left: this.left, right: this.right } satisfies Hands<HandState>;

    for (const h of HANDEDNESSES) {
      const hand = hands[h];

      if (!hand.present) continue;

      for (const { gesture, handedness } of this.gestures) {
        // Skip if gesture is meant for different hand
        if (handedness && handedness !== h) continue;

        // Silent update if gesture is already detected
        if (hand.gesture) gesture.update(hand, h, true, now);
        // Set active gesture for hand
        else hand.gesture = gesture.update(hand, h, false, now) ? gesture : null;
      }
    }

    this.left.gesturePair = null;
    this.right.gesturePair = null;
    for (const { gesture } of this.gesturePairs) {
      if (this.left.gesturePair || this.right.gesturePair) gesture.update(hands, true, now);
      else {
        const activeGesture = gesture.update(hands, false, now) ? gesture : null;
        this.left.gesturePair = activeGesture;
        this.right.gesturePair = activeGesture;
      }
    }
  }
}
