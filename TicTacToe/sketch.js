// TicTacToe
// Shanna Tierney
// May 11, 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function make2DArray(cols,rows){
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
let cols = 3;
let rows = 3;
let resolution = 800/3;

let players = ['X', 'O'];
let currentPlayer;
let space = [];

let x;
let y;
let place;
let r;

let screen = "mainMenu";

function setup() {
  createCanvas(800, 800);
  frameRate(1.5);
  cols = width/resolution;
  rows = height/resolution; 
  grid = make2DArray(3, 3);
  currentPlayer = floor(random(players.length));
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      space.push([i, j]);
    }
  }

}


function draw() {
  mainMenu();
  singlePlayer();
  aiMode();
}

function mainMenu() {
  if (screen === "mainMenu") {
    background(100, 150, 200);
    text("Welcome to a game of Tic Tac Toe!", width/3, height/3);
    text("Press 1 for single player, 2 for multiplayer or 3 to watch the computer play against itself.", width/4, height/2);
  }
}

function keyPressed() {
  if (screen === "mainMenu") {
    if (key === "1") {
      screen = "singlePlayer";
    }
    if (key === "2") {
      screen = "multiPlayer";
    }
    if (key === "3") {
      screen = "aiMode";
    }
  }
  // doesn't work
  if (screen === "aiMode") {
    if (key === "r");
    screen = "aiMode"; 
  }
}

function drawGrid() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // setting grid sizes
      let x = i * resolution;
      let y = j * resolution;
      // drawing grid
      fill(255);
      stroke(0);
      strokeWeight(5);
      rect(x - 5, y - 5,resolution + 10,resolution + 10);
    }
  }
}

function singlePlayer() {
  if (screen === "singlePlayer") {
    // text("Click a space where you want to put an 'X'.")
    drawGrid();

  }
}

function aiMode() {
  if (screen === "aiMode") {
    let w = width / 3;
    let h = height / 3;
    drawGrid();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        x = w * i + w / 2;
        y = h * j + h / 2;
        place = grid[i][j];
        textSize(32);
        r = w / 4;
        drawO();
        drawX();
      }
    }
  
    let result = checkWinner();
    if (result != null) {
      noLoop();
      let resultP = createP('');
      resultP.style('font-size', '32pt');
      if (result === 'tie') {
        resultP.html('Tie!');
      } 
      else {
        resultP.html(`${result} wins!`);
      }
    } 
    else {
      nextTurn();
    }
  }
}

function drawX() {
  if (place === players[0]) {
    line(x - r, y - r, x + r, y + r);
    line(x + r, y - r, x - r, y + r);
  }
}

function drawO() {
  if (place === players[1]) {
    noFill();
    ellipse(x, y, r * 2);
  } 
}

function equals3(a, b, c) {
  return a === b && b === c && a != '';
}

function checkWinner() {
  let winner = null;

  // horizontal
  for (let i = 0; i < 3; i++) {
    if (equals3(grid[i][0], grid[i][1], grid[i][2])) {
      winner = grid[i][0];
    }
  }

  // Vertical
  for (let i = 0; i < 3; i++) {
    if (equals3(grid[0][i], grid[1][i], grid[2][i])) {
      winner = grid[0][i];
    }
  }

  // Diagonal
  if (equals3(grid[0][0], grid[1][1], grid[2][2])) {
    winner = grid[0][0];
  }
  if (equals3(grid[2][0], grid[1][1], grid[0][2])) {
    winner = grid[2][0];
  }

  if (winner === null && space.length === 0) {
    return 'tie';
  } 
  else {
    return winner;
  }
}

function nextTurn() {
  let spaceLeft = random(space.length);
  let place = space.splice(spaceLeft, 1)[0];
  let i = place[0];
  let j = place[1];
  grid[i][j] = players[currentPlayer];
  currentPlayer = (currentPlayer + 1) % players.length;
}