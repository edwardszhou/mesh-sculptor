import type { Landmark } from "@mediapipe/tasks-vision";
import type { Gesture } from "./gesture";
import {
  handScale,
  LM,
  LM_FINGERS,
  LM_FINGERTIPS,
  lmAngle,
  lmDistance,
  lmDistance2D
} from "./landmarks";
import type { Handedness, HandResult } from "./mediapipe";
import type { SculptScene } from "../render/scene";

const SCENE_LANDMARKS_SCALE = 15;
const SCENE_LANDMARKS_OFFSET_X = 0.15;
const SCENE_LANDMARKS_OFFSET_Y = -0.2;
const SCENE_LANDMARKS_OFFSET_Z = 2.5;

type HandMetrics = {
  pinchDistance: number[];
  curlDistance: number[];
  curlAngle: number[];
  scale: number;
};

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
  };
  metrics: HandMetrics;
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
      z: 0
    };
    this.metrics = {
      pinchDistance: [],
      curlDistance: [],
      curlAngle: [],
      scale: 1
    };

    this.gesture = null;
  }

  updateFromResult(result: HandResult | null, handedness: Handedness, scene: SculptScene) {
    if (!result) {
      this.present = false;
      return;
    }
    this.present = true;
    this.landmarks = result.landmarks;
    this.worldLandmarks = result.worldLandmarks;

    this.metrics.scale = handScale(result.landmarks);

    const xOffsetFac = handedness === "left" ? 1 : -1;
    const u = result.landmarks[LM.MIDDLE_MCP].x + SCENE_LANDMARKS_OFFSET_X * xOffsetFac;
    const v = result.landmarks[LM.MIDDLE_MCP].y + SCENE_LANDMARKS_OFFSET_Y;
    const { x: sceneX, y: sceneY } = scene.screenToWorld(u, v);
    this.transform.x = sceneX;
    this.transform.y = sceneY;
    this.transform.z = 1 / this.metrics.scale - SCENE_LANDMARKS_OFFSET_Z;

    this.relativeLandmarks = result.landmarks.map((lm) => ({
      x: lm.x / this.metrics.scale,
      y: lm.y / this.metrics.scale,
      z: lm.z / this.metrics.scale,
      visibility: lm.visibility
    }));
    this.sceneLandmarks = result.worldLandmarks.map((lm) => ({
      x: SCENE_LANDMARKS_SCALE * (lm.x - 1) + this.transform.x,
      y: SCENE_LANDMARKS_SCALE * -lm.y + this.transform.y,
      z: SCENE_LANDMARKS_SCALE * lm.z + this.transform.z,
      visibility: lm.visibility
    }));

    this.updateMetrics();
  }

  private updateMetrics() {
    if (!this.present) return;

    this.metrics.pinchDistance = LM_FINGERTIPS.map((lm) =>
      lmDistance(this.relativeLandmarks, lm, LM.THUMB_TIP)
    );
    this.metrics.curlDistance = LM_FINGERS.map((fingerLms) => {
      const curlLength = lmDistance(this.worldLandmarks, fingerLms[3], fingerLms[0]);
      const fingerLength = lmDistance(this.worldLandmarks, fingerLms[0], LM.WRIST);
      return curlLength / fingerLength;
    });
    this.metrics.curlAngle = LM_FINGERS.map((fingerLms) => {
      return lmAngle(
        this.worldLandmarks[fingerLms[0]],
        this.worldLandmarks[fingerLms[1]],
        this.worldLandmarks[fingerLms[3]]
      );
    });
  }
}
