import * as THREE from "three";
import { Mediapipe } from "./gestures/mediapipe";
import { Home } from "./ui/home";
import { VoxelGrid } from "./voxel/grid";
import { MarchingCubes } from "./voxel/marchingCubes";
import { HandsTracker } from "./gestures/tracking";
import { FILTERS } from "./utils/filter";
import { SculptScene } from "./render/scene";
import { FINGERS, handLmAverage, LM, lmDistance, lmToV3 } from "./gestures/landmarks";
import { HandGesture, HandGesturePair, PinchGesture } from "./gestures/gesture";
import { Brush, BrushSet } from "./voxel/brush";
import { average, cross, distance, dot, mag, normalize, remap, sub } from "./utils/math";
import type { HandState } from "./gestures/handState";

const appConfig = {
  SHOW_WORLD_GRID: false,
  SHOW_VOXEL_GRID: false,
  SHOW_SCENE_STATS: true,
  SHOW_MEDIAPIPE_CONNECTIONS: true,
  SHOW_MEDIAPIPE_STATS: true,
  SHOW_HAND_MESH: true,
  MEDIAPIPE_FILTER: FILTERS.ONEEURO,
  MEDIAPIPE_DUMMY: false,
  MEDIAPIPE_WORKER: false
};

const scene = new SculptScene(appConfig.SHOW_WORLD_GRID, appConfig.SHOW_SCENE_STATS);

const mediapipe = await Mediapipe.create(
  appConfig.MEDIAPIPE_FILTER,
  appConfig.SHOW_MEDIAPIPE_CONNECTIONS,
  appConfig.SHOW_MEDIAPIPE_STATS,
  appConfig.MEDIAPIPE_DUMMY
);
const homeUI = new Home();
homeUI.tryStart = async () => await mediapipe.init();

const voxelGrid = new VoxelGrid(64, 6, 8, appConfig.SHOW_VOXEL_GRID);
voxelGrid.setSDF((x, y, z) => {
  const sphere = Math.sqrt(x * x + y * y + z * z) - 0.8;
  return sphere * 3;
});

const marchingCubes = new MarchingCubes(voxelGrid);
marchingCubes.triangulateDirty();
const marchedMesh = new THREE.Mesh(
  marchingCubes.geometry,
  new THREE.MeshStandardMaterial({ color: 0xc8b49a, wireframe: false })
);

const handsTracker = new HandsTracker(true);

const pinchGesture = new PinchGesture("indexPinch", FINGERS.INDEX, 0.25, 5);
pinchGesture.onStart = (hand, state) => {
  const indexPos = hand.sceneLandmarks[LM.INDEX_TIP];

  const vRadius = Math.ceil(BrushSet.pinch.radius / voxelGrid.voxelWorldSize);
  const [vx, vy, vz] = voxelGrid.wToV(indexPos.x, indexPos.y, indexPos.z);
  const startMass = voxelGrid.calculateMass(vx, vy, vz, vRadius);
  state.lastPos = { ...indexPos };
  state.remainingMass = startMass;
  state.totalMass = startMass;
};
pinchGesture.onActive = (hand, state) => {
  const indexPos = hand.sceneLandmarks[LM.INDEX_TIP];

  if (!state.totalMass || !state.remainingMass) return;

  const delta = lmDistance(indexPos, state.lastPos);
  state.lastPos = { ...indexPos };
  const massFactor = remap(delta, 0, 0.02, 0, 0.2, false);
  state.remainingMass *= Math.max(0, 1 - 0.2 * massFactor);
  if (state.remainingMass < 0.1) state.remainingMass = 0;

  BrushSet.pinch.state.factor = state.remainingMass / state.totalMass;
  voxelGrid.applyBrush(BrushSet.pinch, indexPos.x, indexPos.y, indexPos.z);
};

const clawGesture = new HandGesture(
  "claw",
  (hand) => {
    const angles = hand.metrics.curlAngle;
    const maxCurlAngle = Math.max(...angles);
    const minCurlAngle = Math.min(...angles);
    const avgCurlAngle = angles.reduce((acc, curr) => acc + curr, 0) / angles.length;
    return avgCurlAngle > 100 && avgCurlAngle < 140 && maxCurlAngle - minCurlAngle < 30;
  },
  10
);
clawGesture.onStart = (hand, state) => {
  const mid = handLmAverage(hand.sceneLandmarks, [LM.PINKY_TIP, LM.THUMB_TIP, LM.MIDDLE_MCP]);
  state.component = voxelGrid.findComponent(mid.x, mid.y, mid.z);
  state.startPos = mid;
};
clawGesture.onActive = (hand, state) => {
  const mid = handLmAverage(hand.sceneLandmarks, [LM.PINKY_TIP, LM.THUMB_TIP, LM.MIDDLE_MCP]);
  const translate = sub(lmToV3(mid), lmToV3(state.startPos));
  voxelGrid.transformComponent(state.component, translate);
  state.component = voxelGrid.findComponent(mid.x, mid.y, mid.z);
  state.startPos = mid;
};

const swipeGesture = new HandGesture(
  "swipe",
  (hand, state) => {
    const angles = hand.metrics.curlAngle;
    const minCurlAngle = Math.min(...angles);
    const maxCurlAngle = Math.max(...angles);
    const avgCurlAngle = angles.reduce((acc, curr) => acc + curr, 0) / angles.length;
    if (avgCurlAngle < 100 || maxCurlAngle - minCurlAngle > 30) return false;

    const middlePos = hand.sceneLandmarks[LM.MIDDLE_PIP];
    if (state.lastPos) {
      const delta = lmDistance(middlePos, state.lastPos);
      state.speed = (state.speed ?? 0) * 0.5 + delta * 0.5;
    }
    state.lastPos = { ...middlePos };
    return state.speed > 0.005 * fps;
  },
  15
);
swipeGesture.onActive = (hand) => {
  const middlePos = hand.sceneLandmarks[LM.MIDDLE_PIP];
  voxelGrid.applyBrush(BrushSet.smooth, middlePos.x, middlePos.y, middlePos.z, false);
};

const detectFlat = (hand: HandState) => {
  if (!hand.present) return false;

  const angles = hand.metrics.curlAngle;
  const minCurlAngle = Math.min(...angles);
  const avgCurlAngle = angles.reduce((acc, curr) => acc + curr, 0) / angles.length;
  const dotPlanes = dot(hand.metrics.palmNormal, hand.metrics.fingerNormal);
  return (
    minCurlAngle > 110 && avgCurlAngle > 120 && avgCurlAngle - minCurlAngle < 25 && dotPlanes > 0.66
  );
};

const squishGesture = new HandGesturePair("squish", (hands, _state) => {
  // both hands are right shape
  if (!detectFlat(hands.left) || !detectFlat(hands.right)) return false;

  // hands are facing each other
  const leftNormal = hands.left.metrics.palmNormal;
  const rightNormal = hands.right.metrics.palmNormal;
  return dot(leftNormal, rightNormal) > 0.5;
});
squishGesture.onStart = (_hands, _state) => {
  BrushSet.squish.state.massStore = 0;
};
squishGesture.onActive = (hands, _state) => {
  const leftPos = lmToV3(hands.left.sceneLandmarks[LM.MIDDLE_MCP]);
  const rightPos = lmToV3(hands.right.sceneLandmarks[LM.MIDDLE_MCP]);
  const midPos = average(leftPos, rightPos);
  const crossAxis = sub(leftPos, rightPos);

  BrushSet.squish.radius = mag(crossAxis);
  BrushSet.squish.state.left = leftPos;
  BrushSet.squish.state.mid = midPos;
  BrushSet.squish.state.right = rightPos;
  BrushSet.squish.state.crossAxis = normalize(crossAxis);

  voxelGrid.applyBrush(BrushSet.squish, ...midPos, false);
};

const rollGesture = new HandGesturePair(
  "roll",
  (hands, state) => {
    // both hands are right shape
    if (!detectFlat(hands.left) || !detectFlat(hands.right)) return false;

    // hands are facing each other
    const leftNormal = hands.left.metrics.palmNormal;
    const rightNormal = hands.right.metrics.palmNormal;
    if (dot(leftNormal, rightNormal) < 0.5) return false;

    const leftMiddlePos = lmToV3(hands.left.sceneLandmarks[LM.MIDDLE_PIP]);
    const rightMiddlePos = lmToV3(hands.right.sceneLandmarks[LM.MIDDLE_PIP]);
    if (!state.leftLastPos || !state.rightLastPos) {
      state.leftLastPos = leftMiddlePos;
      state.rightLastPos = rightMiddlePos;
      return false;
    }
    const leftVel = sub(leftMiddlePos, state.leftLastPos);
    const rightVel = sub(rightMiddlePos, state.rightLastPos);

    if (mag(leftVel) < 0.003 * fps || mag(rightVel) < 0.003 * fps) return false;

    state.leftLastPos = leftMiddlePos;
    state.rightLastPos = rightMiddlePos;

    // hands are moving opposite each other
    if (dot(leftVel, rightVel) > 0) return false;

    // hands are not moving along palm normal
    if (Math.abs(dot(leftNormal, leftVel)) > 0.3 || Math.abs(dot(rightNormal, rightVel)) > 0.3)
      return false;

    state.rollAxis = normalize(cross(leftVel, leftNormal));
    return true;
  },
  8
);
rollGesture.onStart = (_hands, _state) => {
  BrushSet.roll.state.massStore = 0;
  BrushSet.roll.state.closestDistance = null;
};
rollGesture.onActive = (hands, state) => {
  const leftPos = lmToV3(hands.left.sceneLandmarks[LM.MIDDLE_MCP]);
  const rightPos = lmToV3(hands.right.sceneLandmarks[LM.MIDDLE_MCP]);
  const midPos = average(leftPos, rightPos);
  const crossAxis = sub(leftPos, rightPos);

  BrushSet.roll.radius = Math.min(
    mag(crossAxis) * 2,
    BrushSet.roll.state.closestDistance ?? Infinity
  );
  BrushSet.roll.state.mid = midPos;
  BrushSet.roll.state.rollAxis = state.rollAxis;

  voxelGrid.applyBrush(BrushSet.roll, ...midPos, false);
};

handsTracker.addGesture(pinchGesture, 2);
handsTracker.addGesture(clawGesture, 1);
handsTracker.addGesture(swipeGesture, 3);
handsTracker.addGesture(squishGesture, 1);
handsTracker.addGesture(rollGesture, 2);

scene.add(voxelGrid.mesh);
scene.add(marchedMesh);
scene.add(handsTracker.mesh.bones);
scene.add(handsTracker.mesh.points);

scene.resize = () => {
  mediapipe.resize();
};

let fps = 0;
let lastTime = Date.now();
scene.animate = async () => {
  if (appConfig.MEDIAPIPE_WORKER) {
    await scene.waitForGPU();
    mediapipe.workerPredict();
  } else {
    mediapipe.predict();
  }

  voxelGrid.updateMesh();
  handsTracker.update(mediapipe.results, scene);
  console.log(handsTracker.left.gesturePair?.id ?? handsTracker.left.gesture?.id);
  console.log(handsTracker.right.gesturePair?.id ?? handsTracker.right.gesture?.id);
  marchingCubes.triangulateDirty();

  const now = Date.now();
  const dt = now - lastTime;
  fps = 0.5 * fps + (0.5 * 1000) / dt;
  lastTime = now;
};
