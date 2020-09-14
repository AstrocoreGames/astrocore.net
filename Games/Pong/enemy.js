class Enemy {
    constructor() {
        //Creates Variables
        this.x = 0
        this.y = 0
        this.width = windowWidth / 40
        this.height = windowHeight
    }

    update() {
        //Draws Enemy
        rect(this.x, this.y, this.width, this.height)
    }

    //Resized Element
    resize() {
        this.width = windowWidth / 40
        this.height = windowHeight
    }
}
