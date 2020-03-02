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
let coin1;
let coin2;
let coin3;
let coin1X;
let coin1Y;
let coin2X;
let coin2Y;
let coin3X;
let coin3Y;
let ball;
let ballX;
let ballY;
let dx = 5;
let dy = 5;
let movingUp = false;
let movingDown = false;
let movingLeft = false;
let movingRight = false;
let points = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  a = random(0, 255);
  coin1X = random(windowWidth, 0);
  coin1Y =  random(0, windowHeight);
  coin2X = random(windowWidth, 0);
  coin2Y =  random(0, windowHeight);
  coin3X = random(windowWidth, 0);
  coin3Y =  random(0, windowHeight);
  ballX = width/2;
  ballY = height/2;
}

function draw() { 
  background(255);
  placeCoins();
  createBall();
  moveBall();
}


function createBall() {
  fill(r, g, b, a);
  ball = ellipse(ballX, ballY, 30, [30]);
}

// Creating coins for players to collect
function placeCoins() {
  if(ballX - coin1X < 5 && ballY - coin1Y < 5) {
    // got coin true? ++
  }
  else{
    fill("gold");
    coin1 = ellipse(coin1X, coin1Y, 10, 10);
  }
  fill("gold");
  coin2 = ellipse(coin2X, coin2Y, 10, 10);
  fill("gold");
  coin3 = ellipse(coin3X, coin3Y, 10, 10);
}

function createObstacals() {

}

// function collectCoin1() {
//   if(ballX - coin1X < 5 && ballY - coin1Y < 5) {

//   }
// }

function collectCoin() {
  if(ballX - coin1X <= 5 && ballY - coin1Y <= 5){
    print(points);
    return points ++;
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