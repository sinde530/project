import styled from "@emotion/styled";
import { HEIGHT, TETROMINOS, WIDTH } from "./setup";

export const Container = styled.div({
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  outline: "none",
});

export const StyledTetris = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px",
  margin: "0 auto",
  // justifyContent: "space-between",
  // width: "380px",
});

// Cell
interface CellProps {
  type: keyof typeof TETROMINOS;
  color: string;
}
export const Cell = styled.div<CellProps>({
  width: "auto",
  background: `rgba(${(props: any) => props.color}, 0.8)`,
  border: `${(props: any) => (props.type === 0 ? "0px solid" : "4px solid")}`,
  borderBottomColor: `rgba(${(props: any) => props.color}, 0.1)`,
  borderRightColor: `rgba(${(props: any) => props.color}, 1)`,
  borderTopColor: `rgba(${(props: any) => props.color}, 1)`,
  borderLeftColor: `rgba(${(props: any) => props.color}, 0.3)`,
});

// Display
interface GameOverProps {
  gameOver?: boolean;
}

export const Display = styled.div<GameOverProps>({
  boxSizing: "border-box",
  display: "flex",
  alignItems: "space-between",
  margin: "0 0 20px 0",
  padding: "20px",
  border: "2px solid #777",
  minHeight: "20px",
  width: "120px",
  borderRadius: "10px",
  color: `${(props: any) => (props.gameOver ? "red" : "#999")}`,
  background: "#000000",
  fontFamily: "Arial, Helvetica",
  fontSize: "14px",
});

// Stage
export const Stage = styled.div({
  display: "gird",
  gridTemplateColumns: `repeat(${WIDTH}, 30px)`,
  gridTemplateRows: `repeat(${HEIGHT}, 30px)`,
  gridGap: "1px",
  border: "1px solid #777",
  background: "#222",
});

// StartButton
export const StartButton = styled.button({
  boxSizing: "border-box",
  margin: "0 0 20px 0",
  padding: "20px",
  minHeight: "20px",
  width: "170px",
  borderRadius: "10px",
  border: "none",
  color: "#FFFFFF",
  background: "#111",
  fontFamily: "Arial, Helvetica",
  fontSize: "18px",
  outline: "none",
  cursor: "pointer",
});
