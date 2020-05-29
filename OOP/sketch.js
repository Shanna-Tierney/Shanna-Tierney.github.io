// OOP Assignment
// Shanna Tierney
// Date
//
// Extra for Experts:
// - added gravity, made defult values for Firework constructor

let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(20);
  for (let firework of fireworks){
    firework.show();
    firework.explode();
    // removing firework from the array
    if (firework.a <= 0){
      fireworks.splice(firework, 1);
    }
  }
}

class Firework {
  constructor(x, y, radius, dx, dy, r = 200, g = 255, b = 255, a = 255){
    this.x = x;
    this.y = y;
    this.radius = radius;
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

  explode() {
    this.x += this.dx;
    this.y += this.dy;
    // gravity, fireworks shoot up then fall down
    if (this.a <= 155) {
      this.dy += .15;
    }
  }
}

function mouseClicked(){   
  for (let i = 0; i < 100; i++){
    let speed = random(1, 3);
    let angle = i * 3;
    let dx = speed * cos(angle);
    let dy = speed * sin(angle);
    let firework = new Firework(mouseX, mouseY, 5, dx, dy);
    fireworks.push(firework);
  }
}