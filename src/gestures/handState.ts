import type { Gesture } from "./gesture";
import {
  LM,
  LM_FINGERS,
  LM_FINGERTIPS,
  lmAngle,
  lmCross,
  handLmDistance,
  lmMag,
  lmSub,
  type Landmark
} from "./landmarks";
import type { Handedness, HandResult } from "./mediapipe";
import type { SculptScene } from "../render/scene";
import type { V3 } from "../utils/math";

const SCENE_LANDMARKS_SCALE = 15;
const SCENE_LANDMARKS_OFFSET_X = 0.15;
const SCENE_LANDMARKS_OFFSET_Y = -0.2;
const SCENE_LANDMARKS_OFFSET_Z = 2.5;

type HandMetrics = {
  pinchDistance: number[];
  curlDistance: number[];
  curlAngle: number[];
  palmNormal: V3;
  fingerNormal: V3;
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
    scale: number;
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
      z: 0,
      scale: 1
    };
    this.metrics = {
      pinchDistance: [],
      curlDistance: [],
      curlAngle: [],
      palmNormal: [0, 0, 0],
      fingerNormal: [0, 0, 0]
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

    this.transform.scale = this.updateHandScale(result.landmarks);

    const xOffsetFac = handedness === "left" ? 1 : -1;
    const u = result.landmarks[LM.MIDDLE_MCP].x + SCENE_LANDMARKS_OFFSET_X * xOffsetFac;
    const v = result.landmarks[LM.MIDDLE_MCP].y + SCENE_LANDMARKS_OFFSET_Y;
    const { x: sceneX, y: sceneY } = scene.screenToWorld(u, v);
    this.transform.x = sceneX;
    this.transform.y = sceneY;
    this.transform.z = 1 / this.transform.scale - SCENE_LANDMARKS_OFFSET_Z;

    this.relativeLandmarks = result.landmarks.map((lm) => ({
      x: lm.x / this.transform.scale,
      y: lm.y / this.transform.scale,
      z: lm.z / this.transform.scale
    }));
    this.sceneLandmarks = result.worldLandmarks.map((lm) => ({
      x: SCENE_LANDMARKS_SCALE * (lm.x - 1) + this.transform.x,
      y: SCENE_LANDMARKS_SCALE * -lm.y + this.transform.y,
      z: SCENE_LANDMARKS_SCALE * lm.z + this.transform.z
    }));

    this.updateMetrics();
  }

  private updateMetrics() {
    if (!this.present) return;

    this.metrics.pinchDistance = LM_FINGERTIPS.map((lm) =>
      handLmDistance(this.relativeLandmarks, lm, LM.THUMB_TIP)
    );
    this.metrics.curlDistance = LM_FINGERS.map((fingerLms) => {
      const curlLength = handLmDistance(this.worldLandmarks, fingerLms[3], fingerLms[0]);
      const fingerLength = handLmDistance(this.worldLandmarks, fingerLms[0], LM.WRIST);
      return curlLength / fingerLength;
    });
    this.metrics.curlAngle = LM_FINGERS.map((fingerLms) => {
      return lmAngle(
        this.worldLandmarks[fingerLms[0]],
        this.worldLandmarks[fingerLms[1]],
        this.worldLandmarks[fingerLms[3]]
      );
    });

    const palmVecA = lmSub(this.worldLandmarks[LM.INDEX_MCP], this.worldLandmarks[LM.WRIST]);
    const palmVecB = lmSub(this.worldLandmarks[LM.PINKY_MCP], this.worldLandmarks[LM.WRIST]);
    const palmNormal = lmCross(palmVecA, palmVecB);
    const palmNormalMag = lmMag(palmNormal);
    this.metrics.palmNormal = [
      palmNormal.x / palmNormalMag,
      palmNormal.y / palmNormalMag,
      palmNormal.z / palmNormalMag
    ];

    const fingerVecA = lmSub(this.worldLandmarks[LM.INDEX_TIP], this.worldLandmarks[LM.INDEX_MCP]);
    const fingerVecB = lmSub(this.worldLandmarks[LM.PINKY_MCP], this.worldLandmarks[LM.INDEX_MCP]);
    const fingerNormal = lmCross(fingerVecA, fingerVecB);
    const fingerNormalMag = lmMag(fingerNormal);
    this.metrics.fingerNormal = [
      fingerNormal.x / fingerNormalMag,
      fingerNormal.y / fingerNormalMag,
      fingerNormal.z / fingerNormalMag
    ];
  }

  updateHandScale(landmarks: Landmark[]) {
    // Get hand scale in 3D space based on palm size from landmarks
    const palmWidth = handLmDistance(landmarks, LM.INDEX_MCP, LM.PINKY_MCP);
    const palmLength = handLmDistance(landmarks, LM.WRIST, LM.MIDDLE_MCP);

    // When palm is facing camera (both width and length are maximized), length = RATIO * width.
    const PALM_RATIO = 1.58;
    // Correct for this factor
    return Math.max(palmWidth * PALM_RATIO, palmLength, 0.01);
  }
}
