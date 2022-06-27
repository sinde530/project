import styled from "@emotion/styled";

import * as THREE from "three";

const scene = new THREE.Scene();

const Canvasd = styled.canvas`
  width: 1280px;
  height: 690px;
  background-color: #fec2f6;
`;

export default function Canvas() {
  return <Canvasd />;
}
