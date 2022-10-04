import Phaser from 'phaser'


export default class MainScene extends Phaser.Scene{
  player: any;
  cursorKeys: any;
  textSecond: Phaser.GameObjects.Text | undefined;
  textReady: Phaser.GameObjects.Text| undefined;
  textGameOver: Phaser.GameObjects.Text | undefined;
  second: number;

  constructor() {
    super({});

    this.player;
    this.cursorKeys;
    this.second = 0;
  }

  preload(){ 
    let player = this.make.graphics({}).fillStyle(0x00ff00).fillCircle(10,10,10);
    player.generateTexture("player", 20,20);
    player.destroy();
  }

  create(){
    this.player = this.physics.add.image(250, 150, "player");
    this.player.setCollideWorldBounds(true);
    
    this.cursorKeys = this.input.keyboard.createCursorKeys();

    this.textSecond = this.add.text(
      10,10, "Tile :0s", {font: "25px Arial", fill:"#FFFFFF"}
      );

    this.textReady = this.add .text(
      150,300, "Press space to start", {font: "25px Arial", file: "#FFFFFF"}
      );
      
    this.textGameOver = this.add .text(
      250,250, "Game Over", {font: "25px Arial", fill:"#FFFFFF"}
      )
      .setOrigin(0.5);

    this.time.addEvent({
      delay: 1000,
      callback: () => this.second++,
      callbackScope: this,
      loop: true
    })
  }

  update(){
    this.player.setVelocity(0);

    this.textSecond?.setText(`Time: ${this.second}s`);

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