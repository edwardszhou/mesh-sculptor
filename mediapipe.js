import {
  HandLandmarker,
  FilesetResolver,
  DrawingUtils
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0";

let handLandmarker = undefined;
let webcamRunning = false;
let webcamInitialized = false;

const createHandLandmarker = async () => {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
  );
  handLandmarker = await HandLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
      delegate: "GPU"
    },
    runningMode: "VIDEO",
    numHands: 2
  });
};

createHandLandmarker();

let scene;
let button;

const video = document.getElementById("webcam");
const canvasElement = document.getElementById("mediapipe_canvas");
const canvasCtx = canvasElement.getContext("2d");
const drawUtils = new DrawingUtils(canvasCtx);


button = document.getElementById("webcamButton");
button.addEventListener("click", enableCam);

function enableCam() {
  if (!handLandmarker) {
    console.log("Wait! objectDetector not loaded yet.");
    return;
  }

  console.log(webcamRunning);
  if (webcamInitialized) {
    if (webcamRunning) {
      webcamRunning = false;
      canvasElement.hidden = true;
      button.innerText = "Enable hand controls";
    } else {
      webcamRunning = true;
      canvasElement.hidden = false;
      predictWebcam();
      button.innerText = "Disable hand controls";
    }
    return;
  }

  navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    video.srcObject = stream;
    video.addEventListener("loadeddata", predictWebcam);
    webcamRunning = true;
    webcamInitialized = true;

    scene = new Scene();
    gl_start(canvas, scene);
  });
}

let lastVideoTime = -1;
let results = undefined;

function predictWebcam() {
  canvasElement.style.width = (video.videoWidth / video.videoHeight) * 800;
  canvasElement.style.height = 800;
  canvasElement.width = (video.videoWidth / video.videoHeight) * 800;
  canvasElement.height = 800;

  let startTimeMs = performance.now();
  if (lastVideoTime !== video.currentTime) {
    lastVideoTime = video.currentTime;
    results = handLandmarker.detectForVideo(video, startTimeMs);
  }
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  if (results.landmarks) {
    for (let i = 0; i < results.landmarks.length; i++) {
      const landmarks = results.landmarks[i];
      drawUtils.drawConnectors(landmarks, HandLandmarker.HAND_CONNECTIONS, {
        color: "#00FF00",
        lineWidth: 5
      });

      const selected = new Set([4, 8, 12]);
      scene.penRadius = getTotalDist(landmarks[4], landmarks[8], landmarks[12]);
      scene.penPos = getAveragePos(landmarks[4], landmarks[8], landmarks[12]);

      // document.getElementById('text').innerText = `${scene.penRadius}\n${JSON.stringify(scene.penPos)}`;

      for (let j = 0; j < landmarks.length; j++) {
        const landmark = landmarks[j];
        const dot_color =
          (scene.penRadius < 0.01 || scene.penRadius > 0.5) && selected.has(j)
            ? "#00ffccff"
            : "#FF0000";
        drawUtils.drawLandmarks([landmark], {
          color: dot_color,
          lineWidth: 2
        });
      }
    }
  }
  canvasCtx.restore();

  // Call this function again to keep predicting when the browser is ready.
  if (webcamRunning === true) {
    window.requestAnimationFrame(predictWebcam);
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
