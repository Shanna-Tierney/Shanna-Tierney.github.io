// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let pie;
let scalar = 1.0;

function preload() {
  pie = loadImage("assets/pie.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill("red");
  // rect(mouseX, mouseY, 75, 75);
  image(pie, mouseX, mouseY, scalar*pie.width, scalar*pie.height);
  
}

function mouseWheel(event) {
  print(event.delta);
   if (event.delta <= 0) {
     scalar *= 1.1;
   }
   else  {
     scalar *= 0.9;
   }
 }