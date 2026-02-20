import { setUniform } from "./webgl.js";
import {
  LM,
  PinchGesture
} from "./gesture.js";
import { GestureTracker } from "./tracker.js";

export function initPrototype1(clay, scene) {
  return { gestureTracker: null, drawFn: () => {} }
}

export function initPrototype3(clay, scene) {
  const modeLabel = document.createElement('h3')
  modeLabel.textContent = "Edit Mode";
  modeLabel.style.position = "absolute";
  modeLabel.style.top = "0px";
  modeLabel.style.left = "50%";
  modeLabel.style.transform = "translateX(-50%)"
  modeLabel.style.padding = "16px";
  modeLabel.style.borderRadius = "8px";
  modeLabel.style.fontFamily = "sans-serif";
  modeLabel.style.color = "rgb(255, 196, 0)";
  modeLabel.style.backgroundColor = "rgba(255 196 0 / 0.2)";
  document.body.appendChild(modeLabel)

  let isViewing = false;

  // PINCHING STATE
  let clayBase = [...clay.data];
  let lastState = null;

  setUniform(scene.gl, "3fv", "uPinchPos_left", [999, 999, 999]);
  setUniform(scene.gl, "3fv", "uPinchPos_right", [999, 999, 999]);

  function toggleMode() {
    if(!isViewing) {
      isViewing = true;
      modeLabel.textContent = "Navigation Mode";
      modeLabel.style.color = "rgb(245, 156, 173)";
      modeLabel.style.backgroundColor = "rgba(245 156 173 / 0.2)";
    } else {
      isViewing = false;
      modeLabel.textContent = "Edit Mode";
      modeLabel.style.color = "rggb(255, 196, 0)";
      modeLabel.style.backgroundColor = "rgba(255 196 0 / 0.2)";
    }
  }

  const gestureTracker = new GestureTracker();
  const pinchGesture = new PinchGesture("pinch", [1], 0.25, 10);
  pinchGesture.onUpdate = ({ state }, hand, h) => {
    if(isViewing) return;

    const pinchCoords = screenToWorld(state[h]);
    setUniform(scene.gl, "3fv", `uPinchPos_${h}`, [-pinchCoords.x, -pinchCoords.y, pinchCoords.z]);
  };

  pinchGesture.onStart = ({ state, id }, hand, h) => {
    if(state[h].y < 0.1 && state[h].x > 0.4 && state[h].x < 0.6) toggleMode();
    
    if(isViewing) return;
    
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
  };

  pinchGesture.onActive = ({ state, id }, hand, h) => {
    if(isViewing) {
      state.globalRot ??= 0;
      if(lastState) {
        state.globalRot -= 10 * (state[h].x - lastState[h].x)
      }
      lastState = {...state}
      return;
    }

    const pinchCoords = screenToWorld(state[h]);
    for (let i = 0; i < clay.data.length; i += 6) {
      let factor = Math.max(1 - state[h].dist[Math.floor(i / 6)], 0);

      clay.data[i] = clayBase[i] + factor * (pinchCoords.x - state[h].handOrigin.x);
      clay.data[i + 1] = clayBase[i + 1] + factor * (pinchCoords.y - state[h].handOrigin.y);
      clay.data[i + 2] = clayBase[i + 2] + factor * (pinchCoords.z - state[h].handOrigin.z);
    }
  };

  pinchGesture.onEnd = ({ state, id }, hand, h) => {
    if(isViewing) {
      lastState = null;
      return;
    }

    clayBase = [...clay.data];
  };

  gestureTracker.add(pinchGesture);

  const drawFn = (mp) => {
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
      // } else if (h === "right" && rotatingProgress > 0) {
      //   const pos = landmarks[LM.MIDDLE_MCP];

      //   ctx.beginPath();
      //   ctx.arc(pos.x * canvas.width, pos.y * canvas.height, 100, 0, Math.PI * 2);
      //   ctx.fillStyle = `rgba(0, 0, 255, ${(0.5 * rotatingProgress) / 0.85})`;
      //   ctx.fill();

      //   ctx.beginPath();
      //   ctx.arc(
      //     pos.x * canvas.width,
      //     pos.y * canvas.height,
      //     100,
      //     -Math.PI / 2 + Math.PI * 2 * (1 - rotatingProgress / 0.85),
      //     (3 * Math.PI) / 2
      //   );
      //   ctx.strokeStyle = "rgba(0, 0, 255, 0.8)";
      //   ctx.lineWidth = 10;
      //   ctx.lineCap = "round";
      //   ctx.stroke();
      }
    }
  };

  return { gestureTracker, drawFn };
}

function screenToWorld(pt) {
  return { x: (pt.x - 0.5) * 10, y: (pt.y - 0.5) * 7, z: 0 };
}
