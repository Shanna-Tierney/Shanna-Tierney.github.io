// OOP Assignment
// Shanna Tierney
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let radius = random(10, 50);
    fireworks[i] = new Firework(x, y, radius);
  }
}

function draw() {
  background(220);
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

  move() {
    this.x += this.dx;
    this.y += this.dy;
    this.dy += .1;
  }
  
}

function explode() {
    for () {

    }
}

function mousePressed() {
  explode();
}