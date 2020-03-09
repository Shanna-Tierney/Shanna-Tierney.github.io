// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cellSize;
let isBlack = true;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowWidth, windowHeight);
  }
  else{
    createCanvas(windowWidth, windowHeight);
  }

  cellSize = width /8;
}

function draw() {
  background(220);
  for(let i = 0; i < 8; i ++) {
    for(let a = 0; a < 8; a ++) {
      if (isBlack) {
        fill(0);
      }
      else{
        fill(255);
      }
      rect(cellSize *i, cellSize *a, cellSize, cellSize);
      isBlack = !isBlack;
    }
    isBlack = !isBlack;
  }
}

function windowResized(){
  setup;
}