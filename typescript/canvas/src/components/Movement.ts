// Movement.ts

import * as THREE from "three";
import { Scene, Vector3, Mesh } from "three";

export default class Movement {
  private scene: Scene;

  private player: Mesh | undefined;

  // Create player Method getter
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

  constructor(scene: Scene) {
    this.scene = scene;
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
    cube.position.set(0, 0, -2); // character object init positions
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
    if (this.keyStates.KeyW) {
      const forwardVector = new Vector3(0, 0, -1);
      const rotationMatrix = new THREE.Matrix4();
      rotationMatrix.extractRotation(this.player.matrix);
      const direction = forwardVector.applyMatrix4(rotationMatrix);
      direction.multiplyScalar(this.moveSpeed); // 스칼라 곱 변경해야함.
      position.add(direction);
    }
    if (this.keyStates.KeyA) {
      const leftVector = new Vector3(1, 0, 0);
      const rotationMatrix = new THREE.Matrix4();
      rotationMatrix.extractRotation(this.player.matrix);
      const direction = leftVector.applyMatrix4(rotationMatrix);
      direction.multiplyScalar(-this.moveSpeed);
      position.add(direction);
    }
    if (this.keyStates.KeyS) {
      const backwardVector = new Vector3(0, 0, -1);
      const rotationMatrix = new THREE.Matrix4();
      rotationMatrix.extractRotation(this.player.matrix);
      const direction = backwardVector.applyMatrix4(rotationMatrix);
      direction.multiplyScalar(-this.moveSpeed);
      position.add(direction);
    }
    if (this.keyStates.KeyD) {
      const rightVector = new Vector3(1, 0, 0);
      const rotationMatrix = new THREE.Matrix4();
      rotationMatrix.extractRotation(this.player.matrix);
      const direction = rightVector.applyMatrix4(rotationMatrix);
      direction.multiplyScalar(this.moveSpeed);
      position.add(direction);
    }
  }
}
