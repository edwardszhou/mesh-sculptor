import { Scene } from "./modules/scene.js";
import { Mediapipe } from "./modules/mediapipe.js";
import { MeshMaker } from "./modules/mesh.js";
import { M4 } from "./modules/math.js";
import { LM } from "./modules/gesture.js";
import { initPrototype1, initPrototype3 } from "./modules/prototypes.js";

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
  const prototypeSelect = document.getElementById("prototypeSelect");

  let gestureTracker, drawFn;

  startBtn.addEventListener("click", async () => {
    if (!mp.ready && !mp.loading) {
      startBtn.disabled = true;
      prototypeSelect.disabled = true;
      startBtn.textContent = "Loading mediapipe...";
      await mp.init();

      const prototypeNum = prototypeSelect.value;
      switch(prototypeNum) {
        case "1":
          ({gestureTracker, drawFn} = initPrototype1(clay, scene))
          break;
        case "2":
        case "3":
          ({gestureTracker, drawFn} = initPrototype3(clay, scene))
          break;
      }
      console.log(gestureTracker, drawFn)
      mp.draw = () => drawFn(mp);

      btnContainer.style.opacity = 0;
    } else {
      mp.toggle();
      startBtn.textContent = mp.running ? "Disable mediapipe" : "Enable mediapipe";
    }
  });

  scene.init();

  let clay = MeshMaker.sphereMesh(20, 20);
  clay.transform.scale(-1, -1, 1);
  clay.color = [0.7, 0.7, 0.7];

  scene.meshes.push(clay);

  scene.onUpdate = () => {
    gestureTracker?.update(mp.results);
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

    let rot = gestureTracker?.gestures[0]?.gesture.state.globalRot ?? 0;
    
    let time = Date.now() / 1000;
    let camT = M4.nmul(
      M4.perspective(0, 0, -0.5),
      M4.rot(M4.X, -0.3),
      M4.move(0, -1.5, -5),
      M4.rot(M4.Y, rot)
      //M4.rot(M4.Y, (time * Math.PI * 2) / 8)
    );
    return camT;
  };

  mp.drawRule = (idx, landmark, h) => {
    if (gestureTracker?.active[h]?.id === "pinch" && [LM.THUMB_TIP, LM.INDEX_TIP].includes(idx)) {
      return "#00FF00";
    // } else if (
    //   isRotating &&
    //   [LM.MIDDLE_TIP, LM.THUMB_TIP, LM.WRIST, LM.PINKY_TIP].includes(idx) &&
    //   h === "right"
    // ) {
    //   return "#0048ffff";
    } else {
      return null;
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


function dist3(a, b, c) {
  const ab = Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);
  const bc = Math.pow(b.x - c.x, 2) + Math.pow(b.y - c.y, 2);
  const ca = Math.pow(c.x - a.x, 2) + Math.pow(c.y - a.y, 2);
  return ab + bc + ca;
}
