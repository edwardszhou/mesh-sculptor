import {
  HandLandmarker,
  FilesetResolver,
  DrawingUtils
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0";

const HAND = {
  "WRIST": 0,
  "THUMB_CMC": 1,
  "THUMB_MCP": 2,
  "THUMB_IP": 3,
  "THUMB_TIP": 4,

  "INDEX_FINGER_MCP": 5,
  "INDEX_FINGER_PIP": 6,
  "INDEX_FINGER_DIP": 7,
  "INDEX_FINGER_TIP": 8,

  "MIDDLE_FINGER_MCP": 9,
  "MIDDLE_FINGER_PIP": 10,
  "MIDDLE_FINGER_DIP": 11,
  "MIDDLE_FINGER_TIP": 12,

  "RING_FINGER_MCP": 13,
  "RING_FINGER_PIP": 14,
  "RING_FINGER_DIP": 15,
  "RING_FINGER_TIP": 16,

  "PINKY_MCP": 17,
  "PINKY_PIP": 18,
  "PINKY_DIP": 19,
  "PINKY_TIP": 20
};
class Mediapipe {
  constructor(canvas, video) {
    this.canvas = canvas;
    this.canvasCtx = canvas.getContext("2d");
    this.video = video;

    this.drawUtils = new DrawingUtils(this.canvasCtx);
    this.drawRules = [];

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
        const handedness = this.results.handednesses[i][0].displayName;
        this.drawUtils.drawConnectors(
          landmarks,
          HandLandmarker.HAND_CONNECTIONS,
          {
            color: "#00FF00",
            lineWidth: 5
          }
        );

        let color = "#FF0000"
        for (let j = 0; j < landmarks.length; j++) {
          const landmark = landmarks[j]
          for(const rule of this.drawRules) {
            if(rule.check(j, landmark, handedness)) color = rule.color 
          }

          this.drawUtils.drawLandmarks([landmark], {
            color,
            lineWidth: 2
          });
        }
      }
    }
    canvasCtx.restore();

    if (this.running === true) {
      window.requestAnimationFrame(this.predict.bind(this));
    }
  }
}

export { Mediapipe, HAND };
