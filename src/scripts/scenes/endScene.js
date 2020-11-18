import Activity from '../robotwala/lib-activity.js'
import Communication from '../robotwala/lib-communication'

export default class EndScene extends Phaser.Scene {

  constructor() {
    super({ key: 'EndScene' })
  }

  create() {
    super.create({ btnRestart: 'btnRestart', btnNextLevel: 'btnNextLevel' })
  }

}
