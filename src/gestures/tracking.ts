import { MotionGesture, type Gesture } from "./gesture";
import { HANDEDNESSES, type Handedness, type HandsResult } from "./mediapipe";
import { HandState } from "./handState";

export type TrackedGesture = {
  gesture: Gesture;
  priority: number;
  handedness?: Handedness;
};

export class HandsTracker {
  gestures: TrackedGesture[];
  left: HandState;
  right: HandState;

  constructor() {
    this.gestures = [];
    this.left = new HandState();
    this.right = new HandState();
  }

  addGesture(gesture: Gesture, handedness?: Handedness, priority = 0) {
    if (gesture instanceof MotionGesture) priority = Infinity;
    this.gestures.push({ gesture, handedness, priority });
    this.gestures.sort((a, b) => b.priority - a.priority);
  }

  removeGesture(id: string) {
    this.gestures = this.gestures.filter((it) => it.gesture.id != id);
  }

  update(handsResult: HandsResult) {
    this.updateHands(handsResult);
    this.updateGestures();
  }

  private updateHands(hands: HandsResult) {
    for (const h of HANDEDNESSES) {
      const hand = hands[h];
      const state = this[h];
      state.updateFromResult(hand);
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
