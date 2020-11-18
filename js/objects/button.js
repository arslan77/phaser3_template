export default class Button extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame = null, callback) {
    frame === null ?
      super(scene, x, y, texture) :
      super(scene, x, y, texture, frame)

    scene.add.existing(this)
    // scene.physics.add.existing(this)

    this.setInteractive({ useHandCursor: true })
    this.setOrigin(0.5, 0.5)

    this.on('pointerdown', function() {
      this.setScale(0.98)
      callback()
    })
    this.on('pointerover', function() {
      this.setTint(0xCCCCCC)
    })
    this.on('pointerout', function() {
      this.clearTint()
    })

  }
}
