import 'phaser'
import '@babel/polyfill'
import Activity from './robotwala/lib-activity.js'
import Communication from './robotwala/lib-communication'
import LoadingScene from './scenes/loadingScene'
import PhaserGame from './scenes/PhaserGame'

const DEFAULT_WIDTH = 1280
const DEFAULT_HEIGHT = 720


// TODO: Activity Library stuff bellow this line
Activity.NAME = 'phaser_game'
Activity.MAX_LEVEL = Activity.getNumberParamFromUrl('maxLevel', 5, 5)
Activity.LEVEL = Activity.getNumberParamFromUrl('level', 1, Activity.MAX_LEVEL)
Activity.LANG = Activity.getStringParamFromUrl('lang', 'en')
Activity.USER_ID = Activity.getStringParamFromUrl('userID', 'demo')
Activity.HELP = true
Activity.SCORE = parseInt((Activity.LEVEL / Activity.MAX_LEVEL) * 100)
Activity.game = null

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [LoadingScene, PhaserGame],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    }
  }
}

Activity.setVolume = function(vol = 0.5) {
  try {
    Activity.bgMusic.volume = vol
  } catch (e) {
    console.log(e)
  }

}
var game;
Activity.init = function() {

  Activity.setWorkspace(Activity.LEVEL, Activity.MAX_LEVEL, Activity.HELP)
  // Activity.setBgMusic('assets/sounds/music.mp3')
  // Activity.loadLanguageFile()
  // Activity.setFont()
  // Activity.setRtl()
  game = new Phaser.Game(config)
}

window.addEventListener('load', () => {
  Activity.init()
})
// var game = new Phaser.Game(config)
