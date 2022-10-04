import Phaser from 'phaser'
import { useEffect } from 'react'

import MainScene from './Scene/MainScene'

export default function App() {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      parent: 'avoiding-bullets',
      width: 500,
      height: 350,
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

  return <div id="root"/>
}
