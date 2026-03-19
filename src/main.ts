import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Mediapipe } from "./gestures/mediapipe";
import { Home } from "./ui/home";

const FOV = 75;
const NEAR = 0.1;
const FAR = 1000;

const mpCanvas = document.getElementById("mediapipe-canvas") as HTMLCanvasElement;
const mpVideo = document.getElementById("mediapipe-video") as HTMLVideoElement;

const mediapipe = await Mediapipe.create(mpCanvas, mpVideo);
const homeUI = new Home();
homeUI.tryStart = async () => await mediapipe.init();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(FOV, window.innerWidth / window.innerHeight, NEAR, FAR);
camera.position.set(0, 2, 5);

const canvas = document.getElementById("app") || undefined;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.setAnimationLoop(animate);

const controls = new OrbitControls(camera, renderer.domElement);

scene.add(new THREE.GridHelper(100, 20));

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1);
scene.add(light);
scene.add(new THREE.AmbientLight(0x888888));

const geometry = new THREE.SphereGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0xc8b49a });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

function animate() {
  controls.update();
  mediapipe.predict();

  if (resizeRenderer(renderer)) {
    const canvas = renderer.domElement;
    mediapipe.resize();
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  renderer.render(scene, camera);
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
