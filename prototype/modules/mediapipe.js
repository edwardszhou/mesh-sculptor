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
    this.drawRule = null;

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
      this.processResults(
        this.landmarker.detectForVideo(this.video, performance.now())
      );
    }

    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

    for (const handedness in this.results) {
      const landmarks = this.results[handedness].landmarks;

      this.drawUtils.drawConnectors(
        landmarks,
        HandLandmarker.HAND_CONNECTIONS,
        {
          color: "#FFFFFF",
          lineWidth: 5
        }
      );

      for (let i = 0; i < landmarks.length; i++) {
        const landmark = landmarks[i];
        const color = this.drawRule?.(i, landmark, handedness);

        if(color) {
          this.drawUtils.drawLandmarks([landmark], {
            color,
            lineWidth: 2
          });
        }
      }
    }
    this.draw?.();
    canvasCtx.restore();

    if (this.running === true) {
      window.requestAnimationFrame(this.predict.bind(this));
    }
  }

  processResults(results) {
    let newResults = {};
    for (let i = 0; i < results.landmarks?.length ?? 0; i++) {
      const handedness = results.handednesses[i][0].displayName.toLowerCase();
      const landmarks = results.landmarks[i];
      const worldLandmarks = results.worldLandmarks[i];
      newResults[handedness] = { landmarks, worldLandmarks };
    }

    for (const hand in newResults) {
      if (!this.results || !this.results[hand]) continue;
      for (let i = 0; i < newResults[hand].landmarks.length; i++) {
        let oldLm = this.results[hand].landmarks[i];
        let newLm = newResults[hand].landmarks[i];
        newResults[hand].landmarks[i] = { 
          x: (oldLm.x + newLm.x) / 2,
          y: (oldLm.y + newLm.y) / 2,
          z: (oldLm.z + newLm.z) / 2,
        };

        let oldWlm = this.results[hand].worldLandmarks[i];
        let newWlm = newResults[hand].worldLandmarks[i];
        newResults[hand].worldLandmarks[i] = { 
          x: (oldWlm.x + newWlm.x) / 2,
          y: (oldWlm.y + newWlm.y) / 2,
          z: (oldWlm.z + newWlm.z) / 2,
        };
      }
    }

    this.results = newResults;
  }
}

export { Mediapipe };
