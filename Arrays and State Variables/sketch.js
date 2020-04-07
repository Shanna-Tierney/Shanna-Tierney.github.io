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
// state variable
let screen = "start";
let colour = ["blue", "pink", "red", "yellow", "green", "purple", "orange", "lime", "black", "grey", ]

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
    //X2: 0,
    W: 100,
    H: height,
    DX: 10,
  }
}

// draw function
function draw() {
  background(120, 140, 220, 30);
  //Checks and c220alls the startScreen function
  if (screen === "start") {
    drawStartScreen();
  }
  
  if (screen === "playing") {
    modePlayingGame();
  }

  if (screen === "gameOver") {
    drawGameOverScreen();
  }
}



function drawStartScreen() {
  textSize(100);
  fill("green");
  text("Mario Jump Game", width/4, height/4);
  fill("red");
  textSize(50);
  text("Start",  width/3, height/2);
}

function modePlayingGame() {
  displayMario();
  moveMario();
  displayWall();
  moveWall();
  hitWall();
}

function drawGameOverScreen() {
  textSize(100);
  fill("red");
  text("You Lose", width/2, height/2);
  fill("green");
  textSize(50);
  text("You Survived Walls!", width/2, height + height/2);
  text("Press Space To Try Again", width/3, height - height/5);
}

// moving with keys
function keyPressed() {
  if (screen === "start") {
    if (key === " ") {
      screen = "playing";
      //console.log(screen);

    }
  }
  
  if (screen === "playing") {
    if (key === " ") {
      movingUp = true;
      movingDown = false;
    }
  }
  
  if (screen === "gameOver") {
    if (key === " ") {
      screen = "start";
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
  if (screen === "playing") {
    if (wall.X <= 0){
      wall.X = width;
      wall.Y = random(height/2, height)
      fill(random(colour));
    }
    wall.X -= wall.DX;
  }
}

// making walls appear
function displayWall() {
  
  rect(wall.X, wall.Y, wall.W, wall.H);
  //rect(wall.X2, wall.Y, wall.W, wall.H);

}

// making the hitwall for mario and wall

function hitWall(){
  if (mario.Y + 100 >= wall.Y && mario.X + 100 >= wall.X) {
    wall.DX = 0;
    mario.DY = 0;
    wall.X = width;
    screen = "gameOver";
    mario.Y = height - height/7;
  }
  wall.DX = 10;
  mario.DY = 10;
}