class Score {
    constructor() {
        //Creates Variables
        this.score = 0
        this.x = windowWidth / 2
        this.y = windowHeight / 10
        this.size = 40
    }

    //Write score to screen on Update
    update() {
        textSize(this.size)
        text(this.score.toString(), this.x, this.y)
    }

    //Add Score
    add() {
        this.score++
    }

    //Reset Score
    reset() {
        this.score = 0
    }

    //Resize Element
    resize() {
        this.x = windowWidth / 2
        this.y = windowHeight / 10
    }
}
