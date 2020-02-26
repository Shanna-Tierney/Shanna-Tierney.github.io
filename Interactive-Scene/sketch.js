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
let x;
let y;
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
  x = width/2;
  y = height/2;
  background(220);
  placeCoins();
}

function draw() { 
  createBall();
  moveBall();
}

function createBall() {
  fill(r, g, b, a);
  ellipse(x, y, 30, [30]);
}

// Making  the ball move with WASD keys 
function moveBall() {
  if (movingUp) {
    y -= dy;
  }
  if (movingLeft) {
    x -= dx;
  }
  if (movingDown) {
    y += dy;
  }
  if (movingRight) {
    x += dx;
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
    let   xPosistion = random(windowWidth, 0);
    let yPosistion = random(0, windowHeight);
    fill("gold");
    ellipse(xPosistion, yPosistion, 10, 10);

  }
}