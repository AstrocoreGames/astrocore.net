class Player {
    constructor() {
        //Creates Variables
        this.x = windowWidth - (windowWidth / 40) - 10
        this.y = windowHeight / 2
        this.width = windowWidth / 40
        this.height = windowHeight / 5
        this.speed = windowWidth / 500
    }

    update() {
        //If above screen
        if (this.y <= 0) {
            this.y = 0
        }

        //If below screen
        if (this.y >= windowHeight - this.height) {
            this.y = windowHeight - this.height
        }

        //Draws Player
        rect(this.x, this.y, this.width, this.height)
    }

    //Moves Player Up
    up() {
        this.y -= this.speed
    }

    //Moves Player Down
    down() {
        this.y += this.speed
    }

    //Resizes Element
    resize() {
        this.x = windowWidth - (windowWidth / 40) - 10
        this.y = windowHeight / 2
        this.width = windowWidth / 40
        this.height = windowHeight / 5
        this.speed = windowWidth / 500
    }
}
