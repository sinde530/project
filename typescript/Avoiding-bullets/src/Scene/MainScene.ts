import Phaser from 'phaser'


export default class MainScene extends Phaser.Scene{
  player: any;
  cursorKeys: any;

  constructor() {
    super({});

    this.player;
    this.cursorKeys;
  }

  preload(){
    let player = this.make.graphics({}).fillStyle(0x00ff00).fillCircle(10,10,10);
    player.generateTexture("player", 20,20);
    player.destroy();
  }

  create(){
    this.player = this.physics.add.image(250, 250, "player");
    this.player.setCollideWorldBounds(true);
    
    this.cursorKeys = this.input.keyboard.createCursorKeys();
  }

  update(){
    this.player.setVelocity(0);

    if(this.cursorKeys.up.isDown){
      this.player.setVelocityY(-200);
    } else if (this.cursorKeys.down.isDown) {
      this.player.setVelocityY(200);
    }

    if(this.cursorKeys.left.isDown){
      this.player.setVelocityX(-200);
    } else if(this.cursorKeys.right.isDown){
      this.player.setVelocityX(200);
    }
  }
}