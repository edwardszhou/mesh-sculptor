import { MotionGesture } from "./gesture.js";

export class GestureTracker {
  constructor() {
    this.gestures = [];
    this.active = {
      left: null,
      right: null
    };
  }

  add(gesture, handedness, priority = 0) {
    if (gesture instanceof MotionGesture) priority = Infinity;
    this.gestures.push({ gesture, handedness, priority });
    this.gestures.sort((a, b) => b.priority - a.priority);
  }

  remove(id) {
    this.gestures = this.gestures.filter((it) => it.gesture.id != id);
  }

  update(hands) {
    const now = Date.now();

    this.active["left"] = null;
    this.active["right"] = null;

    for (const h in hands) {
      const hand = hands[h];
      for (const { gesture, handedness } of this.gestures) {
        if (handedness && handedness !== h) continue;
        if (this.active[h]) gesture.update(hand, h, true, now);
        else this.active[h] = gesture.update(hand, h, false, now) ? gesture : null;
      }
    }
  }
}
