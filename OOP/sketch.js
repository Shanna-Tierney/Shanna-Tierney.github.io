// OOP Assignment
// Shanna Tierney
// Date
//
// Extra for Experts:
// - added gravity, made defult values for constructors

let fireworks = [];
let birds = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  window.setInterval(makeBirds, 2000);
}

function draw() {
  background(0);
  for (let firework of fireworks){
    firework.show();
    firework.explode();
    // removing firework from the array
    if (firework.a <= 0){
      fireworks.splice(firework, 1);
    }
    for (let bird of birds) {
      firework.checkCollision(bird);
    }
  }
  for (let bird of birds) {
    bird.display();
    bird.isAlive();
    bird.update();
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

  checkCollision(bird) {
    if (collideRectCircle(bird.x, bird.y, bird.w, bird.h, this.x, this.y, (this.radius) * 2)) {
      bird.dx *= -1;
      bird.color = "blue";
    }
  }
}

class Bird {
  constructor(x, y, dx = 3, dy = 2, w = 50, h = 20, color = "white") {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.w = w;
    this.h = h;
    this.color = color;
  }

  display() {
    noStroke();
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
  }

  isAlive() {
    this.x += this.dx;
    // if (birds % 2 === 0) {
    //   this.y += this.dy;
    // }
    // else{
    //   this.y -= this.dy;
    // }
  }

  update() {
    if (this.x > windowWidth) {
      birds.splice(this, 1);
    }
  }
}

function makeBirds() {
  let y = random(windowHeight);
  let bird = new Bird(0, y);
  birds.push(bird);
}

function mousePressed(){   
  for (let i = 0; i < 100; i++){
    let speed = random(1, 3);
    let angle = i * 3;
    let dx = speed * sin(angle);
    let dy = speed * cos(angle);
    let firework = new Firework(mouseX, mouseY, 5, dx, dy);
    fireworks.push(firework);
  }
}
