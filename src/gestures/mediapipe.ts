import {
  HandLandmarker,
  FilesetResolver,
  DrawingUtils,
  type HandLandmarkerResult,
  type Landmark
} from "@mediapipe/tasks-vision";

export type Handedness = "left" | "right";

export type Hand = {
  landmarks: Landmark[];
  worldLandmarks: Landmark[];
};

export type Hands<T> = Record<Handedness, T>;
export type HandsResult = Hands<Hand | null>;

export const HANDEDNESSES = ["left", "right"] as const satisfies Handedness[];

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

  results: HandsResult;

  isReady: boolean;
  isDebug: boolean;

  private constructor(
    canvas: HTMLCanvasElement,
    video: HTMLVideoElement,
    landmarker: HandLandmarker
  ) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
    this.video = video;

    this.landmarker = landmarker;
    this.drawUtils = new DrawingUtils(this.ctx);
    this.results = { left: null, right: null };

    this.isReady = false;
    this.isDebug = true;
  }

  static async create(canvas: HTMLCanvasElement, video: HTMLVideoElement, dummy: boolean = false) {
    if (dummy) {
      return new Mediapipe(canvas, video, { dummy: true } as any);
    }
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
    );
    const landmarker = await HandLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
        delegate: "GPU"
      },
      runningMode: "VIDEO",
      numHands: 2
    });
    return new Mediapipe(canvas, video, landmarker);
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

      const initialResults = this.landmarker.detectForVideo(this.video, performance.now());
      this.processResults(initialResults);
    }

    if (this.isDebug) {
      this.drawDebug();
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

  private processResults(results: HandLandmarkerResult) {
    this.results.left = null;
    this.results.right = null;

    for (let i = 0; i < results.landmarks.length; i++) {
      const handedness = results.handedness[i][0].displayName.toLowerCase() as Handedness;

      const landmarks = results.landmarks[i].map((lm) => this.transformLandmark(lm));
      const worldLandmarks = results.worldLandmarks[i].map((lm) => this.transformLandmark(lm));

      this.results[handedness] = { landmarks, worldLandmarks };
    }
  }

  private transformLandmark(lm: Landmark): Landmark {
    return {
      x: 1 - (videoState.x + lm.x * videoState.w) / this.canvas.width,
      y: (videoState.y + lm.y * videoState.h) / this.canvas.height,
      z: lm.z,
      visibility: lm.visibility
    };
  }

  private drawDebug() {
    this.ctx.save();
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    for (const hand of Object.values(this.results)) {
      if (!hand) continue;

      this.drawUtils.drawConnectors(hand.landmarks, HandLandmarker.HAND_CONNECTIONS, {
        color: "#FFFFFF",
        lineWidth: 2
      });
      // this.drawUtils.drawLandmarks(hand.landmarks, {
      //   color: "#FFFFFF",
      //   lineWidth: 2
      // });
    }

    this.ctx.restore();
  }
}

export { Mediapipe };
