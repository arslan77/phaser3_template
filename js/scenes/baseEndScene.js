import BaseScene from './baseScene'
import Activity from '../lib-activity'
import Communication from '../lib-communication'
import AlignGrid from '../util/alignGrid'
import Align from '../util/align'
import Button from '../objects/button'

export default class BaseEndScene extends BaseScene {

  constructor(key) {
    super(key)
  }

  init() {
    super.init()
    // this.fontFamily = 'Love Ya Like A Sister, cursive'
    this.fontFamily = 'Comic Sans MS'
  }

  create(img) {
    BaseEndScene.MAIN_FONT = 'impact'
    this.MAIN_FONT = 'impact'

    this.add.graphics()
      .fillStyle(0x222222, 0.9)
      .fillRect(0, 0, this.width, this.height)

    let agrid = new AlignGrid({ scene: this, rows: 11, cols: 11 })
    let align = new Align(this)
    // agrid.showNumbers()


    if (Activity.LEVEL === Activity.MAX_LEVEL) {
      Activity.activityFinished()

      this.title = this.add.text(0, 0, 'Congratulations!', {
        fontSize: '60px',
        fontFamily: this.fontFamily
      }).setOrigin(0.5, 0.5)
      agrid.placeAtIndex(16, this.title)


      this.content = this.add.text(0, 0, 'You did it', {
        fontSize: '50px',
        fontFamily: this.fontFamily
      }).setOrigin(0.5, 0.5)
      agrid.placeAtIndex(38, this.content)

      this.btn = new Button(this, 0, 0, img.btnRestart, null, Activity.changeLevel)
      agrid.placeAtIndex(60, this.btn)
      align.scaleToGameW(this.btn, .2)

    } else {
      Communication.updateScore(Activity.SCORE)

      this.title = this.add.text(0, 0, 'Bravo!', {
        fontSize: '60px',
        fontFamily: this.fontFamily
      }).setOrigin(0.5, 0.5)
      agrid.placeAtIndex(16, this.title)

      this.content = this.add.text(0, 0, 'Level Complete', {
        fontSize: '50px',
        fontFamily: this.fontFamily
      }).setOrigin(0.5, 0.5)
      agrid.placeAtIndex(38, this.content)

      this.btn = new Button(this, 0, 0, img.btnNextLevel, null, Activity.nextLevel)
      agrid.placeAtIndex(60, this.btn)
      align.scaleToGameW(this.btn, .2)

    }
  }
}
