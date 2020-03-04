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
let player;
let playerX;
let playerY;
let dx = 5;
let dy = 5;
let movingUp = false;
let movingDown = false;
let movingLeft = false;
let movingRight = false;
let points = 0;
let touchedCoin1 = false;
let touchedCoin2 = false;
let touchedCoin3 = false;

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
  playerX = width/2;
  playerY = height/2;
}

function draw() { 
  background(255);
  placeCoin1();
  placeCoin2();
  placeCoin3();
  coinCheck();
  createPlayer();
  moveBall();
}

// Making ball (players icon)
function createPlayer() {
  fill(r, g, b, a);
  if(touchedCoin1) {
    player = ellipse(playerX, playerY, 50, [50]);
  }
  if(touchedCoin2) {
    player = ellipse(playerX, playerY, 50, [15]);
  }
  if(touchedCoin3) {
    player = ellipse(playerX, playerY, 15, [30]);
  }
  else{
    player = ellipse(playerX, playerY, 30, [30]);
  }
}


// Creating coins for players to collect
function placeCoin1() {
  if(playerX - coin1X < 15 && playerX - coin1Y > -15 && playerY - coin1Y < 15 && playerY - coin1Y > -15) {
    touchedCoin1 = true;
  }
  else{
    fill("gold");
    coin1 = ellipse(coin1X, coin1Y, 10, 10);
  }
}

function placeCoin2() {
  if(playerX - coin2X < 15 && playerX - coin2X > -15 && playerY - coin2Y < 15 && playerY - coin2Y > -15) {
    touchedCoin2 = true;
  }
  else{
    fill("gold");
    coin2 = ellipse(coin2X, coin2Y, 10, 10);
  }
}

function placeCoin3() {
  if(playerX - coin3X < 15 && playerX - coin3X > -15 && playerY - coin3Y < 15 && playerY - coin3Y > -15) {
    touchedCoin3 = true;
  }
  else{
    fill("gold");
    coin3 = ellipse(coin3X, coin3Y, 10, 10);
  }
}

// Checking if coins have been touched
function coinCheck() {
  if(touchedCoin1) {
    fill(255);
    coin1 = ellipse(coin1X, coin1Y, 10, 10);
  }
  if(touchedCoin2) {
    fill(255);
    coin2 = ellipse(coin2X, coin2Y, 10, 10);
  }
  if(touchedCoin3) {
    fill(255);
    coin3 = ellipse(coin3X, coin3Y, 10, 10);
  }
}

// Making  the ball move with WASD keys 
function moveBall() {
  if (movingUp) {
    playerY -= dy;
  }
  if (movingLeft) {
    playerX -= dx;
  }
  if (movingDown) {
    playerY += dy;
  }
  if (movingRight) {
    playerX += dx;
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