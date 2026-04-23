import * as THREE from "three";
import { Mediapipe } from "./gestures/mediapipe";
import { Home } from "./ui/home";
import { VoxelGrid } from "./voxel/grid";
import { MarchingCubes } from "./mesh/marchingCubes";
import { HandsTracker } from "./gestures/tracking";
import { FILTERS } from "./utils/filter";
import { SculptScene } from "./render/scene";
import { FINGERS, LM, lmDistance, lmMag, lmSub } from "./gestures/landmarks";
import { HandGesture, PinchGesture } from "./gestures/gesture";
import { BrushSet } from "./voxel/brush";
import { clamp, dot, remap } from "./utils/math";

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

const voxelGrid = new VoxelGrid(96, 6, 8, appConfig.SHOW_VOXEL_GRID);
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
const flatGesture = new HandGesture("flat", (hand) => {
  const angles = hand.metrics.curlAngle;
  const minCurlAngle = Math.min(...angles);
  const avgCurlAngle = angles.reduce((acc, curr) => acc + curr, 0) / angles.length;
  const dotPlanes = dot(hand.metrics.palmNormal, hand.metrics.fingerNormal);
  return (
    minCurlAngle > 130 && avgCurlAngle > 140 && avgCurlAngle - minCurlAngle < 15 && dotPlanes > 0.75
  );
});

const clawGesture = new HandGesture(
  "claw",
  (hand) => {
    const angles = hand.metrics.curlAngle;
    const maxCurlAngle = Math.max(...angles);
    const minCurlAngle = Math.min(...angles);
    const avgCurlAngle = angles.reduce((acc, curr) => acc + curr, 0) / angles.length;
    return avgCurlAngle > 100 && avgCurlAngle < 140 && maxCurlAngle - minCurlAngle < 30;
  },
  8
);

pinchGesture.onUpdate = (_hand) => {
  // if (!gesture.confidence[h]) {
  //   const indexPos = hand.sceneLandmarks[LM.INDEX_TIP];
  //   const thumbPos = hand.sceneLandmarks[LM.THUMB_TIP];
  // voxelGrid.applyBrush(BrushSet.noop, indexPos.x, indexPos.y, indexPos.z);
  // voxelGrid.applyBrush(BrushSet.indent, indexPos.x, indexPos.y, indexPos.z);
  // voxelGrid.applyBrush(BrushSet.indent, thumbPos.x, thumbPos.y, thumbPos.z);
  // voxelGrid.applyBrush(BrushSet.smooth, indexPos.x, indexPos.y, indexPos.z);
  // }
};
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
  const massFactor = remap(delta, 0.005, 0.05, 0, 1);
  state.remainingMass *= 1 - 0.15 * massFactor;
  if (state.remainingMass < 0.1) state.remainingMass = 0;

  BrushSet.pinch.state.factor = state.remainingMass / state.totalMass;
  voxelGrid.applyBrush(BrushSet.pinch, indexPos.x, indexPos.y, indexPos.z);
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
      state.speed = (state.speed ?? 0) * 0.4 + delta * 0.6;
    }
    state.lastPos = { ...middlePos };
    return state.speed > 0.1;
  },
  15
);

swipeGesture.onActive = (hand) => {
  const middlePos = hand.sceneLandmarks[LM.MIDDLE_PIP];
  voxelGrid.applyBrush(BrushSet.smooth, middlePos.x, middlePos.y, middlePos.z);
};

handsTracker.addGesture(pinchGesture, 2);
handsTracker.addGesture(clawGesture, 1);
handsTracker.addGesture(flatGesture, 2);
handsTracker.addGesture(swipeGesture, 3);

scene.add(voxelGrid.mesh);
scene.add(marchedMesh);
scene.add(handsTracker.mesh.bones);
scene.add(handsTracker.mesh.points);

scene.resize = () => {
  mediapipe.resize();
};

scene.animate = async () => {
  if (appConfig.MEDIAPIPE_WORKER) {
    await scene.waitForGPU();
    mediapipe.workerPredict();
  } else {
    mediapipe.predict();
  }

  voxelGrid.updateMesh();
  handsTracker.update(mediapipe.results, scene);
  console.log(handsTracker.right.gesture?.id);
  console.log(handsTracker.left.gesture?.id);
  marchingCubes.triangulateDirty();
};
