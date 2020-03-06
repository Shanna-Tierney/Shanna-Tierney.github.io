// Interactive Scene
// Shanna Tierney
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let canvas;
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
let playerShape;
let playerX;
let playerY;
let dx = 5;
let dy = 5;
let movingUp = false;
let movingDown = false;
let movingLeft = false;
let movingRight = false;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
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
  playerShape = "circle";
  canvas.mouseWheel(changeColor);

}

function draw() { 
  background(255);
  placeCoin1();
  placeCoin2();
  placeCoin3();
  createPlayer();
  movePlayer();
}

function noise() {
  if(mouseClicked) {
    
  }
}

// Making player icon
function createPlayer() {
  fill(r, g, b, a);
  if(playerShape === "triangle") {
    triangle(playerX - 15, playerY, playerX + 15, playerY + 15, playerX + 15, playerY - 15);
  }
  else if(playerShape === "rectangle") {
    rectMode(CENTER);
    rect(playerX, playerY, 20, 35);
  }
  else if(playerShape === "ellipse") {
    ellipse(playerX, playerY, 20, [40]);
  }
  else{
    ellipse(playerX, playerY, 30, [30]);
  }
}


// Creating coins and making playerShape change if touching them
function placeCoin1() {
  if(playerX - coin1X < 15 && playerX - coin1X > -15 && playerY - coin1Y < 15 && playerY - coin1Y > -15) {
    playerShape = "triangle";
    fill(255);
    ellipse(coin1X, coin1Y, 10, 10);
  }
  else{
    fill("gold");
    ellipse(coin1X, coin1Y, 10, 10);
  }
}

function placeCoin2() {
  if(playerX - coin2X < 15 && playerX - coin2X > -15 && playerY - coin2Y < 15 && playerY - coin2Y > -15) {
    playerShape = "rectangle";
    fill(255);
    ellipse(coin2X, coin2Y, 10, 10);
  }
  else{
    fill("gold");
    ellipse(coin2X, coin2Y, 10, 10);
  }
}

function placeCoin3() {
  if(playerX - coin3X < 15 && playerX - coin3X > -15 && playerY - coin3Y < 15 && playerY - coin3Y > -15) {
    playerShape = "ellipse";
    fill(255);
    ellipse(coin3X, coin3Y, 10, 10);
  }
  else{
    fill("gold");
    ellipse(coin3X, coin3Y, 10, 10);
  }
}

//Setting player color to change with mouse wheel 
function changeColor(event) {
  if(event.deltaY) {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    a = random(0, 255);
  }
}

// Making player move with WASD keys 
function movePlayer() {
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