import * as THREE from "three";
import Stats from "three/addons/libs/stats.module.js";
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
import { logPerformance } from "./utils/utils";

const DEBUG_MODE_ENABLED = true;
const scene = new SculptScene(DEBUG_MODE_ENABLED);

const mediapipe = await Mediapipe.create(FILTERS.ONEEURO, DEBUG_MODE_ENABLED, false);
const homeUI = new Home();
homeUI.tryStart = async () => await mediapipe.init();

const appContainer = document.getElementById("app-container") as HTMLDivElement;
const stats = new Stats();
if (DEBUG_MODE_ENABLED) appContainer.appendChild(stats.dom);

const voxelGrid = new VoxelGrid(48, 4, 8, false);
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
const pinchMarker = new THREE.Mesh(
  new THREE.SphereGeometry(0.5),
  new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: false })
);
pinchGesture.onUpdate = (gesture, hand, h) => {
  if (!gesture.confidence[h]) {
    const indexPos = hand.sceneLandmarks[LM.INDEX_TIP];
    // voxelGrid.applyMaxSDF((x, y, z) => {
    //   x -= indexPos.x;
    //   y -= indexPos.y;
    //   z -= indexPos.z;
    //   const sphere = -Math.sqrt(x * x + y * y + z * z) + 0.2;
    //   return sphere;
    // });
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
  // voxelGrid.applyMinSDF((x, y, z) => {
  //   x -= indexPos.x;
  //   y -= indexPos.y;
  //   z -= indexPos.z;
  //   const sphere = Math.sqrt(x * x + y * y + z * z) - 0.2;
  //   return sphere;
  // });
  voxelGrid.stuff(indexPos.x, indexPos.y, indexPos.z, 0.2, 1);
};

const detectLeft = (hand: HandState) => {
  console.log(hand.landmarks[LM.WRIST].x);
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
// scene.add(pinchMarker);

scene.resize = () => {
  mediapipe.resize();
};
scene.animate = () => {
  mediapipe.predict();
  handsTracker.update(mediapipe.results, scene);

  logPerformance(() => {
    marchingCubes.triangulateDirty();
  }, "Time for global triangulation: ");

  stats.update();
};
