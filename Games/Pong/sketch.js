var ball
var player
var enemy
var score

function setup() {
    //Create Vanvas
    createCanvas(windowWidth, windowHeight)

    //Create Elements
    ball = new Ball()
    player = new Player()
    enemy = new Enemy()
    score = new Score()
}

function draw() {
    //Draw Background
    background(220);

    //Update Elements
    ball.update()
    enemy.update()
    player.update()
    score.update()

    //Up arrow or W pressed
    if (keyIsDown(38) || keyIsDown(87)) {
        player.up()
    }

    //Down Arrow or S pressed
    if (keyIsDown(40) || keyIsDown(83)) {
        player.down()
    }

    //Player and Ball Collision
    if (ball.x + ball.size >= player.x && ball.x <= player.x + player.width && ball.y >= player.y && ball.y <= player.y + player.height && ball.xvel == ball.speed) {
        ball.bouncex()
    }

    //Player Collision With Enemy
    if (ball.x <= enemy.width) {
        ball.bouncex()
        score.add()
    }

    //Player Dies
    if (ball.x >= windowWidth - ball.size) {
        ball.reset()
        score.reset()
    }

    //Ball and floor collision
    if (ball.y >= windowHeight - ball.size) {
        ball.bouncey()
    }

    //Ball and ceiling collision
    if (ball.y <= 0) {
        ball.bouncey()
    }
}

//Resize Elements when Window is Resized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    enemy.resize()
    score.resize()
    player.resize()

}
