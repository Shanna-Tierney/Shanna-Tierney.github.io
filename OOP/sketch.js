// OOP Assignment
// Shanna Tierney
// June 3, 2020
//
// Extra for Experts:
// - added gravity, made defult values for constructors, made fireworks appear in circular form and made birds fly at different heights based on x location

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
    // moving bird
    this.x += this.dx;
    // makign birds change the direction they fly
    if (this.x >= 300 && this.x <= 600 || this.x >= 900 && this.x <= 1200 || this.x >= 1500) {
      this.y += this.dy;
    }
    else{
      this.y -= this.dy;
    }
  }

  update() {
    // removing bird from the array
    if (this.x > windowWidth) {
      birds.splice(this, 1);
    }
  }
}

function makeBirds() {
  // making birds every 2 seconds
  let y = random(windowHeight);
  let bird = new Bird(0, y);
  birds.push(bird);
}

function mousePressed(){
  // making 100 firework balls every time mouse is pressed
  for (let i = 0; i < 100; i++){
    // speed, angle, cos and sin used to make circular fireworks
    let speed = random(1, 3);
    let angle = i * 3;
    let dx = speed * sin(angle);
    let dy = speed * cos(angle);
    let firework = new Firework(mouseX, mouseY, 5, dx, dy);
    fireworks.push(firework);
  }
}
