import type { Landmark } from "@mediapipe/tasks-vision";
import type { Gesture } from "./gesture";
import { handScale, LM } from "./landmarks";
import type { HandResult } from "./mediapipe";
import type { SculptScene } from "../render/scene";

const SCENE_LANDMARKS_SCALE = 15;
const SCENE_LANDMARKS_OFFSET_X = 0;
const SCENE_LANDMARKS_OFFSET_Y = -0.2;
const SCENE_LANDMARKS_OFFSET_Z = 0.6;
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

  updateFromResult(result: HandResult | null, scene: SculptScene) {
    if (!result) {
      this.present = false;
      return;
    }
    this.present = true;
    this.landmarks = result.landmarks;
    this.worldLandmarks = result.worldLandmarks;

    this.transform.scale = handScale(result.landmarks);

    const u = result.landmarks[LM.MIDDLE_MCP].x + SCENE_LANDMARKS_OFFSET_X;
    const v = result.landmarks[LM.MIDDLE_MCP].y + SCENE_LANDMARKS_OFFSET_Y;
    const { x: sceneX, y: sceneY } = scene.screenToWorld(u, v);
    this.transform.x = sceneX;
    this.transform.y = sceneY;
    this.transform.z =
      SCENE_LANDMARKS_SCALE * (SCENE_LANDMARKS_OFFSET_Z - Math.sqrt(this.transform.scale));

    this.relativeLandmarks = result.landmarks.map((lm) => ({
      x: lm.x / this.transform.scale,
      y: lm.y / this.transform.scale,
      z: lm.z / this.transform.scale,
      visibility: lm.visibility
    }));
    this.sceneLandmarks = result.worldLandmarks.map((lm) => ({
      x: SCENE_LANDMARKS_SCALE * (lm.x - 1) + this.transform.x,
      y: SCENE_LANDMARKS_SCALE * -lm.y + this.transform.y,
      z: SCENE_LANDMARKS_SCALE * lm.z + this.transform.z,
      visibility: lm.visibility
    }));
  }
}
