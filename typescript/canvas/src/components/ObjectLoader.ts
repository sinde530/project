// ObjectLoader.ts

import * as THREE from "three";
import { GLTFLoader, OBJLoader } from "three-stdlib";
import { TextureLoader, WebGLRenderer, Scene } from "three";

export default class ObjectLoader {
  private renderer: WebGLRenderer;

  private scene: Scene;

  public player: THREE.Object3D | null = null;

  constructor(renderer: WebGLRenderer, scene: Scene) {
    this.renderer = renderer;
    this.scene = scene;
    this.loadPlayerModel();
    this.loadObject();
  }

  private loadPlayerModel() {
    const loader = new GLTFLoader();

    loader.load("src/assets/Soldier.glb", (gltf) => {
      gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const mesh = child;
          if (mesh.material instanceof THREE.MeshStandardMaterial) {
            // mesh.material.color.set(0xff0000); // Red color
          }
        }
      });

      this.player = gltf.scene;

      this.player.position.set(-120, -50, 30);
      this.player.scale.set(70, 70, 70);
      this.player.rotateY(16);

      console.log(this.player.position);

      this.scene.add(this.player);
    });

    // Adding ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    // Adding point light
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(25, 50, 25);
    this.scene.add(pointLight);
  }

  private loadObject() {
    // load .obj file
    const loader = new OBJLoader();
    const textureLoader = new TextureLoader();

    // load a texture and set it as material map
    textureLoader.load("src/assets/bgtest.jpeg", (texture: any) => {
      // Use the renderer's max anisotropy value to improve the quality of the texture
      texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();

      loader.load("src/assets/apple.obj", (object: any) => {
        // Apply material
        const material = new THREE.MeshBasicMaterial({ map: texture });
        object.traverse((child: { material: THREE.MeshBasicMaterial }) => {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });

        // Adjust object position and scale
        object.position.set(0, 0, -2);
        object.scale.set(0.7, 0.7, 0.7); // adjust scale as needed

        this.scene.add(object);
      });
    });
  }
}
