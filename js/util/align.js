export default class Align {
  constructor(scene) {
    if (!scene) {
      console.log('missing scene')
      return
    }

    this.scene = scene
  }

  scaleToGameW(obj, per) {
    obj.displayWidth = this.scene.game.config.width * per
    obj.scaleY = obj.scaleX
  }

  centerH(obj) {
    obj.x = this.scene.game.config.width / 2 - obj.displayWidth / 2
  }

  centerV(obj) {
    obj.y = this.scene.game.config.height / 2 - obj.displayHeight / 2
  }

  center2(obj) {
    obj.x = this.scene.game.config.width / 2 - obj.displayWidth / 2
    obj.y = this.scene.game.config.height / 2 - obj.displayHeight / 2
  }

  center(obj) {
    obj.x = this.scene.game.config.width / 2
    obj.y = this.scene.game.config.height / 2
  }
}