export default class BaseLoadingScene extends Phaser.Scene {
  constructor(key) {
    super(key)
  }

  preload() {
    var progressBar = this.add.graphics()
    var progressBox = this.add.graphics()
    progressBox.fillStyle(0x222222, 0.8)

    var width = this.cameras.main.width
    var height = this.cameras.main.height
    progressBox.fillRect(width / 2 - 160, height / 2 - 30, 320, 50)
    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#000000'
      }
    })
    loadingText.setOrigin(0.5, 0.5)

    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    })
    percentText.setOrigin(0.5, 0.5)

    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#000000'
      }
    })

    assetText.setOrigin(0.5, 0.5)

    this.load.on('progress', function(value) {
      percentText.setText(parseInt(value * 100) + '%')
      progressBar.clear()
      progressBar.fillStyle(0xffffff, 1)
      progressBar.fillRect(width / 2 - 150, height / 2 - 20, 300 * value, 30)
    })

    this.load.on('fileprogress', function(file) {
      assetText.setText('Loading asset: ' + file.key)
    })

    this.load.on('complete', function() {
      progressBar.destroy()
      progressBox.destroy()
      loadingText.destroy()
      percentText.destroy()
      assetText.destroy()
    })

  }

}
