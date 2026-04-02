import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const FOV = 75;
const NEAR = 0.1;
const FAR = 1000;
const DEFAULT_CAMERA_POS = new THREE.Vector3(0, 1, 5);
const Z_PLANE = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

class SculptScene {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private raycaster: THREE.Raycaster;
  private orbitControls: OrbitControls;

  animate: () => void;
  resize: () => void;

  constructor(cameraPos?: THREE.Vector3) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      FOV,
      window.innerWidth / window.innerHeight,
      NEAR,
      FAR
    );
    this.camera.position.copy(cameraPos ?? DEFAULT_CAMERA_POS);

    const canvas = document.getElementById("app") as HTMLCanvasElement;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
    this.renderer.setAnimationLoop(this.animateLoop.bind(this));

    this.raycaster = new THREE.Raycaster();
    this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement);

    this.animate = () => {};
    this.resize = () => {};

    this.setupScene();
  }

  add(obj: THREE.Object3D) {
    this.scene.add(obj);
  }

  screenToWorld(x: number, y: number) {
    const ndc = new THREE.Vector2(x * 2 - 1, 1 - y * 2);
    const res = new THREE.Vector3();

    this.raycaster.setFromCamera(ndc, this.camera);
    this.raycaster.ray.intersectPlane(Z_PLANE, res);
    return res;
  }

  private setupScene() {
    this.add(new THREE.GridHelper(10, 10));

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    this.add(light);
    this.add(new THREE.AmbientLight(0x888888));
  }

  private animateLoop() {
    this.orbitControls.update();
    this.handleResize();
    this.animate();
    this.renderer.render(this.scene, this.camera);
  }

  private handleResize() {
    const canvas = this.renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      this.renderer.setSize(width, height, false);
      this.resize();
      this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
      this.camera.updateProjectionMatrix();
    }
  }
}

export { SculptScene };
