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
        arcade: { gravity: { y: 300 },
        debug: true 
        },
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
    this.load.image('star', 'src/assets/star.png')
    this.load.image('plane', 'src/assets/platform.png')
    this.load.image('bomb', 'src/assets/bomb')
  }
  var platforms

  function create(this:any){
    this.add.image(400,300,'sky')
    // setOrigin(Left,Right | Top,Down
    this.add.image(0,0, 'star').setOrigin(0, 0)

    platforms = this.physics.add.staticGroup();
    platforms.create(400,568, 'plane').setScale(2).refreshBody()
  }
  function update(){}

  
  return (
    <div id="root"/>
  )
}

export default App
