import { useRef, useState } from 'react'

import { StyledTetris, StyledTetrisWrapper } from './App.styles'

import Display from './components/DIsplay/Display'
import Stage from './components/Stage/Stage'
import StartButton from './components/StartButton/StartButton'

import { useInterval } from './hooks/useInterval'
import { usePlayer } from './hooks/usePlayer'
import { useStage } from './hooks/useStage'

import { createStage, isColliding } from './gameHelpers'
import { useGameStatus } from './hooks/useGameStatus'

export default function App() {
  const [dropTiem, setDropTime] = useState<null | number>(null);
  const [gameOver, setGameOver] = useState<null | boolean>(true);

  const gameArea = useRef<HTMLDivElement>(null)

  const {player, updatePlayerPos, resetPlayer, playerRotate } = usePlayer();
  const {stage, setStage, rowsCleared} = useStage(player, resetPlayer);
  const {score, setScore, rows, setRows, level, setLevel } = useGameStatus(rowsCleared);

  const movePlayer = (dir: number) => {
    if(!isColliding(player,stage, {x:dir, y:0})){
      updatePlayerPos({x:dir, y:0, collided: false});
    }
  }

  const keyUp = ({keyCode}: {keyCode: number}): void => {
    // Change the droptime spped user
    if(!gameOver){
      if(keyCode === 40) {
        setDropTime(1000 / level + 200);
      }
    }
  }

  const handleStartGame = (): void => {
    // Need to focus the window with the key events on start
    if (gameArea.current) gameArea.current.focus();
    // Reset everything
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setLevel(1);
    setRows(0);
    setGameOver(false);
  };

  const move = ({ keyCode, repeat} : {keyCode: number, repeat: boolean}): void => {
    if(keyCode === 37) {
      movePlayer(-1);
    } else if (keyCode === 39) {
      movePlayer(1);
    } else if (keyCode === 40) {
      // just call once
      if(repeat) return;
      setDropTime(30);
    } else if(keyCode === 38) {
      playerRotate(stage)
      // impement this eaten
    }
  }

  const drop = ():void => {
    if(rows > level * 10) {
      setLevel(prev => prev +1);
      // Also increase speed
      setDropTime(1000 / level + 200);
    }

    if(!isColliding(player, stage, {x:0, y:1})){
      updatePlayerPos({x:0, y:1, collided: false})
    } else {
      // Game Over
      if(player.pos.y < 1) {
        console.log("Game over!");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({x:0, y:0, collided: true});
    }

  }

  useInterval(() => {
    drop();
  }, dropTiem)
  
  return (
    <StyledTetrisWrapper 
      role="button" 
      tabIndex={0} 
      onKeyDown={move} 
      onKeyUp={keyUp} 
      ref={gameArea}
      >
        <StyledTetris>
          <div className='display'>
            {gameOver ? (
              <>
                <Display gameOver={gameOver} text="Game Over!"/>
                <StartButton callback={handleStartGame}/>
              </>
            ) : (
              <>
                <Display text={`Score: ${score}`}/>
                <Display text={`Rows: ${rows}`}/>
                <Display text={`Level: ${level}`}/>
              </>
            )}
          </div>
          <Stage stage={stage}/>
        </StyledTetris>
    </StyledTetrisWrapper>
  )
}
