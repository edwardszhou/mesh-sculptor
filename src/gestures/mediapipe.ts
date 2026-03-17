import {
  HandLandmarker,
  FilesetResolver,
  DrawingUtils,
  type HandLandmarkerResult,
  type Landmark
} from "@mediapipe/tasks-vision";

type Handedness = "left" | "right";

type HandResult = {
  landmarks: Landmark[];
  worldLandmarks: Landmark[];
};

type HandResults = Record<Handedness, HandResult | null>;

class Mediapipe {
  private video: HTMLVideoElement & {
    lastVideoTime?: number;
  };
  private ctx: CanvasRenderingContext2D;

  private drawUtils: DrawingUtils;
  private landmarker: HandLandmarker;

  results: HandResults;

  isReady: boolean;
  isDebug: boolean;

  private constructor(
    canvas: HTMLCanvasElement,
    video: HTMLVideoElement,
    landmarker: HandLandmarker
  ) {
    this.ctx = canvas.getContext("2d")!;
    this.video = video;

    this.landmarker = landmarker;
    this.drawUtils = new DrawingUtils(this.ctx);
    this.results = { left: null, right: null };

    this.isReady = false;
    this.isDebug = false;
  }

  static async create(canvas: HTMLCanvasElement, video: HTMLVideoElement) {
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

  init() {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      this.video.srcObject = stream;
      this.video.addEventListener("loadeddata", () => {
        this.isReady = true;
      });
    });
  }

  predict() {
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

  private processResults(results: HandLandmarkerResult) {
    this.results.left = null;
    this.results.right = null;

    for (let i = 0; i < results.landmarks.length; i++) {
      const handedness = results.handedness[i][0].displayName.toLowerCase() as Handedness;

      const landmarks = results.landmarks[i].map(this.transformLandmark);
      const worldLandmarks = results.worldLandmarks[i].map(this.transformLandmark);

      this.results[handedness] = { landmarks, worldLandmarks };
    }
  }

  private transformLandmark(lm: Landmark): Landmark {
    return {
      x: lm.x,
      y: lm.y,
      z: lm.z,
      visibility: lm.visibility
    };
  }

  private drawDebug() {
    this.ctx.save();

    for (const hand of Object.values(this.results)) {
      if (!hand) continue;

      this.drawUtils.drawConnectors(hand.landmarks, HandLandmarker.HAND_CONNECTIONS, {
        color: "#FFFFFF",
        lineWidth: 2
      });
      this.drawUtils.drawLandmarks(hand.landmarks, {
        color: "#FFFFFF",
        lineWidth: 2
      });
    }

    this.ctx.restore();
  }
}

export { Mediapipe };
