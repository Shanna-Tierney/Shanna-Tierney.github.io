// game of life example
// shanna
// april 27, 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
let cols;
let rows;
let resolustion = 40;

function setup() {
  createCanvas(400, 400);
  cols = width / resolustion;
  rows = height / resolustion;

  grid = make2DArray(10, 10);
  for (let i = 0; i < cols; i ++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
}

function draw() {
  background(0);

  

  for (let i = 0; i < cols; i ++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolustion;
      let y = j * resolustion;
      if (grid[i][j] === 1) {
        fill(255);
        stroke(0);
        rect(x, y, resolution - 1, resolution - 1);
      }
    }
  }
  
  let next = make2DArray(cols, rows);

  for (let i = 0; i < cols; i ++) {
    for (let j = 0; j < rows; j++) {
      let sum = 0;
      let neighbors = count()
    }
  }
  grid = next;
}

function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = 0; i <2; i++) {

  }
}