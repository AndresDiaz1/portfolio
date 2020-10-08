import Phaser from 'phaser'

class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene')
  }
  create(){
    this.add.rectangle(100,100, 100, 100, 0xff0000)
  }
}

export default MainScene