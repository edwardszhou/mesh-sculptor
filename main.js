import { Scene } from "./modules/scene.js";
import { Mediapipe, HAND } from "./modules/mediapipe.js";
import { MeshMaker } from "./modules/mesh.js";
import { M4, V3, V4 } from "./modules/math.js";

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
  clay.color = [0.8, 0.65, 0.4];

  let indicators = {};
  indicators.left = MeshMaker.rectMesh(0.1, 0.1, 0.5);
  indicators.right = MeshMaker.rectMesh(0.1, 0.1, 0.5);
  indicators.left.color = [0, 1, 1];
  indicators.right.color = [0, 0, 1];

  scene.meshes.push(clay);
  scene.meshes.push(indicators.left);
  scene.meshes.push(indicators.right);

  // PINCHING STATE
  let clayBase = [...clay.data];
  let clayDist = Array(clayBase.length / 6);
  let handBase = {};
  let isPinching = false;

  // ROTATING STATE
  let currRotMat = M4.identity();
  let isRotating = false;

  scene.onUpdate = () => {
    for (const handedness in mp.results) {
      const landmarks = mp.results[handedness].landmarks;
      const worldLandmarks = mp.results[handedness].worldLandmarks;

      const thumbTip = landmarks[HAND.THUMB_TIP];
      const indexTip = landmarks[HAND.INDEX_FINGER_TIP];
      const pinchCoords = screenToWorld(avgPos2D(thumbTip, indexTip));
      const pinchDist =
        Math.pow(indexTip.x - thumbTip.x, 2) +
        Math.pow(indexTip.y - thumbTip.y, 2);

      indicators[handedness].transform.set(M4.identity());
      indicators[handedness].transform
        .move(-pinchCoords.x, -pinchCoords.y, pinchCoords.z)
        .scale(0.1);
      if (handedness === "left") {
        // PINCHING TO SCULPT
        let toPinch = pinchDist < 0.01;

        if (!isPinching && toPinch) {
          for (let i = 0; i < clay.data.length; i += 6) {
            let x = clay.data[i];
            let y = clay.data[i + 1];
            let z = clay.data[i + 2];

            let dist =
              Math.pow(pinchCoords.x - x, 2) +
              Math.pow(pinchCoords.y - y, 2) +
              Math.pow(pinchCoords.z - z, 2);
            clayDist[Math.floor(i / 6)] = dist;
            handBase = { ...pinchCoords };
          }
        } else if (isPinching) {
          if (!toPinch) {
            clayBase = [...clay.data];
          } else {
            for (let i = 0; i < clay.data.length; i += 6) {
              clay.data[i] =
                clayBase[i] +
                Math.max(1 - clayDist[Math.floor(i / 6)], 0) *
                  (pinchCoords.x - handBase.x);
              clay.data[i + 1] =
                clayBase[i + 1] +
                Math.max(1 - clayDist[Math.floor(i / 6)], 0) *
                  (pinchCoords.y - handBase.y);
              clay.data[i + 2] =
                clayBase[i + 2] +
                Math.max(1 - clayDist[Math.floor(i / 6)], 0) *
                  (pinchCoords.z - handBase.z);
            }
          }
        }

        isPinching = toPinch;
      }

      if (handedness === "right") {
        // CONTROL OBJECT ORIENTATION

        let z1 = Object.values(worldLandmarks[HAND.THUMB_TIP]);
        let z2 = Object.values(worldLandmarks[HAND.PINKY_TIP]);
        let y1 = Object.values(worldLandmarks[HAND.WRIST]);
        let y2 = Object.values(worldLandmarks[HAND.MIDDLE_FINGER_TIP]);

        let Z = V3.sub(z1, z2);
        let Y = V3.sub(y1, y2);

        let toRotate = V3.length(Z) > 0.13 && V3.length(Y) > 0.13;
        let newRotMat = M4.aim(Z, Y);
        let reflMat = [-1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
        newRotMat = M4.nmul(reflMat, newRotMat, reflMat);

        if (!isRotating && toRotate) {
          currRotMat = newRotMat;
        } else if (isRotating) {
          if (!toRotate) {
            clay.transform.scale(-1, -1, 1)
            clay.data = MeshMaker.transformMeshData(clay.data, clay.transform.get())
            clay.transform.identity().scale(-1, -1, 1)
            clayBase = [...clay.data];
          } else {
            clay.transform.set(M4.nmul(newRotMat, M4.transpose(currRotMat), M4.scale(-1, -1, 1)));
          }
        }

        isRotating = toRotate;
      }
    }

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

  mp.drawRule = (idx, landmark, handedness) => {
    if (
      isPinching &&
      [HAND.THUMB_TIP, HAND.INDEX_FINGER_TIP].includes(idx) &&
      handedness === "left"
    ) {
      return "#00FF00";
    } else if (
      isRotating &&
      [
        HAND.INDEX_FINGER_TIP,
        HAND.THUMB_TIP,
        HAND.WRIST,
        HAND.PINKY_TIP
      ].includes(idx) &&
      handedness === "right"
    ) {
      return "#0048ffff";
    } else {
      return "#FF0000";
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
  let initial = { x: (pt.x - 0.5) * 10, y: (pt.y - 0.5) * 7 };
  let rot = M4.rot(M4.Y, globalRot);
  let vec = [initial.x, initial.y, 0, 1];
  let res = V4.transform(rot, vec);
  return { x: res[0], y: res[1], z: res[2] };
}
function dist3(a, b, c) {
  const ab = Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);
  const bc = Math.pow(b.x - c.x, 2) + Math.pow(b.y - c.y, 2);
  const ca = Math.pow(c.x - a.x, 2) + Math.pow(c.y - a.y, 2);
  return ab + bc + ca;
}
