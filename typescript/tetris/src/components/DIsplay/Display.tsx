import {StyledDisplay} from './Display.styles';

type Props = {
  gameOver?: boolean;
  text: string;
}

export default function Display({gameOver, text}: Props){
  return <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>;
}