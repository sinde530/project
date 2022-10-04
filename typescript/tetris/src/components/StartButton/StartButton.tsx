import { StyledStartButton } from "./StartButton.styles";

type Props = {
  callback: () => void;
}

export default function StartButton({callback}:Props) {
  return <StyledStartButton onClick={callback} >Start Game</StyledStartButton>
}