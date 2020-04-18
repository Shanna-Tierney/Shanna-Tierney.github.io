// Arrays and State Variables
// Shanna and Blake Tierney
// April 20, 2020
//
// Extra for Experts:
// Added object arrays, made a variable that keeps track of score, used millis function to rotate Mario when he died. 


let marioImage;
let mario;

let angle = 0;

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

// draw function
function draw() {
  background(120, 140, 220);
  //State variable for changing screen function
  if (screen === "start") {
    drawStartScreen();
  }

  if (screen === "instructions") {
    instructionsScreen();
  }
  
  if (screen === "playing") {
    modePlayingGame();
    
  }

  if (screen === "gameOver") {
    drawGameOverScreen();
  }
}



function drawStartScreen() {
  mario.Width = 100;
  mario.Height = 100;
  wall.Count = 0;
  mario.Y = height - height/7;
  textSize(100);
  fill("green");
  text("Mario Jump Game", width/3.75, height/4);
  fill("red");
  textSize(50);
  text("Press 'S' key to see instructions or space to Start",  width/5, height/2);
  
}

function instructionsScreen() {
  textSize(30);
  fill("black");
  text("The objective of the game is to survive as many walls as you can.", width/4, height/9);
  text("You press space bar to make Mario jump. If you hit the roof or the walls, Mario dies.", width/5, height/4.5);
  text("We'll give you a pitty point, if it's your first turn, to get you started off.", width/4, height/3);
  textSize(75);
  text("Press SPACE to begin.", width/3.5, height-height/3);

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
  rotateMario();
  textSize(100);
  fill("red");
  if (wall.Count === 1) {
    text("You Survived " + wall.Count + " Wall!", width/4.5, height/2);
  }
  else{
    text("You Survived " + wall.Count + " Walls!", width/4.5, height/2);
  }
  fill("green");
  textSize(50);
  text("Press 'P' To Play Again", width/3, height - height/5);
  wall.DX = 10;
  mario.DY = 10;
}

// moving with keys
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
  image(marioImage, mario.X, mario.Y, mario.Width, mario.Height);
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

function displayScore() {
  text("Score: " + wall.Count, width - width/7, height/8);
  
}

// making walls appear
function displayWall() {
  rect(wall.X, wall.Y, wall.W, wall.H);
}

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
  if (mario.Y + 50 >= wall.Y && mario.X + 50 >= wall.X || mario.Y <= 0) {
    wall.DX = 0;
    mario.DY = 0;
    wall.X = width;
    screen = "gameOver";
  }
}



