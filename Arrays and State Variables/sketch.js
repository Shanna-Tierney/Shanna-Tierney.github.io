// Arrays and State Variables
// Shanna and Blake Tierney
// April 20, 2020
//
// Extra for Experts:
// Added object arrays, made a variable that keeps track of score, used millis function to rotate Mario when he died. 


let marioImage;
let mario;

let bowser;
let fireBallArray = [];

let movingUp = false;
let movingDown = false;
// state variable
let screen = "start";
//Arrays
let colour = ["blue", "pink", "red", "yellow", "green", "purple", "orange", "lime", "black", "grey", ];
let wallHeight = [800, 780, 760, 740, 720, 700, 680, 660, 640, 620, 600, 580, 560, 540, 520, 500, 480, 460, 440, 420, 400, 380, 360, 340, 320, 300 ];

function preload() {
  marioImage = loadImage("assets/mario.png");
  bowserImage = loadImage("assets/bowser.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  mario = {
    X: width/7,
    Y: height - height/7,
    DY: 10,
  }

  bowser = {
    X: width/2 - 100,
    Y: height/2 - 100,
    DX: 10,
    DY: 10,
  }
  wall = {
    X: width/4,
    W: 300,
    H: height,
    DX: 10,
    Count: -1,
  }

  for (let i=0; i<50; i++) {
    let fireBall = {
      dx: random(-5, 5), 
      dy: random(-5, 5),
      radius: 30,
      x: width, 
      y: random(0, height),
      fillColor: color("red"),
    };
    fireBallArray.push(fireBall);
  }
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
  fill("green");
  text("Mario Jump Game", width/4, height/4);
  fill("red");
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
  if (wall.Count >= 3) {
    bowserLevel();
    fireBalls();
    moveBowser();
  }
}

function drawGameOverScreen() {
  textSize(100);
  fill("red");
  text("You Survived " + wall.Count + " Walls!", width/5, height/2);
  fill("green");
  textSize(50);
  text("Press Space To Try Again", width/3, height - height/5);
  
}

// moving with keys
function keyPressed() {
  if (screen === "start") {
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
    if (wall.X < 0){
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

// making it so mario dies when he hits a wall or touches the roof

function hitWall(){
  if (mario.Y + 100 >= wall.Y && mario.X + 100 >= wall.X || mario.Y <= 0) {
    wall.DX = 0;
    mario.DY = 0;
    wall.X = width;
    screen = "gameOver";
    mario.Y = height - height/7;
  }
  wall.DX = 10;
  mario.DY = 10;
}



function displayBowser() {
  image(bowserImage, bowser.X, bowser.Y, 200, 200);
}

function bowserLevel() {
  wall.X = width;
  wall.DX = 0;
  displayBowser();
}

function moveBowser(){
  let dx = mario.X - bowser.X;
  let dy = mario.Y - bowser.Y;
  let length = Math.sqrt(dx * dx + dy * dy);
  if (length) {
    dx /= length;
    dy /= length;
  }
  bowser.X += dx * millis() * 5;
  bowser.Y += dy * millis() * 5;
}

function fireBalls() {
  for (let i=0; i< fireBallArray.length; i++) {
    let fireBall = fireBallArray[i];
    fireBall.x += fireBall.dx;
    fireBall.y += fireBall.dy;
    fill(fireBall.fillColor);
    ellipse(fireBall.x, fireBall.y, fireBall.radius*2, fireBall.radius*2);
  }
}