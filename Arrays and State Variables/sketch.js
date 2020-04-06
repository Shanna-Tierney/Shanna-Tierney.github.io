// Arrays and State Variables
// Shanna and Blake Tierney
// April 8, 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let marioImage;
let mario;

let movingUp = false;
let movingDown = false;

let startScreen = true;
let playingGame = false;
let gameOverScreen = false;

function preload() {
  marioImage = loadImage("assets/mario.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mario = {
    X: width/7,
    Y: height - height/7,
    DY: 10,
  }

  wall = {
    X: 0,
    X2: 0,
    W: 100,
    H: height,
    DX: 5,
  }
}

// draw function
function draw() {
  background(220);
  //Checks and calls the startScreen function
  if (startScreen) {
    drawStartScreen();
  }
  
  if (playingGame) {
    modePlayingGame();
  }

  if (gameOverScreen) {
    drawGameOverScreen();
  }
}



function drawStartScreen() {
  textSize(100);
  fill("green");
  text("Mario Jump Game", width/8, height/4);
  fill("red");
  textSize(50);
  text("Start",  width/4, height/2);
}

function modePlayingGame() {
  displayMario();
  moveMario();
  displayWall();
  moveWall();Wall();
}

function drawGameOverScreen() {
  textSize(100);
  fill("red");
  text("You Lose", width/8, height/2);
  fill("green");
  textSize(50);
  text("You Survived Walls!", width/8, height + height/2);
  text("Press Space To Try Again", width/8, height/2);
}

// moving with keys
function keyPressed() {
  if (startScreen) {
    if (key === " ") {
      startScreen = false;
      playingGame = true;
    }
  }
  
  if (playingGame) {
    if (key === " ") {
      movingUp = true;
      movingDown = false;
    }
  }
  
  if (gameOverScreen) {
    if (key === " ") {
      gameOverScreen = false;
      startScreen = true;
    }
  }
}

function keyReleased() {
  if (key === " ") {
    movingDown = true;
    movingUp = false;
  }
}


function moveMario() {
  if (mario.Y <= height - height/7) {
    if (movingUp) {
      mario.Y -= mario.DY;
    }
    if (movingDown) {
      mario.Y += mario.DY;
    }
  }
  else {
    movingUp = false;
    movingDown = false;
    mario.Y = height - height/7;
  }
}
// making mario appear
function displayMario() {
  image(marioImage, mario.X, mario.Y, 100, 100);
}

// making walls move
function moveWall() {
  if (playingGame) {
    if (wall.X <= 0){
      wall.X = width;
      wall.Y = random(height/2, height)
    }
    wall.X -= wall.DX;
  }
}

// making walls appear
function displayWall() {
  fill("black");
  rect(wall.X, wall.Y, wall.W, wall.H);
  rect(wall.X2, wall.Y, wall.W, wall.H);

}

// making the hitwall for mario and wall

function hitWall(){
  if (mario.Y + 100 >= wall.Y) {
    if (mario.X + 100 >= wall.X) {
      wall.DX = 0;
      mario.DY = 0;
      wall.X = width;
      playingGame = false;
      gameOverScreen = true;
      
    }
  }
}