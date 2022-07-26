import { HEIGHT, TETROMINOS, WIDTH } from "./setup";

export const createStage = () =>
  Array.from(Array(HEIGHT), () => Array(WIDTH).fill([0, "clear"]));

export const randomTetromino = () => {
  const tetrominos = [
    "I",
    "J",
    "L",
    "O",
    "S",
    "T",
    "Z",
  ] as (keyof typeof TETROMINOS)[];
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};
