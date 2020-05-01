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
let resolution = 400/3;

function setup() {
  createCanvas(400, 400);

  cols = width/resolution;
  rows = height/resolution; 

  grid = make2DArray(3, 3);
}


function draw() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;

      fill(255);
      stroke(0);
      rect(x,y,resolution-1,resolution-1);
  
    }
  }
}
