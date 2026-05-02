import {
  HandLandmarker,
  DrawingUtils,
  type HandLandmarkerResult,
  type Landmark as MPLandmark,
  FilesetResolver
} from "@mediapipe/tasks-vision";
import {
  FILTERS,
  KalmanFilter,
  kalmanParams,
  OneEuroFilter,
  oneEuroParams,
  type Filter
} from "../utils/filter";
import { NUM_LMS, type Landmark } from "./landmarks";
import Stats from "three/addons/libs/stats.module.js";

export type Handedness = "left" | "right";

export type HandResult = {
  landmarks: Landmark[];
  worldLandmarks: Landmark[];
};

export type Hands<T> = Record<Handedness, T>;
export type HandsResult = Hands<HandResult | null>;

export const HANDEDNESSES = ["left", "right"] as const satisfies Handedness[];

type FilterSet = {
  x: KalmanFilter | OneEuroFilter;
  y: KalmanFilter | OneEuroFilter;
  z: KalmanFilter | OneEuroFilter;
  worldX: KalmanFilter | OneEuroFilter;
  worldY: KalmanFilter | OneEuroFilter;
  worldZ: KalmanFilter | OneEuroFilter;
};

const videoState = {
  x: 0,
  y: 0,
  w: window.innerWidth,
  h: window.innerHeight,
  isVisible: true
};

class Mediapipe {
  private video: HTMLVideoElement & {
    lastVideoTime?: number;
  };
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private drawUtils: DrawingUtils;
  private landmarker: HandLandmarker;

  private worker: Worker;
  private workerIsProcessing: boolean;

  readonly filterType: Filter;
  private filters: Hands<FilterSet[]> | null;

  private stats: Stats;

  results: HandsResult;

  isReady: boolean;
  showStats: boolean;
  showDebug: boolean;

  private constructor(
    filter: Filter,
    showDebug: boolean,
    showStats: boolean,
    landmarker: HandLandmarker
  ) {
    this.canvas = document.getElementById("mediapipe-canvas") as HTMLCanvasElement;
    this.video = document.getElementById("mediapipe-video") as HTMLVideoElement;
    this.ctx = this.canvas.getContext("2d")!;

    this.landmarker = landmarker;
    this.drawUtils = new DrawingUtils(this.ctx);
    this.results = { left: null, right: null };

    this.filterType = filter;
    this.filters = { left: [], right: [] };
    this.initFilters();

    this.worker = new Worker(new URL("./mediapipeWorker.ts", import.meta.url), {
      type: "module"
    });
    this.workerIsProcessing = false;
    this.initWorker();

    this.isReady = false;
    this.showDebug = showDebug;
    this.showStats = showStats;

    this.stats = new Stats();
    if (showStats) {
      const container = document.getElementById("app-container") as HTMLDivElement;
      container.appendChild(this.stats.dom);
      this.stats.dom.style.right = "0px";
      this.stats.dom.style.left = "";
    }
  }

  static async create(filter: Filter, showDebug = false, showStats = false, dummy = false) {
    if (dummy) {
      return new Mediapipe(filter, showDebug, showStats, { dummy: true } as any);
    }

    const vision = await FilesetResolver.forVisionTasks("/wasm");
    const landmarker = await HandLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: `/tasks/hand_landmarker.task`,
        delegate: "GPU"
      },
      runningMode: "VIDEO",
      numHands: 2
    });
    return new Mediapipe(filter, showDebug, showStats, landmarker);
  }

  async init() {
    if ((this.landmarker as any).dummy) return;

    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: { ideal: 320 },
        height: { ideal: 240 }
      }
    });
    return new Promise<void>((resolve) => {
      this.video.srcObject = stream;
      this.video.addEventListener("loadeddata", () => {
        this.resize();
        this.isReady = true;
        resolve();
      });
    });
  }

  predict() {
    if (!this.isReady) return;
    const video = this.video;

    if (video.lastVideoTime !== video.currentTime) {
      video.lastVideoTime = video.currentTime;

      const now = performance.now();
      const initialResults = this.landmarker.detectForVideo(this.video, now);
      this.processResults(initialResults, now / 1000);
    }

    if (this.showDebug) {
      this.drawDebug();
    }
  }

  async workerPredict() {
    if (!this.isReady) return;
    const video = this.video;

    if (video.lastVideoTime === video.currentTime) return;
    video.lastVideoTime = video.currentTime;

    const timestamp = performance.now();
    const bitmap = await createImageBitmap(this.video);

    if (this.workerIsProcessing) {
      bitmap.close();
    } else {
      this.worker.postMessage({ frame: bitmap, timestamp }, [bitmap]);
      this.workerIsProcessing = true;
    }
  }

  resize() {
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;

    this.canvas.width = width;
    this.canvas.height = height;
    const videoAspect = this.video.videoWidth / this.video.videoHeight;
    if (videoAspect > width / height) {
      videoState.w = height * videoAspect;
      videoState.h = height;
      videoState.x = (width - videoState.w) / 2;
      videoState.y = 0;
    } else {
      videoState.w = width;
      videoState.h = width / videoAspect;
      videoState.x = 0;
      videoState.y = (height - videoState.h) / 2;
    }
  }

  private processResults(results: HandLandmarkerResult, timestamp: number) {
    this.results.left = null;
    this.results.right = null;

    for (let i = 0; i < results.landmarks.length; i++) {
      const handedness = results.handedness[i][0].displayName.toLowerCase() as Handedness;

      const landmarks = results.landmarks[i].map((lm, i) =>
        this.transformLandmark(lm, i, handedness, timestamp)
      );
      const worldLandmarks = results.worldLandmarks[i].map((lm, i) =>
        this.transformWorldLandmark(lm, i, handedness, timestamp)
      );

      this.results[handedness] = { landmarks, worldLandmarks };
    }
    this.stats.update();
  }

  private transformLandmark(lm: Landmark, i: number, h: Handedness, timestamp: number): Landmark {
    const newX = 1 - (videoState.x + lm.x * videoState.w) / this.canvas.width;
    const newY = (videoState.y + lm.y * videoState.h) / this.canvas.height;
    const newZ = lm.z;

    return this.filters === null
      ? { x: newX, y: newY, z: newZ }
      : {
          x: this.filters[h][i].x.filter(newX, timestamp),
          y: this.filters[h][i].y.filter(newY, timestamp),
          z: this.filters[h][i].z.filter(newZ, timestamp)
        };
  }

  private transformWorldLandmark(
    lm: Landmark,
    i: number,
    h: Handedness,
    timestamp: number
  ): Landmark {
    const newX = 1 - lm.x;
    const newY = lm.y;
    const newZ = lm.z;

    return this.filters === null
      ? { x: newX, y: newY, z: newZ }
      : {
          x: this.filters[h][i].worldX.filter(newX, timestamp),
          y: this.filters[h][i].worldY.filter(newY, timestamp),
          z: this.filters[h][i].worldZ.filter(newZ, timestamp)
        };
  }

  private drawDebug() {
    this.ctx.save();
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    for (const hand of Object.values(this.results)) {
      if (!hand) continue;

      this.drawUtils.drawConnectors(
        hand.landmarks as MPLandmark[],
        HandLandmarker.HAND_CONNECTIONS,
        {
          color: "#FFFFFF",
          lineWidth: 2
        }
      );
      // this.drawUtils.drawLandmarks(hand.landmarks as MPLandmark[], {
      //   color: "#FFFFFF",
      //   lineWidth: 2
      // });
    }

    this.ctx.restore();
  }

  private initWorker() {
    this.worker.onmessage = (e) => {
      this.workerIsProcessing = false;
      const msg = e.data;
      if (msg.type === "results") {
        this.processResults(msg.results, performance.now() / 1000);
        if (this.showDebug) this.drawDebug();
      }
    };
  }

  private initFilters() {
    this.filters = { left: new Array(21).fill({}), right: new Array(21).fill({}) };
    for (const h of HANDEDNESSES) {
      if (this.filterType === FILTERS.KALMAN) {
        const { Q, R } = kalmanParams;
        for (let i = 0; i < NUM_LMS; i++) {
          this.filters![h][i] = {
            x: new KalmanFilter(Q, R),
            y: new KalmanFilter(Q, R),
            z: new KalmanFilter(Q, R),
            worldX: new KalmanFilter(Q, R),
            worldY: new KalmanFilter(Q, R),
            worldZ: new KalmanFilter(Q, R)
          };
        }
      } else if (this.filterType === FILTERS.ONEEURO) {
        const { minCutoff, beta, dCutoff } = oneEuroParams;
        for (let i = 0; i < NUM_LMS; i++) {
          this.filters![h][i] = {
            x: new OneEuroFilter(minCutoff, beta, dCutoff),
            y: new OneEuroFilter(minCutoff, beta, dCutoff),
            z: new OneEuroFilter(minCutoff, beta, dCutoff),
            worldX: new OneEuroFilter(minCutoff, beta, dCutoff),
            worldY: new OneEuroFilter(minCutoff, beta, dCutoff),
            worldZ: new OneEuroFilter(minCutoff, beta, dCutoff)
          };
        }
      } else if (this.filterType === FILTERS.NONE) {
        this.filters = null;
      }
    }
  }
}

export { Mediapipe };
