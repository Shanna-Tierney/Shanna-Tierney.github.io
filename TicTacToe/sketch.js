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

let grid = make2DArray(3, 3);
let cols = 3;
let rows = 3;
let resolution = 800/3;

let players = ["X", "O"];
let currentPlayer;
let space = [];
let spaceLeft = 9;

let x;
let y;
let r;
let w;
let h;

let screen = "mainMenu";

function setup() {
  createCanvas(800, 800);
  frameRate(1.5);
  cols = width/resolution;
  rows = height/resolution; 
  w = width / 3;
  h = height / 3;
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
  multiplayer();
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
      screen = "multiplayer";
    }
    if (key === "3") {
      screen = "aiMode";
    }
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

function multiplayer() {
  if (screen === "multiplayer") {
    drawGrid();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[i][j] === players[0]) {
          drawAiX();
        }
        if (grid[i][j] === players[1]) {
          drawAiO();
        }
      }
    }
  }
}

function aiMode() {
  if (screen === "aiMode") {
    drawGrid();
    drawAiO();
    drawAiX();
    printResults();
  }
}


function drawAiX() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      x = w * i + w / 2;
      y = h * j + h / 2;
      let place = grid[i][j];
      r = w / 4;
      if (place === players[0]) {
        line(x - r, y - r, x + r, y + r);
        line(x + r, y - r, x - r, y + r);
      }
    }
  }
}

function drawAiO() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      x = w * i + w / 2;
      y = h * j + h / 2;
      let place = grid[i][j];
      r = w / 4;
      if (place === players[1]) {
        noFill();
        ellipse(x, y, r * 2);
      } 
    }
  }
}

function mousePressed() {
  if (screen === "multiplayer" || screen === "singlePlayer") {
    let i = floor(mouseX/w);
    let j = floor(mouseY/h);
    if (currentPlayer === 0) {
      grid[i][j] = players[0];
    }
    if (currentPlayer === 1) {
      grid[i][j] = players[1];
    }
    printResults();
  }
}

function lineOf3(x, y, z) {
  return x === y && y === z && x != '';
}

function checkLineOf3() {
  let winner = null;

  // checking for horizontal line
  for (let i = 0; i < 3; i++) {
    if (lineOf3(grid[i][0], grid[i][1], grid[i][2])) {
      winner = grid[i][0];
    }
  }

  // checking for vertical line
  for (let i = 0; i < 3; i++) {
    if (lineOf3(grid[0][i], grid[1][i], grid[2][i])) {
      winner = grid[0][i];
    }
  }

  // checking for diagonal line
  if (lineOf3(grid[0][0], grid[1][1], grid[2][2])) {
    winner = grid[0][0];
  }
  if (lineOf3(grid[2][0], grid[1][1], grid[0][2])) {
    winner = grid[2][0];
  }


  if (winner === null && spaceLeft <= 1 || winner === null && space.length === 0) {
    return "draw";
  } 
  else {
    return winner;
  }
}

function printResults() {
  let result = checkLineOf3();
  if (result != null) {
    noLoop();
    let resultP = createP("");
    resultP.style("font-size", "32pt");
    if (result === "draw") {
      resultP.html("Draw!");
    } 
    else {
      resultP.html(`${result} wins!`);
    }
  } 
  // if game isn't over results aren't shown yet
  else {
    if (screen === "aiMode") {
      nextTurn();
    }
    else {
      currentPlayer = (currentPlayer + 1) % players.length;
      spaceLeft --;
      console.log(spaceLeft);
    }
  }
}

function nextTurn() {
  let index = floor(random(space.length));
  let place = space.splice(index, 1)[0];
  let i = place[0];
  let j = place[1];
  grid[i][j] = players[currentPlayer];
  currentPlayer = (currentPlayer + 1) % players.length;
}
