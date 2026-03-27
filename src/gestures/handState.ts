import type { Landmark } from "@mediapipe/tasks-vision";
import type { Gesture } from "./gesture";
import { handScale } from "./landmarks";
import type { HandResult } from "./mediapipe";

export class HandState {
  present: boolean;
  landmarks: Landmark[];
  worldLandmarks: Landmark[];
  relativeLandmarks: Landmark[];
  relativeWorldLandmarks: Landmark[];
  scale: number;
  worldScale: number;
  gesture: Gesture | null;

  constructor() {
    this.present = false;
    this.landmarks = [];
    this.worldLandmarks = [];
    this.relativeLandmarks = [];
    this.relativeWorldLandmarks = [];
    this.scale = -1;
    this.worldScale = -1;
    this.gesture = null;
  }

  updateFromResult(hand: HandResult | null) {
    if (!hand) {
      this.present = false;
      return;
    }

    this.present = true;
    this.scale = handScale(hand.landmarks);
    this.worldScale = handScale(hand.worldLandmarks);
    this.landmarks = hand.landmarks;
    this.worldLandmarks = hand.worldLandmarks;
    this.relativeLandmarks = hand.landmarks.map((lm) => ({
      x: lm.x / this.scale,
      y: lm.y / this.scale,
      z: lm.z / this.scale,
      visibility: lm.visibility
    }));
    this.relativeWorldLandmarks = hand.worldLandmarks.map((lm) => ({
      x: lm.x / this.worldScale,
      y: lm.y / this.worldScale,
      z: lm.z / this.worldScale,
      visibility: lm.visibility
    }));
  }
}
