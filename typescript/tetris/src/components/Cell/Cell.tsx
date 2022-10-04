import {StyledCell} from './Cell.styles';
import {TETROMINOS} from '../../setup';

type Props = {
  type: keyof typeof TETROMINOS;
}

export default function Cell({type}: Props) {
  return <StyledCell type={type} color={TETROMINOS[type].color} />;
}
