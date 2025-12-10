import { Scene } from './modules/scene.js'
import { Mediapipe, HAND } from './modules/mediapipe.js'
import { MeshMaker } from './modules/mesh.js';
import { M4 } from './modules/math.js';

window.onload = () => {

  const video = document.getElementById("webcam");
  const mpCanvas = document.getElementById("mediapipe_canvas");
  const glCanvas = document.getElementById("canvas");

  const mp = new Mediapipe(mpCanvas, video);
  const scene = new Scene(glCanvas);

  const startBtn = document.getElementById("startBtn");
  startBtn.addEventListener("click", async () => {
    if(!mp.ready && !mp.loading) {
      startBtn.disabled = true;
      startBtn.textContent = 'Loading mediapipe...';
      await mp.init();
      startBtn.textContent = 'Disable mediapipe';
      startBtn.disabled = false;
    }
    else {
      mp.toggle();
      startBtn.textContent = mp.running ? 'Disable mediapipe' : 'Enable mediapipe';
    }
  });
  const caption = document.getElementById("caption");

  scene.init();

  let defaultBox = MeshMaker.sphereMesh(10, 10);
  let indicator = MeshMaker.sphereMesh(5, 5);
  indicator.transform.move(-1, 0, 0).scale(0.5)


  scene.meshes.push(defaultBox)
  scene.meshes.push(indicator)

  scene.onUpdate = () => {

    let fingertips = [];

    if(mp.results?.landmarks?.length > 0) {
      for(const landmarks of mp.results.landmarks) {
        const thumbTip = landmarks[HAND.THUMB_TIP]
        const indexTip = landmarks[HAND.INDEX_FINGER_TIP]
        fingertips.push(avgPos2D(thumbTip, indexTip))
      }
    }
    
    if(fingertips.length > 0) {
      const fingertipCoords = screenToWorld(fingertips[0])
      indicator.transform.set(M4.identity())
      indicator.transform.move(-fingertipCoords.x, -fingertipCoords.y, 0)
    }

    caption.textContent = JSON.stringify(fingertips)

    let time = Date.now() / 1000;
    let camT = M4.nmul(
      M4.perspective(0,0,-0.5),
      M4.rot(M4.X, -0.3),
      M4.move(0, -1.5, -5),
      //M4.rot(M4.Y, (time * Math.PI * 2) / 8)
    );
    return camT
  }
}

function avgPos2D(...pts) {
  let res = {x: 0, y: 0}
  for(const pt of pts) {
    res.x += pt.x / pts.length
    res.y += pt.y / pts.length
  }
  return res;
}

function screenToWorld(pt) {
  return {x: (pt.x - 0.5) * 10, y: (pt.y - 0.5) * 7}
}
function getTotalDist(a, b, c) {
  const ab = Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);
  const bc = Math.pow(b.x - c.x, 2) + Math.pow(b.y - c.y, 2);
  const ca = Math.pow(c.x - a.x, 2) + Math.pow(c.y - a.y, 2);
  return ab + bc + ca;
}
