// Interactive Scene
// Shanna Tierney
// March 7, 2020
//
// Extra for Experts:
// Added sound into project, made player change shapes, refactored code using object arrays and made color of player randomly change when mouse wheel scrolls

//Will be object arrays
let color;
let coin;
let player;

//Will be used to make player move
let dx = 5;
let dy = 5;
let movingUp = false;
let movingDown = false;
let movingLeft = false;
let movingRight = false;

//Will be sound file
let funSong;

//Setting up the scene 
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  //Setting up object arrays
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

  player = {
    X: width/2,
    Y: height/2,
    Circle: "circle",
    Triangle: "triangle",
    Rect: "rect",
    Ellipse: "ellipse",
  }
}

//Drawing scene
function draw() { 
  background(255);
  placeCoins();
  createPlayer();
  movePlayer();
  canvas.mouseWheel(changeColor);
  canvas.mousePressed(song);
}

// Creating coins and making player shape change if touching them
function placeCoins() {

  //Place coin1
  if(player.X - coin.X1 < 15 && player.X - coin.X1 > -15 && player.Y - coin.Y1 < 15 && player.Y - coin.Y1 > -15) {

     //player shape will be triangle
    player.Circle = player.Triangle;

    fill("lime");
    ellipse(coin.X1, coin.Y1, 10, 10);
  }
  else{
    fill("blue");
    ellipse(coin.X1, coin.Y1, 10, 10);
  }

  //Place coin2
  if(player.X - coin.X2 < 15 && player.X - coin.X2 > -15 && player.Y - coin.Y2 < 15 && player.Y - coin.Y2 > -15) {

     //player shape will be rectangle
    player.Circle = player.Rect;

    fill("lime");
    ellipse(coin.X2, coin.Y2, 10, 10);
  }
  else{
    fill("yellow");
    ellipse(coin.X2, coin.Y2, 10, 10);
  }

  //Place coin3
  if(player.X - coin.X3 < 15 && player.X - coin.X3 > -15 && player.Y - coin.Y3 < 15 && player.Y - coin.Y3 > -15) {

    //player shape will be ellipse
    player.Circle = player.Ellipse;

    fill("lime");
    ellipse(coin.X3, coin.Y3, 10, 10);
  }
  else{
    fill("red");
    ellipse(coin.X3, coin.Y3, 10, 10);
  }
}

// Making player icon
function createPlayer() {

  //Filling random color
  fill(color.r, color.g, color.b, color.a);

  //Changing player shape based on coins (location of player)
  if(player.Circle === player.Triangle) {
    triangle(player.X - 15, player.Y, player.X + 15, player.Y + 15, player.X + 15, player.Y - 15);
  }

  else if(player.Circle === player.Rect) {
    rectMode(CENTER);
    rect(player.X, player.Y, 20, 35);
  }

  else if(player.Circle === player.Ellipse) {
    ellipse(player.X, player.Y, 20, [40]);
  }

  else{
    ellipse(player.X, player.Y, 30, [30]);
  }
}

//Setting player color to change if mouse wheel scrolls 
function changeColor(scroll) {
  if(scroll.deltaY) {
    //Setting different colors each time
    color.r = random(0, 255);
    color.g = random(0, 255);
    color.b = random(0, 255);
    color.a = random(0, 255);
  }
}

// Making player move with WASD keys 
function movePlayer() {
  if (movingUp) {
    player.Y -= dy;
  }
  if (movingLeft) {
    player.X -= dx;
  }
  if (movingDown) {
    player.Y += dy;
  }
  if (movingRight) {
    player.X += dx;
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

//Pre-loading the sound
function preload() {
  soundFormats('ogg');
  funSong = loadSound('assets/ChickenDance');
}

//Playing sound if  screen clicked
//Stoping sound if "t" pressed and screen clicked
function song() {
  if (keyPressed && key === "t") {
    funSong.pause();
  }
  else {
    funSong.play();
  }
}