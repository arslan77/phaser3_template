import Activity from '../robotwala/lib-activity.js'
import Communication from '../robotwala/lib-communication'

export default class LoadingScene extends Phaser.Scene {
  constructor() {
    super({ key: 'LoadingScene' })
  }

  preload() {
    // TODO : Load the resources bellow this line.
    this.load.on('complete', () => {
      // TODO : Load the file and other necessary stuff
      this.scene.start('PhaserGame')
    })

    // Buttons
    this.load.image('btnRestart', 'assets/btns/restart.png')
    this.load.image('btnNextLevel', 'assets/btns/nextLevel.png')
  }
}
