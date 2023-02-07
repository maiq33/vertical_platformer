const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 564

class Player {
    constructor() {
        this.position = {
            x: 0,
            y: 0,
        }
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x,this.position.y,100,100)
    }

    update() {
        this.position.y++
    }
}

const player = new Player()

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = "white"
    c.fillRect(0, 0, canvas.width, canvas.height)

    player.draw()
    player.update()

}

animate()