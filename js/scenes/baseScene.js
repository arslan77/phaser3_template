
export default class BaseScene extends Phaser.Scene {

  constructor(key) {
    super(key)
  }

  init() {
    this.width = this.game.config.width
    this.height = this.game.config.height
  }

  /**** Debugging Functions starts here ****/
  debugObject(obj) {
    obj.setInteractive()
    this.input.setDraggable(obj)
    var showPosition = this.add.text(32, 32)
    showPosition.setStyle({ color: '#ffffff', fontSize: '30px' })

    this.input.on('dragstart', function(pointer, gameObject) {
      this.children.bringToTop(gameObject)
    }, this)

    this.input.on('drag', function(pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX
      gameObject.y = dragY
      showPosition.setText('X: ' + gameObject.x + '\nY:' + gameObject.y)
    })

  }
}
