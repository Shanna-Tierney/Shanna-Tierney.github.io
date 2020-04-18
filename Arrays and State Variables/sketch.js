// Arrays and State Variables
// Shanna and Blake Tierney
// April 20, 2020
//
// Extra for Experts:
// Added object arrays, made a variable that keeps track of score, made mario rotate and shrink. 


let marioImage;
let mario;
let angle = 0;
let movingUp = false;
let movingDown = false;
// state variable
let screen = "start";
//Arrays
let colour = ["DarkGreen", "DarkOliveGreen", "DarkKhaki", "DarkSeaGreen", "Green", "ForestGreen", "LightGreen", "LimeGreen", "MediumSeaGreen", "OliveDrab", "PaleGreen"];
let wallHeight = [800, 780, 760, 740, 720, 700, 680, 660, 640, 620, 600, 580, 560, 540, 520, 500, 480, 460, 440, 420, 400, 380, 360, 340, 320, 300 ];

function preload() {
  marioImage = loadImage("assets/mario.png");
  let bg = loadImage("assets/bg.png");
}

function setup() {
  imageMode(CENTER);
  createCanvas(windowWidth, windowHeight);
  mario = {
    X: width/7,
    Y: height - height/7,
    DY: 10,
  }
  wall = {
    X: width/4,
    W: 300,
    H: height,
    DX: 10,
  }
}

function draw() {
  background(120, 140, 220);
  drawStartScreen();
  instructionsScreen();
  modePlayingGame();
  drawGameOverScreen();
}

function drawStartScreen() {
  if (screen === "start") {
    //resetting varibles
    mario.Width = 100;
    mario.Height = 100;
    wall.Count = 0;
    mario.Y = height - height/7;
    //Typing out the start screen
    textSize(100);
    fill("red");
    text("Mario Jump Game", width/3.75, height/4);
    fill("green");
    textSize(50);
    text("Press 'S' key to see instructions or space to Start",  width/5, height/2);
  }
}

//Giving player instructions
function instructionsScreen() {
  if (screen === "instructions") {
    textSize(30);
    fill("black");
    text("The objective of the game is to survive as many walls as you can.", width/4, height/9);
    text("You press space bar to make Mario jump. If you hit the roof or the walls, Mario dies.", width/5, height/4.5);
    text("We'll give you a pitty point, if it's your first turn, to get you started off.", width/4, height/3);
    textSize(75);
    fill("green");
    text("Press SPACE to begin.", width/3.5, height-height/3);
  }
}

function modePlayingGame() {
  if (screen === "playing") {
    displayMario();
    moveMario();
    displayWall();
    moveWall();
    hitWall();
    displayScore();
  }
}

// drawing gameover screen
function drawGameOverScreen() {
  if (screen === "gameOver") {
    rotateMario();
    textSize(100);
    fill("red");
    //showing scores
    if (wall.Count === 1) {
      text("You Survived " + wall.Count + " Wall!", width/4.5, height/2);
    }
    else{
      text("You Survived " + wall.Count + " Walls!", width/4.5, height/2);
    }
    fill("green");
    textSize(50);
    text("Press 'P' To Play Again", width/3, height - height/5);
    //resetting values
    wall.DX = 10;
    mario.DY = 10;
  }
}

// moving and changing state variable with keys
function keyPressed() {
  if (screen === "start") {
    if (key === "s") {
      screen = "instructions";
    }
    if (key === " ") {
      screen = "playing";
    }
  }
  if (screen === "instructions") {
    if (key === " ") {
      screen = "playing";
    }
  }
  if (screen === "playing") {
    if (key === " ") {
      movingUp = true;
      movingDown = false;
    }
  }
  if (screen === "gameOver") {
    if (key === "p") {
      screen = "start";
    }
  }
}

// making mario fall when key is released
function keyReleased() {
  if (key === " ") {
    movingDown = true;
    movingUp = false;
  }
}

// making mario jump
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

// making mario's image appear
function displayMario() {
  image(marioImage, mario.X, mario.Y, mario.Width, mario.Height);
}

// making walls move
function moveWall() {
  if (screen === "playing") {
    if (wall.X < 0){
      fill(random(colour));
      wall.X = width;
      wall.Y = random(wallHeight);
      wall.Count ++;
    }
    wall.X -= wall.DX;
    if (wall.Count >= 2) {
      wall.DX = 15;
      mario.DY = 15;
    }
    if (wall.Count >= 4) {
      wall.DX = 20;
      mario.DY = 20;
    }
    if (wall.Count >= 6) {
      wall.DX = 30;
      mario.DY = 30;
    }
  }
}

// showing score while playing
function displayScore() {
  text("Score: " + wall.Count, width - width/7, height/8);
}

// making walls appear
function displayWall() {
  rect(wall.X, wall.Y, wall.W, wall.H);
  rect(wall.X - 40, wall.Y, wall.W + 80, 100);
  stroke(230, 255, 200);
  strokeWeight(25);
  rect(wall.X - 5, wall.Y + 20, 15, 60);
  rect(wall.X + 30, wall.Y  + 120, 15, wall.H);
  stroke("black");
  strokeWeight(1)
;}

// making mario rotate and shrink when he dies
function rotateMario() {
  angle += 0.2;
  push();
  translate(mario.X, mario.Y);
  rotate(angle);
  image(marioImage, 0, 0, mario.Width, mario.Height);
  pop();
  if (mario.Width >= 2) {
    mario.Width -= 1;
    mario.Height -= 1;
  }
}

// making it so mario dies when he hits a wall or touches the roof
function hitWall(){
  if (mario.Y + 60 >= wall.Y && mario.X + 60 >= wall.X || mario.Y <= 50) {
    wall.DX = 0;
    mario.DY = 0;
    wall.X = width;
    screen = "gameOver";
  }
}



