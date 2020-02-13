// Interactive Scene
// Shanna Tierney
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  let a = random(0, 255);
  fill(r, g, b, a);
  ellipse(mouseX, mouseY, 50, [50]);
}
