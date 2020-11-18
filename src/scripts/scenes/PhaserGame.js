import Activity from '../robotwala/lib-activity.js'
import Communication from '../robotwala/lib-communication'

export default class PhaserGame extends Phaser.Scene {
  constructor() {
    super({
      key: 'PhaserGame',
    })
  }

  create() {
    this.add.text(this.game.config.width/2, this.game.config.height/2, "Hello from LearnOBots", {
      fontSize: "76px",
      color: 'black',
    }).setOrigin(0.5, 0.5)
  
  }
  update(time, delta) {

  }
}
