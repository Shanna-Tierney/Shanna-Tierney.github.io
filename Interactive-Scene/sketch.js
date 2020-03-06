// Interactive Scene
// Shanna Tierney
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let playerColor;
let coin;
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

  color = {
    r: random(0, 255),
    g: random(0, 255),
    b: random(0, 255),
    a: random(0, 255),
  };
 
  coin = {
    X1: random(windowWidth, 0),
    Y1: random(0, windowHeight),
    X2: random(windowWidth, 0),
    Y2: random(0, windowHeight),
    X3: random(windowWidth, 0),
    Y3: random(0, windowHeight),
  };

  playerX = width/2;
  playerY = height/2;
  playerShape = "circle";
  canvas.mouseWheel(changeColor);
  canvas.mousePressed(song);
}

function draw() { 
  background(255);
  placeCoin1();
  placeCoin2();
  placeCoin3();
  createPlayer();
  movePlayer();
}




function song() {
  funSong.play();

  if (keyIsPressed && key === "s") {
    funSong.stop();
  }
}



// Making player icon
function createPlayer() {
  fill(color.r, color.g, color.b, color.a);
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
  if(playerX - coin.X1 < 15 && playerX - coin.X1 > -15 && playerY - coin.Y1 < 15 && playerY - coin.Y1 > -15) {
    playerShape = "triangle";
    fill("lime");
    ellipse(coin.X1, coin.Y1, 10, 10);
  }
  else{
    fill("purple");
    ellipse(coin.X1, coin.Y1, 10, 10);
  }
}

function placeCoin2() {
  if(playerX - coin.X2 < 15 && playerX - coin.X2 > -15 && playerY - coin.Y2 < 15 && playerY - coin.Y2 > -15) {
    playerShape = "rectangle";
    fill("lime");
    ellipse(coin.X2, coin.Y2, 10, 10);
  }
  else{
    fill("gold");
    ellipse(coin.X2, coin.Y2, 10, 10);
  }
}

function placeCoin3() {
  if(playerX - coin.X3 < 15 && playerX - coin.X3 > -15 && playerY - coin.Y3 < 15 && playerY - coin.Y3 > -15) {
    playerShape = "ellipse";
    fill("lime");
    ellipse(coin.X3, coin.Y3, 10, 10);
  }
  else{
    fill("red");
    ellipse(coin.X3, coin.Y3, 10, 10);
  }
}

//Setting player color to change with mouse wheel 
function changeColor(scroll) {
  if(scroll.deltaY) {
    color.r = random(0, 255);
    color.g = random(0, 255);
    color.b = random(0, 255);
    color.a = random(0, 255);
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