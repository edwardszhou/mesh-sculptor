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
import { PinchGesture } from "./gestures/gesture";

const scene = new SculptScene();

const mediapipe = await Mediapipe.create(FILTERS.ONEEURO, false);
const homeUI = new Home();
homeUI.tryStart = async () => await mediapipe.init();

const appContainer = document.getElementById("app-container") as HTMLDivElement;
const stats = new Stats();
appContainer.appendChild(stats.dom);

const voxelGrid = new VoxelGrid(48, 2, true);
// voxelGrid.setSDF((x, y, z) => {
//   const sphere = Math.sqrt(x * x + y * y + z * z) - 0.8;
//   return sphere;
// });

const marchingCubes = new MarchingCubes(voxelGrid);
marchingCubes.triangulate();
const marchedMesh = new THREE.Mesh(
  marchingCubes.geometry,
  new THREE.MeshStandardMaterial({ color: 0xc8b49a, wireframe: false })
);

const handsTracker = new HandsTracker(true);

const pinchGesture = new PinchGesture("indexPinch", [FINGERS.INDEX], 0.01, 2);
const pinchMarker = new THREE.Mesh(
  new THREE.SphereGeometry(0.5),
  new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: false })
);
pinchGesture.onUpdate = (gesture, _hand, h) => {
  const state = gesture.state[h];
  pinchMarker.position.set(state.x, state.y, state.z);
};
pinchGesture.onStart = (_gesture, _hand, h) => {
  handsTracker.mesh.setColors(new THREE.Color(0xff0000), h, [LM.INDEX_TIP, LM.THUMB_TIP]);
};
pinchGesture.onEnd = (_gesture, _hand, h) => {
  handsTracker.mesh.setColors(new THREE.Color(0xffffff), h, [LM.INDEX_TIP, LM.THUMB_TIP]);
};
pinchGesture.onActive = (gesture, _hand, h) => {
  const state = gesture.state[h];
  voxelGrid.applyMinSDF((x, y, z) => {
    x -= state.x;
    y -= state.y;
    z -= state.z;
    const sphere = Math.sqrt(x * x + y * y + z * z) - 0.1;
    return sphere;
  });
};

handsTracker.addGesture(pinchGesture);

// scene.add(voxelGrid.mesh);
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
  marchingCubes.triangulate();
  stats.update();
};
