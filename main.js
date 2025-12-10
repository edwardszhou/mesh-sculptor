import { Scene } from './modules/scene.js'
import { Mediapipe } from './modules/mediapipe.js'

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

  scene.init();
}
