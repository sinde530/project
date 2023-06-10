/* eslint-disable no-new */
/* eslint-disable consistent-return */
import { useEffect, useRef } from "react";
import "./App.css";

import Renderer from "./components/Renderer";
import MouseHandler from "./components/MouseHandler";
import ObjectLoader from "./components/ObjectLoader";

export default function App() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const renderer = new Renderer(canvasRef.current);

    new MouseHandler(renderer.getCamera());
    new ObjectLoader(renderer.getRenderer(), renderer.getScene());

    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeChild(renderer.getDomElement());
      }
    };
  }, []);

  return <div id="canvas" ref={canvasRef} />;
}
