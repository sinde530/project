import Phaser from 'phaser';

import { useEffect } from 'react';
import MainScene from './scene/MainScene';

export default function App() {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      parent: 'dungeon-land',
      width: 400,
      height: 300,
      pixelArt: true,
      zoom: 2,
      physics: {
        default: 'arcade',
      },
      scene: [MainScene],
    };
    const game = new Phaser.Game(config);
    // eslint-disable-next-line no-console
    console.log(game);
  }, [0]);
  return <div id="root" />;
}
