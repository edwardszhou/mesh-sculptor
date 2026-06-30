import { HandLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

let landmarker: HandLandmarker | null = null;

async function init() {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
  );
  const response = await fetch(vision.wasmLoaderPath);
  (0, eval)(await response.text());
  delete (vision as any).wasmLoaderPath;

  landmarker = await HandLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath:
        "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",
      delegate: "GPU"
    },
    runningMode: "VIDEO",
    numHands: 2
  });
}

init();

self.onmessage = (event) => {
  if (!landmarker) return;

  const { frame, timestamp } = event.data;
  const results = landmarker.detectForVideo(frame, timestamp);
  frame.close();

  self.postMessage({ results, type: "results" });
};
