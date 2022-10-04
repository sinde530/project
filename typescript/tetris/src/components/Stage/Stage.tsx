import { TETROMINOS } from "../../setup";

import Cell from "../Cell/Cell";

import { StyledStage } from "./Stage.styles";

export type STAGECELL = [keyof typeof TETROMINOS, string]
export type STAGE = STAGECELL[][];

type Props = {
  stage: STAGE;
}

export default function Stage({stage}: Props){
  return (
    <StyledStage>
      {stage.map(row => row.map((cell,x,) => <Cell key={x} type={cell[0]}/>))}
    </StyledStage>
  )
}