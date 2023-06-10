// App.tsx

/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import { useEffect, useRef } from "react";
import "./App.css";
import * as THREE from "three";
import { OBJLoader } from "three-stdlib";
import { TextureLoader } from "three";
import Movement from "./components/Movement";

export default function App() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Three.js 코드 작성
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffc0cb); // 핑크 배경색 설정

    const camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // camera.position.set(0, 0, 2); // Update the camera position
    camera.position.set(0, 0, 150); // Update the camera position

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    const movement = new Movement(scene);

    function animate() {
      requestAnimationFrame(animate);

      movement.updatePosition();

      // 카메라가 플레이어를 따라다니도록 카메라의 위치를 플레이어의 위치에 맞춰 업데이트
      if (movement.Player) {
        camera.position.set(
          movement.Player.position.x,
          movement.Player.position.y,
          movement.Player.position.z + 150 // 플레이어 뒤에서 카메라가 보도록 z 위치 조정
        );
      }

      renderer.render(scene, camera);
    }

    animate();

    // load .obj file
    const loader = new OBJLoader();
    const textureLoader = new TextureLoader();

    // load a texture and set it as material map
    textureLoader.load("src/assets/bgtest.jpeg", function (texture) {
      // Use the renderer's max anisotropy value to improve the quality of the texture
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

      loader.load("src/assets/apple.obj", function (object) {
        // Apply material
        const material = new THREE.MeshBasicMaterial({ map: texture });
        object.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });

        // Adjust object position and scale
        object.position.set(0, 0, -2);
        object.scale.set(0.7, 0.7, 0.7); // adjust scale as needed

        scene.add(object);
      });
    });

    // 마우스 커서 변경
    canvasRef.current.style.cursor = "pointer";

    let previousMouseX = 0;
    let previousMouseY = 0;
    let isLeftMouseButtonDown = false;

    function handleMouseMove(event: MouseEvent) {
      const { clientX, clientY } = event;

      // Calculate the mouse movement
      const deltaX = clientX - previousMouseX;
      const deltaY = clientY - previousMouseY;

      if (isLeftMouseButtonDown) {
        // Update camera rotation based on mouse movement
        const rotationSpeed = 0.001;
        camera.rotation.y -= deltaX * rotationSpeed;
        camera.rotation.x -= deltaY * rotationSpeed;

        // Limit vertical rotation
        const maxVerticalRotation = Math.PI / 2;
        camera.rotation.x = Math.max(
          -maxVerticalRotation,
          Math.min(maxVerticalRotation, camera.rotation.x)
        );
      }

      previousMouseX = clientX;
      previousMouseY = clientY;
    }

    function handleMouseDown(event: MouseEvent) {
      if (event.button === 0) {
        isLeftMouseButtonDown = true;
      }
    }

    function handleMouseUp(event: MouseEvent) {
      if (event.button === 0) {
        isLeftMouseButtonDown = false;
      }
    }

    // function animate() {
    //   requestAnimationFrame(animate);

    //   movement.updatePosition();

    //   renderer.render(scene, camera);
    // }

    // animate();

    // Listen to mousemove, mousedown, and mouseup events
    canvasRef.current.addEventListener("mousemove", handleMouseMove);
    canvasRef.current.addEventListener("mousedown", handleMouseDown);
    canvasRef.current.addEventListener("mouseup", handleMouseUp);

    // Three.js 정리 코드
    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener("mousemove", handleMouseMove);
        canvasRef.current.removeEventListener("mousedown", handleMouseDown);
        canvasRef.current.removeEventListener("mouseup", handleMouseUp);
        canvasRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div id="canvas" ref={canvasRef} />;
}
