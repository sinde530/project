import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
  player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | undefined;

  keys: Phaser.Types.Input.Keyboard.CursorKeys | undefined;

  // constructor() {
  //   super({ key: 'MainScene' });
  // }

  preload() {
    this.load.spritesheet(
      'player',
      'https://cdn.glitch.com/59aa1c5f-c16d-41a1-bfd2-09072e84a538%2Fhero.png?1551136698770',
      {
        frameWidth: 32,
        frameHeight: 32,
      },
    );
    this.load.image(
      'background',
      'https://cdn.glitch.com/59aa1c5f-c16d-41a1-bfd2-09072e84a538%2Fbg.png?1551136995353',
    );
  }

  create() {
    this.keys = this.input.keyboard.createCursorKeys();

    // Static background
    this.add.image(200, 200, 'background');

    // The movable character
    this.player = this.physics.add.sprite(200, 150, 'player', 0);

    // Animation definitions
    this.anims.create({
      key: 'down',
      frameRate: 8,
      repeat: -1,
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
    });
    this.anims.create({
      key: 'right',
      frameRate: 8,
      repeat: -1,
      frames: this.anims.generateFrameNumbers('player', { start: 4, end: 7 }),
    });
    this.anims.create({
      key: 'up',
      frameRate: 8,
      repeat: -1,
      frames: this.anims.generateFrameNumbers('player', { start: 8, end: 11 }),
    });
    this.anims.create({
      key: 'left',
      frameRate: 8,
      repeat: -1,
      frames: this.anims.generateFrameNumbers('player', { start: 12, end: 15 }),
    });
  }

  update() {
    // Stop movement from last update
    let movement = false;
    this.player?.setVelocity(0);

    // Set new velocity based on input
    if (this.keys?.up.isDown) {
      this.player?.setVelocityY(-100);
      this.player?.anims.play('up', true);
      movement = true;
    } else if (this.keys?.down.isDown) {
      this.player?.setVelocityY(100);
    }

    if (this.keys?.left.isDown) {
      this.player?.setVelocityX(-100);
    } else if (this.keys?.right.isDown) {
      this.player?.setVelocityX(100);
    }

    if (!movement) {
      this.player?.anims.stop();
    }
  }
}
