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

  private minY: number = 0;

  public updatePosition(deltaTime: number) {
    if (!this.player) return;

    const direction = new THREE.Vector3();
    const right = new THREE.Vector3();
    this.camera.getWorldDirection(direction);
    right.crossVectors(direction, this.camera.up).normalize();

    if (this.keyStates.KeyW) {
      direction.multiplyScalar(this.moveSpeed * deltaTime); // deltaTime should be the time since the last frame
      this.player.position.add(direction);
    }
    if (this.keyStates.KeyS) {
      direction.multiplyScalar(-this.moveSpeed * deltaTime);
      this.player.position.add(direction);
    }
    if (this.keyStates.KeyA) {
      right.multiplyScalar(-this.moveSpeed * deltaTime);
      this.player.position.add(right);
    }
    if (this.keyStates.KeyD) {
      right.multiplyScalar(this.moveSpeed * deltaTime);
      this.player.position.add(right);
    }

    this.player.position.y = Math.max(this.minY, this.player.position.y);

    // Keep the camera at a fixed offset above the player
    this.camera.position
      .copy(this.player.position)
      .add(new THREE.Vector3(0, 1.6, 0)); // Example: 1.6 units above the player
  }
}

/**
 * 분석 하고있음.
 * - 5wya
 * 청중이나 심사관이랑 똑같이 생각함.
 * 해당 플랫폼이 메리트가 없다.
 * 1. 경험적으로 설득이 불가? 수치적으로 납득이 불가함. = 신뢰도 부족 < 납득을 시키다보니 문제가 발생함.
 * 2. 저게 될까? 2가지가 나옴. 수익적인 측면, 사용자모집적인 측면.
 * - 비즈니스 모델이 명확하지 못함.
 * - 파이넨션 모델링 향후 5년간 자료조사 부족함.
 * - 더벤쳐스 ir자료 투척. 예정.
 */
