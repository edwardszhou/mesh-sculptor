import * as THREE from "three";
import Stats from "three/addons/libs/stats.module.js";
import { Mediapipe } from "./gestures/mediapipe";
import { Home } from "./ui/home";
import { VoxelGrid } from "./voxel/grid";
import { MarchingCubes } from "./mesh/marchingCubes";
import { HandsTracker } from "./gestures/tracking";
import { FILTERS } from "./utils/filter";
import { SculptScene } from "./render/scene";

const scene = new SculptScene();

const mpCanvas = document.getElementById("mediapipe-canvas") as HTMLCanvasElement;
const mpVideo = document.getElementById("mediapipe-video") as HTMLVideoElement;

const mediapipe = await Mediapipe.create(mpCanvas, mpVideo, FILTERS.ONEEURO, false);
const homeUI = new Home();
homeUI.tryStart = async () => await mediapipe.init();

const appContainer = document.getElementById("app-container") as HTMLDivElement;
const stats = new Stats();
appContainer.appendChild(stats.dom);

const clayGeometry = new THREE.SphereGeometry();
const clayMaterial = new THREE.MeshStandardMaterial({ color: 0xc8b49a });
const clayMesh = new THREE.Mesh(clayGeometry, clayMaterial);
clayMesh.visible = false;

const voxelGrid = new VoxelGrid(48, 2, true);
voxelGrid.setSDF((x, y, z) => {
  const sphere = Math.sqrt(x * x + y * y + z * z) - 0.8;
  return sphere;
});

const marchingCubes = new MarchingCubes(voxelGrid);
marchingCubes.triangulate();
const marchedMesh = new THREE.Mesh(
  marchingCubes.geometry,
  new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true })
);

const handsTracker = new HandsTracker(true);

scene.add(clayMesh);
scene.add(voxelGrid.mesh);
scene.add(marchedMesh);
scene.add(handsTracker.mesh);

scene.resize = () => {
  mediapipe.resize();
};
scene.animate = () => {
  mediapipe.predict();
  handsTracker.update(mediapipe.results, scene);
  marchingCubes.triangulate();
  stats.update();
};
