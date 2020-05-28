// OOP Assignment
// Shanna Tierney
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let f of fireworks) {
    f.move();
    f.show();
  }
}

class Firework {
  constructor(x, y, radius, dx, dy, r, g, b, a) {
    this.x = x;
    this.y = y;
    this.raduis = radius;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  show() {
    noStroke();
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.x, this.y, this.radius);
    this.a -= 2;
  }

  show() {
    this.x += this.dx;
    this.y += this.dy;
    this.dy += .5;
  }
  
}

function mousePressed() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  for (let i = 0; i < 100; i++) {
    let radius = random(10, 50);
    let dx = 5;
    let dy = 5;
    let a = 255;
    fireworks[i] = new Firework(mouseX, mouseY, radius, dx, dy, r, g, b, a);
  }
}