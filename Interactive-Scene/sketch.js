// Interactive Scene
// Shanna Tierney
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let r;
let g;
let b;
let a;
let coin1X;
let coin1Y;
let coin2X;
let coin2Y;
let coin3X;
let coin3Y;
let ballX;
let ballY;
let dx = 5;
let dy = 5;
let movingUp = false;
let movingDown = false;
let movingLeft = false;
let movingRight = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  a = random(0, 255);
  ballX = width/2;
  ballY = height/2;
  background(255);
  placeCoins();
}

function draw() { 

  createBall();
  moveBall();
  collectCoin();
}

function createBall() {
  fill(r, g, b, a);
  ellipse(ballX, ballY, 30, [30]);
}

// Creating coins for players to collect
function placeCoins() {
  coin1X = random(windowWidth, 0);
  coin1Y = random(0, windowHeight);
  fill("gold");
  ellipse(coin1X, coin1Y, 10, 10);
  coin2X = random(windowWidth, 0);
  coin2Y = random(0, windowHeight);
  fill("gold");
  ellipse(coin2X, coin2Y, 10, 10);
  coin3X = random(windowWidth, 0);
  coin3Y = random(0, windowHeight);
  fill("gold");
  ellipse(coin3X, coin3Y, 10, 10);

}

function createObstacals() {

}

function collectCoin() {
  if(ballX - coinX <= 5 && ballY - coinY <= 5) {
    let point;
    point ++;
    print(point);
  }
}

// Making  the ball move with WASD keys 
function moveBall() {
  if (movingUp) {
    ballY -= dy;
  }
  if (movingLeft) {
    ballX -= dx;
  }
  if (movingDown) {
    ballY += dy;
  }
  if (movingRight) {
    ballX += dx;
  }
}

function keyPressed() {
  if (key === "w") {
    movingUp = true;
  }
  if (key === "a") {
    movingLeft = true;
  }
  if (key === "s") {
    movingDown = true;
  }
  if (key === "d") {
    movingRight = true;
  }
}

function keyReleased() {
  if (key === "w") {
    movingUp = false;
  }
  if (key === "a") {
    movingLeft = false;
  }
  if (key === "s") {
    movingDown = false;
  }
  if (key === "d") {
    movingRight = false;
  }
}