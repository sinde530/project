// MouseHandler.ts

export default class MouseHandler {
  private previousMouseX: number = 0;

  private previousMouseY: number = 0;

  private isLeftMouseButtonDown: boolean = false;

  // private camera: THREE.PerspectiveCamera;
  public camera: THREE.PerspectiveCamera;

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
    this.addEventListeners();
  }

  private addEventListeners() {
    document.addEventListener("mousemove", this.handleMouseMove);
    document.addEventListener("mousedown", this.handleMouseDown);
    document.addEventListener("mouseup", this.handleMouseUp);
  }

  private handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;

    // Calculate the mouse movement
    const deltaX = clientX - this.previousMouseX;
    const deltaY = clientY - this.previousMouseY;

    if (this.isLeftMouseButtonDown) {
      const movementSpeed = 1;
      this.camera.position.x = deltaX * movementSpeed;
      this.camera.position.y = deltaY * movementSpeed;

      // Update camera rotation based on mouse movement
      const rotationSpeed = 0.001;
      this.camera.rotation.y -= deltaX * rotationSpeed;
      this.camera.rotation.x -= deltaY * rotationSpeed;

      // Limit vertical rotation
      const maxVerticalRotation = Math.PI / 2;
      this.camera.rotation.x = Math.max(
        -maxVerticalRotation,
        Math.min(maxVerticalRotation, this.camera.rotation.x)
      );
    }

    this.previousMouseX = clientX;
    this.previousMouseY = clientY;
  };

  private handleMouseDown = (event: MouseEvent) => {
    if (event.button === 0) {
      this.isLeftMouseButtonDown = true;
    }
  };

  private handleMouseUp = (event: MouseEvent) => {
    if (event.button === 0) {
      this.isLeftMouseButtonDown = false;
    }
  };
}
