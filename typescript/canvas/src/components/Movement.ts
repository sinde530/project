import * as THREE from "three";
import { Mesh, Scene } from "three";

export default class Movement {
  private scene: Scene;

  private player: Mesh | undefined;

  private camera: THREE.PerspectiveCamera;

  public get Player() {
    return this.player;
  }

  private moveSpeed: number = 4;

  private keyStates: { [key: string]: boolean } = {
    KeyW: false,
    KeyA: false,
    KeyS: false,
    KeyD: false,
  };

  constructor(scene: Scene, camera: THREE.PerspectiveCamera) {
    this.scene = scene;
    this.camera = camera;
    this.createPlayer();
    this.addEventListeners();
  }

  private createPlayer() {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      // visible: false,
      visible: true,
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, -2);
    this.scene.add(cube);
    this.player = cube;
  }

  private addEventListeners() {
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    console.log(`Key down: ${event.code}`);
    this.keyStates[event.code] = true;
  };

  private handleKeyUp = (event: KeyboardEvent) => {
    console.log(`Key up: ${event.code}`);
    this.keyStates[event.code] = false;
  };

  public updatePosition() {
    if (!this.player) return;

    const { position } = this.player;

    const direction = new THREE.Vector3();
    this.camera.getWorldDirection(direction);

    if (this.keyStates.KeyW) {
      direction.multiplyScalar(this.moveSpeed);
      position.add(direction);
    }

    if (this.keyStates.KeyA) {
      direction.cross(this.camera.up).normalize();
      direction.multiplyScalar(-this.moveSpeed);
      position.add(direction);
    }

    if (this.keyStates.KeyS) {
      direction.multiplyScalar(-this.moveSpeed);
      position.add(direction);
    }

    if (this.keyStates.KeyD) {
      direction.cross(this.camera.up).normalize();
      direction.multiplyScalar(this.moveSpeed);
      position.add(direction);
    }
  }
}
