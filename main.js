import { Scene } from "./modules/scene.js";
import { Mediapipe } from "./modules/mediapipe.js";
import { MeshMaker } from "./modules/mesh.js";
import { M4, V3, V4 } from "./modules/math.js";
import { setUniform } from "./modules/webgl.js";
import { HandGesture, handScale, LM, lmAverage, lmDistance, PinchGesture } from "./modules/gesture.js";
import { GestureTracker } from "./modules/tracker.js";

let globalRot = 0;
let mouseX = 0;

document.addEventListener("mousedown", (e) => {
  mouseX = e.clientX;
});
document.addEventListener("mouseup", (e) => {
  mouseX = 0;
});
document.addEventListener("mousemove", (e) => {
  if (mouseX) globalRot += 0.0001 * (e.clientX - mouseX);
});

window.onload = () => {
  const video = document.getElementById("webcam");
  const mpCanvas = document.getElementById("mediapipe_canvas");
  const glCanvas = document.getElementById("canvas");

  const mp = new Mediapipe(mpCanvas, video);
  const scene = new Scene(glCanvas);

  const startBtn = document.getElementById("startBtn");
  const btnContainer = document.getElementById("btnContainer");
  startBtn.addEventListener("click", async () => {
    if (!mp.ready && !mp.loading) {
      startBtn.disabled = true;
      startBtn.textContent = "Loading mediapipe...";
      await mp.init();
      btnContainer.style.opacity = 0;
    } else {
      mp.toggle();
      startBtn.textContent = mp.running
        ? "Disable mediapipe"
        : "Enable mediapipe";
    }
  });

  scene.init();

  let clay = MeshMaker.sphereMesh(20, 20);
  clay.transform.scale(-1, -1, 1);
  clay.color = [0.7, 0.7, 0.7];

  scene.meshes.push(clay);

  // PINCHING STATE
  let clayBase = [...clay.data];

  // ROTATING STATE
  let currRotMat = M4.identity();
  let rotatingProgress = 0;
  let isRotating = false;

  const gestureTracker = new GestureTracker()
  const pinchGesture = new PinchGesture('pinch', [1], 0.25, 10)
  pinchGesture.onUpdate = ({ state }, hand, h) => {
    const pinchCoords = screenToWorld(state[h]);
    setUniform(scene.gl, "3fv", `uPinchPos_${h}`, [-pinchCoords.x, -pinchCoords.y, pinchCoords.z]);
  };

  pinchGesture.onStart = ({state, id}, hand, h) => {
    const pinchCoords = screenToWorld(state[h]);
    state[h].dist = Array(clayBase.length / 6);

    for (let i = 0; i < clay.data.length; i += 6) {
      let x = clay.data[i];
      let y = clay.data[i + 1];
      let z = clay.data[i + 2];

      let dist =
        Math.pow(pinchCoords.x - x, 2) +
        Math.pow(pinchCoords.y - y, 2) +
        Math.pow(pinchCoords.z - z, 2);

      state[h].dist[Math.floor(i / 6)] = dist;
      state[h].handOrigin = { ...pinchCoords };
    }
  }

  pinchGesture.onActive = ({state, id}, hand, h) => {
    const pinchCoords = screenToWorld(state[h]);

    for (let i = 0; i < clay.data.length; i += 6) {
      let factor = Math.max(1 - state[h].dist[Math.floor(i / 6)], 0);

      clay.data[i] =
        clayBase[i] + factor * (pinchCoords.x - state[h].handOrigin.x);
      clay.data[i + 1] =
        clayBase[i + 1] + factor * (pinchCoords.y - state[h].handOrigin.y);
      clay.data[i + 2] =
        clayBase[i + 2] + factor * (pinchCoords.z - state[h].handOrigin.z);
    }
  }

  pinchGesture.onEnd = ({state, id}, hand, h) => {
    setUniform(scene.gl, "3fv", "uPinchPos", [999,999,999]);
    clayBase = [...clay.data];
  }

  const detectRotate = (hand, h) => {
    const scale = handScale(hand.landmarks);
    const d1 = lmDistance(hand.landmarks, LM.WRIST, LM.MIDDLE_TIP) / scale;
    const d2 = lmDistance(hand.landmarks, LM.PINKY_TIP, LM.THUMB_TIP) / scale;

    // console.log(d1, d2);
  }

  const rotateGesture = new HandGesture("rotate", detectRotate, 10)


  gestureTracker.add(pinchGesture)
  gestureTracker.add(rotateGesture)

  scene.onUpdate = () => {
    gestureTracker.update(mp.results)
    for (const h in mp.results) {
      const landmarks = mp.results[h].landmarks;
      const worldLandmarks = mp.results[h].worldLandmarks;

      // if (h === "right") {
      //   // CONTROL OBJECT ORIENTATION

      //   let z1 = Object.values(worldLandmarks[HAND.THUMB_TIP]);
      //   let z2 = Object.values(worldLandmarks[HAND.PINKY_TIP]);
      //   let y1 = Object.values(worldLandmarks[HAND.WRIST]);
      //   let y2 = Object.values(worldLandmarks[HAND.MIDDLE_FINGER_TIP]);

      //   let Z = V3.sub(z1, z2);
      //   let Y = V3.sub(y1, y2);

      //   if (V3.length(Y) > 0.13) {
      //     rotatingProgress = Math.min(rotatingProgress + 0.02, 1);
      //   } else {
      //     rotatingProgress = Math.max(rotatingProgress - 0.05, 0);
      //   }
      //   let toRotate = rotatingProgress > 0.85;

      //   let newRotMat = M4.aim(Z, Y);
      //   let reflMat = [-1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
      //   newRotMat = M4.nmul(reflMat, newRotMat, reflMat);

      //   if (!isRotating && toRotate) {
      //     currRotMat = newRotMat;
      //   } else if (isRotating) {
      //     if (!toRotate) {
      //       clay.transform.scale(-1, -1, 1);
      //       clay.data = MeshMaker.transformMeshData(
      //         clay.data,
      //         clay.transform.get()
      //       );
      //       clay.transform.identity().scale(-1, -1, 1);
      //       clayBase = [...clay.data];
      //     } else {
      //       clay.transform.set(
      //         M4.nmul(newRotMat, M4.transpose(currRotMat), M4.scale(-1, -1, 1))
      //       );
      //     }
      //   }

      //   isRotating = toRotate;
      // }
    }

    // if(pinchCoords) {
    //   setUniform(scene.gl, "3fv", "uPinchPos", [-pinchCoords.x, -pinchCoords.y, pinchCoords.z]);
    // } else {
    //   setUniform(scene.gl, "3fv", "uPinchPos", [999,999,999]);
    // }

    let time = Date.now() / 1000;
    let camT = M4.nmul(
      M4.perspective(0, 0, -0.5),
      M4.rot(M4.X, -0.3),
      M4.move(0, -1.5, -5),
      M4.rot(M4.Y, globalRot)
      //M4.rot(M4.Y, (time * Math.PI * 2) / 8)
    );
    return camT;
  };

  mp.drawRule = (idx, landmark, h) => {
    if (
      gestureTracker.active[h]?.id === "pinch" &&
      [LM.THUMB_TIP, LM.INDEX_TIP].includes(idx)
    ) {
      return "#00FF00";
    } else if (
      isRotating &&
      [
        LM.MIDDLE_TIP,
        LM.THUMB_TIP,
        LM.WRIST,
        LM.PINKY_TIP
      ].includes(idx) &&
      h === "right"
    ) {
      return "#0048ffff";
    } else {
      return null;
    }
  };

  mp.draw = () => {
    const ctx = mp.canvasCtx;
    const canvas = mp.canvas;

    for (const h in mp.results) {
      const landmarks = mp.results[h].landmarks;
      const pinchConfidence = pinchGesture.confidence[h] / pinchGesture.activationThreshold;
      if (pinchConfidence > 0) {
        ctx.beginPath();
        ctx.arc(
          pinchGesture.state[h].x * canvas.width,
          pinchGesture.state[h].y * canvas.height,
          40,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(255, 0, 0, ${(0.5 * pinchConfidence) / 0.85})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(
          pinchGesture.state[h].x * canvas.width,
          pinchGesture.state[h].y * canvas.height,
          40,
          -Math.PI / 2 + Math.PI * 2 * (1 - pinchConfidence / 0.85),
          (3 * Math.PI) / 2
        );
        ctx.strokeStyle = "rgba(255, 0, 0, 0.8)";
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.stroke();
      } else if (h === "right" && rotatingProgress > 0) {
        const pos = landmarks[LM.MIDDLE_MCP];

        ctx.beginPath();
        ctx.arc(
          pos.x * canvas.width,
          pos.y * canvas.height,
          100,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(0, 0, 255, ${(0.5 * rotatingProgress) / 0.85})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(
          pos.x * canvas.width,
          pos.y * canvas.height,
          100,
          -Math.PI / 2 + Math.PI * 2 * (1 - rotatingProgress / 0.85),
          (3 * Math.PI) / 2
        );
        ctx.strokeStyle = "rgba(0, 0, 255, 0.8)";
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.stroke();
      }
    }
  };
};

function avgPos2D(...pts) {
  let res = { x: 0, y: 0 };
  for (const pt of pts) {
    res.x += pt.x / pts.length;
    res.y += pt.y / pts.length;
  }
  return res;
}

function screenToWorld(pt) {
  return { x: (pt.x - 0.5) * 10, y: (pt.y - 0.5) * 7, z: 0 };
}
function dist3(a, b, c) {
  const ab = Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);
  const bc = Math.pow(b.x - c.x, 2) + Math.pow(b.y - c.y, 2);
  const ca = Math.pow(c.x - a.x, 2) + Math.pow(c.y - a.y, 2);
  return ab + bc + ca;
}
