class Ball {
    constructor() {
        //Creates Vaiables
        this.x = windowWidth / 2
        this.y = windowHeight / 2
        this.size = windowHeight / 20
        this.speed = windowWidth / 250
        this.xvel = this.speed
        this.yvel = this.speed
    }

    update() {
        //Draws Ball
        this.x += this.xvel
        this.y += this.yvel
        rect(this.x, this.y, this.size, this.size);
    }

    //Resets to Default Position
    reset() {
        this.x = windowWidth / 2
        this.y = windowHeight / 2
        this.xvel = this.speed
    }

    //Bounces X of Ball
    bouncex() {
        this.xvel = -this.xvel
        this.xvel = this.xvel + windowWidth / 1000
    }

    //Bounces Y of Ball
    bouncey() {
        this.yvel = -this.yvel
    }

    //Resizes Element
    resize() {
        this.x = windowWidth / 2
        this.y = windowHeight / 2
        this.size = windowHeight / 20
        this.speed = windowWidth / 500
    }
}
