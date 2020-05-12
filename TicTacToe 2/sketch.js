// TicTacToe
// Shanna Tierney
// May 11, 2020
//
// Extra for Experts:
// - Added sound, drew a winning line (for aiMode, you have to click again to draw it in multiplayer), added html/css for visual appeal, made two game modes (ai + multiplayer)

function make2DArray(cols,rows){
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

// setting variables
let grid = make2DArray(3, 3);
let cols;
let rows;
let players = ["X", "O"];
let currentPlayer;
let space = [];
let spaceLeft = 9;
let w;
let h;
let screen = "mainMenu";

function setup() {
  canvas = createCanvas(800, 800);
  canvas.center();
  frameRate(1.5);
  w = width / 3;
  h = height / 3;
  cols = width/w;
  rows = height/h; 
  currentPlayer = floor(random(players.length));
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      space.push([i, j]);
      grid[i][j] = 0;
    }
  }
}

function preload() {
  soundFormats('ogg');
  sound1 = loadSound('assets/whoosh2');
}

function draw() {
  mainMenu();
  multiplayer();
  aiMode();
}

function mainMenu() {
  if (screen === "mainMenu") {
    background(173, 216, 230);
  }
}

function keyPressed() {
  if (screen === "mainMenu") {
    if (key === "1") {
      screen = "multiplayer";
    }
    if (key === "2") {
      screen = "aiMode";
    }
  }
}

function multiplayer() {
  if (screen === "multiplayer") {
    drawGrid();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[i][j] === players[0]) {
          drawX();
        }
        if (grid[i][j] === players[1]) {
          drawO();
        }
      }
    }
  }
}

function aiMode() {
  if (screen === "aiMode") {
    drawGrid();
    drawO();
    drawX();
    printResults();
  }
}

function drawGrid() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // setting box sizes
      let x = i * w;
      let y = j * h;
      // drawing grid
      fill(255);
      stroke(0);
      strokeWeight(5);
      rect(x - 5, y - 5, w + 10, h + 10);
    }
  }
}

function drawX() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // setting X size
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let place = grid[i][j];
      let r = w / 4;
      // if place belongs to "X" draw X
      if (place === players[0]) {
        line(x - r, y - r, x + r, y + r);
        line(x + r, y - r, x - r, y + r);
      }
    }
  }
}

function drawO() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // setting O size
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let place = grid[i][j];
      let r = w / 4;
      // if place belongs to "O" draw O
      if (place === players[1]) {
        noFill();
        ellipse(x, y, r * 2);
      } 
    }
  }
}

function mousePressed() {
  if (screen === "multiplayer") {
    let i = floor(mouseX/w);
    let j = floor(mouseY/h);
    if (currentPlayer === 0) {
      // setting spot to be "X"
      grid[i][j] = players[0];
    }
    if (currentPlayer === 1) {
      // setting spot to be "O"
      grid[i][j] = players[1];
    }
    printResults();
  }
}

// if 3 things are the same
function lineOf3(x, y, z) {
  return x === y && y === z && x != 0;
}

// checks if 3 in a row
function checkLineOf3() {
  let winner = null;

  // checks vertical 
  for (let i = 0; i < 3; i++) {
    if (lineOf3(grid[i][0], grid[i][1], grid[i][2])) {
      line((i + 1)* w - 134, 50, (i + 1)* w - 134, width - 50);
      winner = grid[i][0];
    }
  }

  // checks horizontal
  for (let i = 0; i < 3; i++) {
    if (lineOf3(grid[0][i], grid[1][i], grid[2][i])) {
      line(50, (i + 1)* w - 134, width - 50, (i + 1)* w - 134);
      winner = grid[0][i];
    }
  }

  // checks diagonal
  if (lineOf3(grid[0][0], grid[1][1], grid[2][2])) {
    line( width - 50,  height - 50, 50, 50);
    winner = grid[0][0];
  }
  if (lineOf3(grid[2][0], grid[1][1], grid[0][2])) {
    line(50, height - 50, width - 50, 50);
    winner = grid[2][0];
  }

  // if no space left and no winner it's a tie
  if (winner === null && space.length === 0 || winner === null && spaceLeft === 0 ) {
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
    resultP.style("font-size", "55pt");
    if (result === "draw") {
      resultP.html("Draw!");
    } 
    else {
      resultP.html(`${result} wins!`);
    }
  } 
  // if game isn't over results aren't shown yet
  else {
    sound1.play();
    if (screen === "aiMode") {
      nextTurn();
    }
    else {
      // swiches current player and removes a space on the grid
      currentPlayer = (currentPlayer + 1) % players.length;
      spaceLeft --;
    }
  }
}

// ai uses the nextTurn() function to pick their place
function nextTurn() {
  let index = floor(random(space.length));
  let place = space.splice(index, 1)[0];
  let i = place[0];
  let j = place[1];
  grid[i][j] = players[currentPlayer];
  currentPlayer = (currentPlayer + 1) % players.length;
}