export default class House extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture,) {
    super(scene, x, y, texture)

    this.x = x
    this.y = y
    this.setTexture(texture)
    this.type = texture
    this.depth = this.y + 86

    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.body.setSize(130, 80).setOffset(60, 100)

  };


}
