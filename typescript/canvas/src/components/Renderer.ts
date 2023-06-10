// Renderer.ts

import * as THREE from "three";
import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import Movement from "./Movement";

export default class Renderer {
  private renderer: WebGLRenderer;

  private scene: Scene;

  private camera: PerspectiveCamera;

  constructor(canvas: HTMLDivElement) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffc0cb); // 핑크 배경색 설정

    this.camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 150); // Update the camera position

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    canvas.appendChild(this.renderer.domElement);

    const movement = new Movement(this.scene);

    const animate = () => {
      requestAnimationFrame(animate);

      movement.updatePosition();

      // 카메라가 플레이어를 따라다니도록 카메라의 위치를 플레이어의 위치에 맞춰 업데이트
      if (movement.Player) {
        this.camera.position.set(
          movement.Player.position.x,
          movement.Player.position.y,
          movement.Player.position.z + 150 // 플레이어 뒤에서 카메라가 보도록 z 위치 조정
        );
      }

      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }

  // Add getters
  public getRenderer() {
    return this.renderer;
  }

  public getScene() {
    return this.scene;
  }

  public getCamera() {
    return this.camera;
  }

  public getDomElement() {
    return this.renderer.domElement;
  }
}
