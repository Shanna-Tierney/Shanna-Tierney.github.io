// Arrays and State Variables
// Shanna and Blake Tierney
// April 8, 2020
//
// Extra for Experts:
// Added object arrays, made a variable that keeps track of score, used millis function to rotate Mario when he died. 


let marioImage;
let mario;

let counter;
let waitTime = 500;

let movingUp = false;
let movingDown = false;
// state variable
let screen = "start";
//Arrays
let colour = ["blue", "pink", "red", "yellow", "green", "purple", "orange", "lime", "black", "grey", ];
let wallHeight = [800, 780, 760, 740, 720, 700, 680, 660, 640, 620, 600, 580, 560, 540, 520, 500, 480, 460, 440, 420, 400, 380, 360, 340, 320, 300 ];

function preload() {
  marioImage = loadImage("assets/mario.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
  imageMode(CENTER);

  mario = {
    X: width/7,
    Y: height - height/7,
    DY: 10,
  }

  wall = {
    X: width,
    W: 300,
    H: height,
    DX: 10,
    Count: -1,
  }

  counter = millis();
}

// draw function
function draw() {
  background(120, 140, 220);
  //State variable for changing screen function
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
  wall.Count = 0;
  textSize(100);
  fill("black");
  text("Mario Jump Game", width/4, height/4);
  fill("black");
  textSize(50);
  text("Press Space to Start",  width/3, height/2);
  
}

function modePlayingGame() {
  displayMario();
  moveMario();
  displayWall();
  moveWall();
  hitWall();
  displayScore();
}

function drawGameOverScreen() {
  textSize(100);
  fill("black");
  text("You Survived " + wall.Count + " Walls!", width/5, height/2);
  fill("black");
  textSize(50);
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
      wall.Y = random(wallHeight);
      //calls our array of colours
      fill(random(colour));
      wall.Count ++;
      //console.log(wall.Count);
    }
    wall.X -= wall.DX;
  }
}

function displayScore() {
  text("Score: " + wall.Count, width - width/7, height/8);
  
}

// making walls appear
function displayWall() {
  rect(wall.X, wall.Y, wall.W, wall.H);
}

// making the hitwall for mario and wall

function hitWall(){
  if (mario.Y + 100 >= wall.Y && mario.X + 100 >= wall.X) {
    counter = stopCounter;
    wall.DX = 0;
    mario.DY = 0;
    wall.X = width;

    push(marioImage);
    translate(100, 50);
    while (rotations < 76) {
      if (millis() > stopCounter + waitTime) {
        rotate(1);
        rotations ++;
      }
    }
    rect(0, 0, 75, 100);
    pop(marioImage);

    screen = "gameOver";
    mario.Y = height - height/7;
  }
  wall.DX = 10;
  mario.DY = 10;
}