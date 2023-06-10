// ObjectLoader.ts

import * as THREE from "three";
import { OBJLoader } from "three-stdlib";
import { TextureLoader, WebGLRenderer, Scene } from "three";

export default class ObjectLoader {
  private renderer: WebGLRenderer;

  private scene: Scene;

  constructor(renderer: WebGLRenderer, scene: Scene) {
    this.renderer = renderer;
    this.scene = scene;
    this.loadObject();
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
