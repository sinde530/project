import Phaser from 'phaser'
import { useEffect } from 'react'

import MainScene from './Scene/MainScene'

export default function App() {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      parent: 'avoiding-bullets',
      width: 400,
      height: 300,
      zoom:2,
      physics: {
        default: 'arcade',
        arcade: {
          debug: true
        }
      },
      scene: [MainScene],
    }

    const game = new Phaser.Game(config)
    console.log(game)
  },[1])
  
  return <div id="root"/>
}
