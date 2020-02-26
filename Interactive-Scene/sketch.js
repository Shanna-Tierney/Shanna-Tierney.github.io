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
let coinX;
let coinY;
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
}

function draw() { 
  background(220);
  placeCoins();
  createBall();
  moveBall();
  collectCoin();
}

function createBall() {
  fill(r, g, b, a);
  ellipse(ballX, ballY, 30, [30]);
}

function collectCoin() {
  if(ballX - coinX <= 10 && ballY - coinY <= 10) {
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

// Creating coins for players to collect
function placeCoins() {
  for(let coins = 0; coins < 40; coins++) {
    coinX = random(windowWidth, 0);
    coinY = random(0, windowHeight);
    fill("gold");
    ellipse(coinX, coinY, 10, 10);
  }
}