import { Scene } from "./modules/scene.js";
import { Mediapipe, HAND } from "./modules/mediapipe.js";
import { MeshMaker } from "./modules/mesh.js";
import { M4 } from "./modules/math.js";

window.onload = () => {
  const video = document.getElementById("webcam");
  const mpCanvas = document.getElementById("mediapipe_canvas");
  const glCanvas = document.getElementById("canvas");

  const mp = new Mediapipe(mpCanvas, video);
  const scene = new Scene(glCanvas);

  const startBtn = document.getElementById("startBtn");
  startBtn.addEventListener("click", async () => {
    if (!mp.ready && !mp.loading) {
      startBtn.disabled = true;
      startBtn.textContent = "Loading mediapipe...";
      await mp.init();
      startBtn.textContent = "Disable mediapipe";
      startBtn.disabled = false;
    } else {
      mp.toggle();
      startBtn.textContent = mp.running
        ? "Disable mediapipe"
        : "Enable mediapipe";
    }
  });
  const caption = document.getElementById("caption");

  scene.init();

  let defaultBox = MeshMaker.sphereMesh(10, 10);
  let indicatorL = MeshMaker.sphereMesh(5, 5);
  indicatorL.color = [0,1,1]
  let indicatorR = MeshMaker.sphereMesh(5, 5);
  indicatorR.color = [0,0,1]

  scene.meshes.push(defaultBox);
  scene.meshes.push(indicatorL);
  scene.meshes.push(indicatorR);

  let isPinching = false;

  scene.onUpdate = () => {
    let markers = [];

    if (mp.results?.landmarks?.length > 0) {
      for (let i = 0; i< mp.results.landmarks.length; i++) {
        const landmarks = mp.results.landmarks[i];
        const handedness = mp.results.handednesses[i][0].displayName;
        
        const thumbTip = landmarks[HAND.THUMB_TIP];
        const indexTip = landmarks[HAND.INDEX_FINGER_TIP];
        const dist = Math.pow(indexTip.x - thumbTip.x, 2) + Math.pow(indexTip.y - thumbTip.y, 2)

        markers.push({...avgPos2D(thumbTip, indexTip), handedness, dist});
      }
    }

    for (const mark of markers) {
      const markerCoords = screenToWorld(mark);
      if(mark.handedness == "Left") {
        indicatorL.transform.set(M4.identity());
        indicatorL.transform.move(-markerCoords.x, -markerCoords.y, 0).scale(0.1);
        isPinching = mark.dist < 0.01;
      } else if(mark.handedness == "Right") {
        indicatorR.transform.set(M4.identity());
        indicatorR.transform.move(-markerCoords.x, -markerCoords.y, 0).scale(0.1);
      }
    }

    caption.textContent = JSON.stringify(markers);

    let time = Date.now() / 1000;
    let camT = M4.nmul(
      M4.perspective(0, 0, -0.5),
      M4.rot(M4.X, -0.3),
      M4.move(0, -1.5, -5)
      //M4.rot(M4.Y, (time * Math.PI * 2) / 8)
    );
    return camT;
  };

  mp.drawRule = (idx, landmark, handedness) => {
    if (
      isPinching &&
      [HAND.THUMB_TIP, HAND.INDEX_FINGER_TIP].includes(idx) &&
      handedness == "Left"
    ) {
      return "#00FF00";
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
  return { x: (pt.x - 0.5) * 10, y: (pt.y - 0.5) * 7 };
}
function getTotalDist(a, b, c) {
  const ab = Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);
  const bc = Math.pow(b.x - c.x, 2) + Math.pow(b.y - c.y, 2);
  const ca = Math.pow(c.x - a.x, 2) + Math.pow(c.y - a.y, 2);
  return ab + bc + ca;
}
