import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Stats from "three/addons/libs/stats.module.js";
import { Mediapipe } from "./gestures/mediapipe";
import { Home } from "./ui/home";
import { VoxelGrid } from "./voxel/grid";
import { MarchingCubes } from "./mesh/marchingCubes";
import { HandsTracker } from "./gestures/tracking";

const FOV = 75;
const NEAR = 0.1;
const FAR = 1000;

const mpCanvas = document.getElementById("mediapipe-canvas") as HTMLCanvasElement;
const mpVideo = document.getElementById("mediapipe-video") as HTMLVideoElement;

const mediapipe = await Mediapipe.create(mpCanvas, mpVideo, false);
const homeUI = new Home();
homeUI.tryStart = async () => await mediapipe.init();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(FOV, window.innerWidth / window.innerHeight, NEAR, FAR);
camera.position.set(0, 2, 5);

const appContainer = document.getElementById("app-container") as HTMLDivElement;
const canvas = document.getElementById("app") as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.setAnimationLoop(animate);

const controls = new OrbitControls(camera, renderer.domElement);
const stats = new Stats();
appContainer.appendChild(stats.dom);

scene.add(new THREE.GridHelper(100, 20));

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1);
scene.add(light);
scene.add(new THREE.AmbientLight(0x888888));

const clayGeometry = new THREE.SphereGeometry();
const clayMaterial = new THREE.MeshStandardMaterial({ color: 0xc8b49a });
const clayMesh = new THREE.Mesh(clayGeometry, clayMaterial);
scene.add(clayMesh);
clayMesh.visible = false;

const voxelGrid = new VoxelGrid(48, 16, true);
scene.add(voxelGrid.mesh);

const marchingCubes = new MarchingCubes(voxelGrid);
marchingCubes.triangulate();
const marchedMesh = new THREE.Mesh(
  marchingCubes.geometry,
  new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true })
);

scene.add(marchedMesh);

const handsTracker = new HandsTracker();

function animate() {
  controls.update();
  mediapipe.predict();
  handsTracker.update(mediapipe.results);

  if (resizeRenderer(renderer)) {
    const canvas = renderer.domElement;
    mediapipe.resize();
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  voxelGrid.setSDF((x, y, z) => {
    const x1 = x - 2.5;
    const x2 = x + 2.5;
    const y1 = y + Math.sin(Date.now() / 500);
    const y2 = y + Math.cos(Date.now() / 500);
    const sphere1 = Math.sqrt(x1 * x1 + y1 * y1 + z * z) - 4;
    const sphere2 = Math.sqrt(x2 * x2 + y2 * y2 + z * z) - 4;
    return Math.min(sphere1, sphere2);
  });
  marchingCubes.isosurface = Math.sin(Date.now() / 1000);

  // marchingCubes.triangulate();
  renderer.render(scene, camera);
  stats.update();
}

function resizeRenderer(renderer: THREE.WebGLRenderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

animate();
