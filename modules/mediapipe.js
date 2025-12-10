import {
  HandLandmarker,
  FilesetResolver,
  DrawingUtils
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0";

class Mediapipe {
  constructor(canvas, video) {
    this.canvas = canvas;
    this.canvasCtx = canvas.getContext("2d");
    this.video = video;

    this.drawUtils = new DrawingUtils(this.canvasCtx);
    this.onResults = null;

    this.landmarker = null;
    this.results = null;

    this.loading = false;
    this.ready = false;
    this.running = false;

    this._lastVideoTime = -1;
  }

  async init() {
    this.loading = true;

    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
    );
    this.landmarker = await HandLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
        delegate: "GPU"
      },
      runningMode: "VIDEO",
      numHands: 2
    });

    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      this.video.srcObject = stream;
      this.video.addEventListener("loadeddata", () => {
        this.loading = true;
        this.ready = true;
        this.toggle();
      });
    });
  }

  toggle() {
    if (!this.ready) return;

    if (this.running) {
      this.running = false;
      this.canvas.hidden = true;
    } else {
      this.running = true;
      this.canvas.hidden = false;
      this.predict();
    }
  }

  predict() {
    const canvas = this.canvas;
    const canvasCtx = this.canvasCtx;
    const video = this.video;

    canvas.style.width = (video.videoWidth / video.videoHeight) * 800;
    canvas.style.height = 800;
    canvas.width = (video.videoWidth / video.videoHeight) * 800;
    canvas.height = 800;

    if (this._lastVideoTime !== video.currentTime) {
      this._lastVideoTime = video.currentTime;
      this.results = this.landmarker.detectForVideo(
        this.video,
        performance.now()
      );
    }

    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

    if (this.results.landmarks) {
      for (let i = 0; i < this.results.landmarks.length; i++) {
        const landmarks = this.results.landmarks[i];
        this.drawUtils.drawConnectors(
          landmarks,
          HandLandmarker.HAND_CONNECTIONS,
          {
            color: "#00FF00",
            lineWidth: 5
          }
        );
        this.drawUtils.drawLandmarks(landmarks, {
          color: "#FF0000",
          lineWidth: 2
        });
      }
    }
    this.onResults?.();
    canvasCtx.restore();

    if (this.running === true) {
      window.requestAnimationFrame(this.predict.bind(this));
    }
  }
}

function getAveragePos(a, b, c) {
  return { x: (a.x + b.x + c.x) / 3, y: (a.y + b.y + c.y) / 3 };
}
function getTotalDist(a, b, c) {
  const ab = Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);
  const bc = Math.pow(b.x - c.x, 2) + Math.pow(b.y - c.y, 2);
  const ca = Math.pow(c.x - a.x, 2) + Math.pow(c.y - a.y, 2);
  return ab + bc + ca;
}

export { Mediapipe };
