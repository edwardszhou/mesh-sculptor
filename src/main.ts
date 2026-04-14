import * as THREE from "three";
import { Mediapipe } from "./gestures/mediapipe";
import { Home } from "./ui/home";
import { VoxelGrid } from "./voxel/grid";
import { MarchingCubes } from "./mesh/marchingCubes";
import { HandsTracker } from "./gestures/tracking";
import { FILTERS } from "./utils/filter";
import { SculptScene } from "./render/scene";
import { FINGERS, LM } from "./gestures/landmarks";
import { MotionGesture, PinchGesture } from "./gestures/gesture";
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

const voxelGrid = new VoxelGrid(64, 4, 8, appConfig.SHOW_VOXEL_GRID);
voxelGrid.setSDF((x, y, z) => {
  const sphere = Math.sqrt(x * x + y * y + z * z) - 0.8;
  return sphere;
});

const marchingCubes = new MarchingCubes(voxelGrid);
marchingCubes.triangulateDirty();
const marchedMesh = new THREE.Mesh(
  marchingCubes.geometry,
  new THREE.MeshStandardMaterial({ color: 0xc8b49a, wireframe: false })
);

const handsTracker = new HandsTracker(true);

const pinchGesture = new PinchGesture("indexPinch", [FINGERS.INDEX], 0.02, 5);
pinchGesture.onUpdate = (gesture, hand, h) => {
  if (!gesture.confidence[h]) {
    const indexPos = hand.sceneLandmarks[LM.INDEX_TIP];
    voxelGrid.carve(indexPos.x, indexPos.y, indexPos.z, 0.2, 1);
  }
};
pinchGesture.onStart = (_gesture, _hand, h) => {
  handsTracker.mesh.setColors(new THREE.Color(0xff0000), h, [LM.INDEX_TIP, LM.THUMB_TIP]);
};
pinchGesture.onEnd = (_gesture, _hand, h) => {
  handsTracker.mesh.setColors(new THREE.Color(0xffffff), h, [LM.INDEX_TIP, LM.THUMB_TIP]);
};
pinchGesture.onActive = (_gesture, hand, _h) => {
  const indexPos = hand.sceneLandmarks[LM.INDEX_TIP];
  voxelGrid.stuff(indexPos.x, indexPos.y, indexPos.z, 0.2, 1);
};

const detectLeft = (hand: HandState) => {
  return hand.landmarks[LM.WRIST].x < 0.4;
};
const detectRight = (hand: HandState) => {
  return hand.landmarks[LM.WRIST].x > 0.8;
};
const swipeGesture = new MotionGesture("swipe", detectLeft, detectRight, 500);
swipeGesture.onTriggerAB = (_gesture, _hand, _h) => {
  voxelGrid.setGrid(1);
};

handsTracker.addGesture(pinchGesture);
handsTracker.addGesture(swipeGesture);

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

  handsTracker.update(mediapipe.results, scene);
  // logPerformance(() => {
  marchingCubes.triangulateDirty();
  // }, "Time for global triangulation: ");
};
