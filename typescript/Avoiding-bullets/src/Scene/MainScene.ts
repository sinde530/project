import Phaser from 'phaser'


export default class MainScene extends Phaser.Scene{
  player: any;
  monster : any;
  cursorKeys: any;
  textSecond: Phaser.GameObjects.Text | undefined;
  textReady!: Phaser.GameObjects.Text;
  textGameOver!: Phaser.GameObjects.Text;
  second: number;
  gameState: number; // 0: Ready, 1:Play, 2: GameOver

  constructor() {
    super({});

    this.player;
    this.monster;
    this.cursorKeys;
    this.second = 0;
    this.gameState = 0;
  }

  preload(){ 
    let player = this.make.graphics({}).fillStyle(0x00ff00).fillCircle(10,10,10);
    player.generateTexture("player", 20,20);
    player.destroy();

    let monster = this.make.graphics({}).fillStyle(0x0000FF).fillCircle(10,10,10);
    monster.generateTexture("monster", 20,20);
    // monster.destroy();

  }

  create(){
    this.player = this.physics.add.image(250, 150, "player");
    this.player.setCollideWorldBounds(true);

    this.monster = this.physics.add.image(200, 100, "monster");
    this.monster = this.physics.add.image(200, 150, "monster");
    
    // this.physics.add.collider(this.player,this.monster){
    //   this.player.destroy();
    // }

    this.cursorKeys = this.input.keyboard.createCursorKeys();

    this.textSecond = this.add.text(
      10,10, `Time :${this.second}s`, {font: "25px Arial", fill:"#FFFFFF"}
      );

    this.textReady = this.add .text(
      150,300, "Press space to start", {font: "25px Arial", file: "#FFFFFF"}
      );
      
    this.textGameOver = this.add .text(
      250,250, "Game Over", {font: "25px Arial", fill:"#FFFFFF"}
      )
      .setOrigin(0.5);
    this.textGameOver.visible = false;

    this.time.addEvent({
      delay: 1000,
      callback: () => {
        if(this.gameState === 1) {
        this.second++;
      }},
      callbackScope: this,
      loop: true
    })
  }

  update(){
    this.player.setVelocity(0);

    this.textSecond?.setText(`Time: ${this.second}s`);

    if(this.gameState === 0) {
      if(this.cursorKeys.space.isDown) {
        this.gameState = 1;
        this.textReady.visible = false;
      }
      return;
    } else if(this.gameState === 2) {
      this.textGameOver.visible = true
    }

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