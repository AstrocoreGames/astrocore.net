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
    }

    //Bounces X of Ball
    bouncex() {
        if (this.xvel === this.speed) {
            this.xvel = -this.speed
        } else {
            this.xvel = this.speed
        }
    }

    //Bounces Y of Ball
    bouncey() {
        if (this.yvel === this.speed) {
            this.yvel = -this.speed
        } else {
            this.yvel = this.speed
        }
    }

    //Resizes Element
    resize() {
        this.x = windowWidth / 2
        this.y = windowHeight / 2
        this.size = windowHeight / 20
        this.speed = windowWidth / 500
    }
}
