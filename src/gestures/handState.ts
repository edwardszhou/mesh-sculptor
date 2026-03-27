import type { Landmark } from "@mediapipe/tasks-vision";
import type { Gesture } from "./gesture";
import { handScale } from "./landmarks";
import type { HandResult } from "./mediapipe";
import { KalmanFilter, OneEuroFilter } from "../utils/filter";

const dt = 1 / 30;
const kalmanParams = {
  Q: 0.02,
  R: 0.015
};
const oneEuroParams = {
  minCutoff: 2.0,
  beta: 0.8,
  dCutoff: 0.2
};

const FILTERS = {
  KALMAN: "kalman",
  ONEEURO: "oneEuro",
  NONE: "none"
} as const;

type Filter = (typeof FILTERS)[keyof typeof FILTERS];
type FilterSet = {
  x: KalmanFilter | OneEuroFilter;
  y: KalmanFilter | OneEuroFilter;
  z: KalmanFilter | OneEuroFilter;
  worldX: KalmanFilter | OneEuroFilter;
  worldY: KalmanFilter | OneEuroFilter;
  worldZ: KalmanFilter | OneEuroFilter;
};

export class HandState {
  present: boolean;
  landmarks: Landmark[];
  worldLandmarks: Landmark[];
  relativeLandmarks: Landmark[];
  scale: number;
  gesture: Gesture | null;
  filterType: Filter;
  filters: FilterSet[] | null;

  constructor(filterType = FILTERS.ONEEURO) {
    this.present = false;

    this.landmarks = [];
    this.worldLandmarks = [];
    this.relativeLandmarks = [];
    this.scale = -1;

    this.gesture = null;

    this.filterType = filterType;
    this.filters = [];

    this.initFilters(filterType);
  }

  updateFromResult(result: HandResult | null) {
    if (!result) {
      this.present = false;
      return;
    }
    this.present = true;
    if (this.filters == null) {
      this.landmarks = result.landmarks;
      this.worldLandmarks = result.worldLandmarks;
    } else {
      this.landmarks = result.landmarks.map((lm, i) => ({
        x: this.filters![i].x.filter(lm.x),
        y: this.filters![i].y.filter(lm.y),
        z: this.filters![i].z.filter(lm.z),
        visibility: lm.visibility
      }));
      this.worldLandmarks = result.worldLandmarks.map((lm, i) => ({
        x: this.filters![i].worldX.filter(lm.x),
        y: this.filters![i].worldY.filter(lm.y),
        z: this.filters![i].worldZ.filter(lm.z),
        visibility: lm.visibility
      }));
    }
    this.scale = handScale(result.landmarks);
    this.relativeLandmarks = result.landmarks.map((lm) => ({
      x: lm.x / this.scale,
      y: lm.y / this.scale,
      z: lm.z / this.scale,
      visibility: lm.visibility
    }));
  }

  initFilters(type: Filter) {
    this.filters = new Array(21).fill({});
    if (type === FILTERS.KALMAN) {
      const { Q, R } = kalmanParams;
      for (let i = 0; i < 21; i++) {
        this.filters[i] = {
          x: new KalmanFilter(dt, Q, R),
          y: new KalmanFilter(dt, Q, R),
          z: new KalmanFilter(dt, Q, R),
          worldX: new KalmanFilter(dt, Q, R),
          worldY: new KalmanFilter(dt, Q, R),
          worldZ: new KalmanFilter(dt, Q, R)
        };
      }
    } else if (type === FILTERS.ONEEURO) {
      const { minCutoff, beta, dCutoff } = oneEuroParams;
      const freq = 1 / dt;
      for (let i = 0; i < 21; i++) {
        this.filters[i] = {
          x: new OneEuroFilter(freq, minCutoff, beta, dCutoff),
          y: new OneEuroFilter(freq, minCutoff, beta, dCutoff),
          z: new OneEuroFilter(freq, minCutoff, beta, dCutoff),
          worldX: new OneEuroFilter(freq, minCutoff, beta, dCutoff),
          worldY: new OneEuroFilter(freq, minCutoff, beta, dCutoff),
          worldZ: new OneEuroFilter(freq, minCutoff, beta, dCutoff)
        };
      }
    } else if (type === FILTERS.NONE) {
      this.filters = null;
    }
  }
}
