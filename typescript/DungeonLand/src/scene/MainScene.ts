import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
  // type을 any로 지정. SpriteWithDynamicBody엔 direction이란 속성이 없기에 SpriteWithStaticBody을 arcade에서부터 에러가 나서 현재는 any로 사용
  // player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | undefined;
  player: any;

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
    this.player.direction = 'down';
    this.player.swinging = false;

    // Animation definitions
    this.anims.create({
      frameRate: 8,
      repeat: -1,
      frames: this.anims.generateFrameNumbers('player', { start: 12, end: 15 }),
    });
    this.anims.create({
      key: 'swing-down',
      frameRate: 8,
      repeat: 0,
      frames: this.anims.generateFrameNumbers('player', { start: 16, end: 19 }),
    });
    this.anims.create({
      key: 'swing-right',
      frameRate: 8,
      repeat: 0,
      frames: this.anims.generateFrameNumbers('player', { start: 24, end: 27 }),
    });
    this.anims.create({
      key: 'swing-up',
      frameRate: 8,
      repeat: 0,
      frames: this.anims.generateFrameNumbers('player', { start: 20, end: 23 }),
    });
    this.anims.create({
      key: 'swing-left',
      frameRate: 8,
      repeat: 0,
      frames: this.anims.generateFrameNumbers('player', { start: 28, end: 31 }),
    });
  }

  update() {
    // Stop movement from last update
    let movement = false;
    this.player?.setVelocity(0);

    // Set new velocity based on input
    // isUp 사용시 오토마냥 계속 혼자 쭉 가버림
    // if (this.keys?.up.isDown) {
    //   this.player?.setVelocityY(-100);
    //   this.player?.anims.play('up', true);
    //   movement = true;
    // } else if (this.keys?.down.isDown) {
    //   this.player?.setVelocityY(100);
    //   this.player?.anims.play('down', true);
    //   movement = true;
    // }

    // if (this.keys?.left.isDown) {
    //   this.player?.setVelocityX(-100);
    //   this.player?.anims.play('left', true);
    //   movement = true;
    // } else if (this.keys?.right.isDown) {
    //   this.player?.setVelocityX(100);
    //   this.player?.anims.play('right', true);
    //   movement = true;
    // }

    if (!this.player.swinging) {
      if (this.keys?.space.isDown) {
        this.player.swinging = true;
        this.player.anims.play(`swing-${this.player.direction}`, true);
        this.player.once('animationcomplete', () => {
          this.player.anims.play(`walk-${this.player.direction}`, true);
          this.player.swinging = false;
        });
      }
      // Set new velocity based on input (up, down)
      if (this.keys?.up.isDown) {
        this.player.setVelocityY(-100);
        this.player.direction = 'up';
        movement = true;
      } else if (this.keys?.down.isDown) {
        this.player.setVelocityY(100);
        this.player.direction = 'down';
        movement = true;
      }

      // left,right
      if (this.keys?.left.isDown) {
        this.player.setVelocityX(-100);
        this.player.direction = 'left';
        movement = true;
      } else if (this.keys?.right.isDown) {
        this.player.setVelocityX(100);
        this.player.direction = 'right';
        movement = true;
      }

      if (!movement) {
        this.player?.anims.stop();
      } else {
        this.player.play(`walk-${this.player.direction}`, true);
      }
    }
  }
}
