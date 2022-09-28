import Phaser from 'phaser'
import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      parent: 'phaser-game',
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: { gravity: { y: 0 } },
      },
      scene: {
        preload: preload,
        create: create,
        update: update
      }
    }
    const game = new Phaser.Game(config)
    console.log(game)
  },[0])

  function preload(this:any){
    this.load.image('sky', 'src/assets/sky.png')
  }
  function create(this:any){
    this.add.image(400,300,'sky')
  }
  function update(){}

  
  return (
    <div id="root"/>
  )
}

export default App
