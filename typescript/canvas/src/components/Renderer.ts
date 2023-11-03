import * as THREE from "three";
import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import Movement from "./Movement";

export default class Renderer {
  private renderer: WebGLRenderer;

  private scene: Scene;

  private camera: PerspectiveCamera;

  private lastTime: number = 0;

  constructor(canvas: HTMLDivElement) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffc0cb); // 핑크 배경색 설정
    this.lastTime = performance.now();

    this.camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 150);

    this.createGroundPlane();

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    canvas.appendChild(this.renderer.domElement);

    const movement = new Movement(this.scene, this.camera);

    const animate = () => {
      requestAnimationFrame(animate);

      const time = performance.now();
      const deltaTime = (time - this.lastTime) / 1000;

      movement.updatePosition(deltaTime);

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

  private createGroundPlane() {
    // PlaneGeometry를 사용하여 바닥 평면 생성
    const geometry = new THREE.PlaneGeometry(1000, 1000);

    // MeshBasicMaterial을 사용하여 평면에 적용할 재질 생성
    const material = new THREE.MeshBasicMaterial({
      color: 0x708090,
      side: THREE.DoubleSide,
    });

    // geometry와 material을 사용하여 평면 객체(mesh) 생성
    const plane = new THREE.Mesh(geometry, material);

    // 평면을 y축으로 -90도 회전 (x-z 평면에 위치)
    plane.rotation.x = -Math.PI / 2;

    // 평면의 위치를 조정
    plane.position.y = -50;

    // 장면에 평면 추가
    this.scene.add(plane);
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
