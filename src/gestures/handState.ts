import type { Landmark } from "@mediapipe/tasks-vision";
import type { Gesture } from "./gesture";
import { handScale, LM } from "./landmarks";
import type { HandResult } from "./mediapipe";

export class HandState {
  present: boolean;
  landmarks: Landmark[];
  worldLandmarks: Landmark[];
  relativeLandmarks: Landmark[];
  sceneLandmarks: Landmark[];
  transform: {
    x: number;
    y: number;
    z: number;
    scale: number;
  };
  gesture: Gesture | null;

  constructor() {
    this.present = false;

    this.landmarks = [];
    this.worldLandmarks = [];
    this.relativeLandmarks = [];
    this.sceneLandmarks = [];
    this.transform = {
      x: 0,
      y: 0,
      z: 0,
      scale: 1
    };

    this.gesture = null;
  }

  updateFromResult(result: HandResult | null) {
    if (!result) {
      this.present = false;
      return;
    }
    this.present = true;
    this.landmarks = result.landmarks;
    this.worldLandmarks = result.worldLandmarks;

    this.transform.scale = handScale(result.landmarks);
    this.transform.x = result.landmarks[LM.MIDDLE_MCP].x;
    this.transform.y = result.landmarks[LM.MIDDLE_MCP].y;
    this.transform.z = Math.sqrt(this.transform.scale) * 3;
    console.log(this.transform.x, this.transform.y, this.transform.z);

    this.relativeLandmarks = result.landmarks.map((lm) => ({
      x: lm.x / this.transform.scale,
      y: lm.y / this.transform.scale,
      z: lm.z / this.transform.scale,
      visibility: lm.visibility
    }));
    this.sceneLandmarks = result.worldLandmarks.map((lm) => ({
      x: lm.x + this.transform.x,
      y: -lm.y - this.transform.y,
      z: lm.z + this.transform.z,
      visibility: lm.visibility
    }));
  }
}
