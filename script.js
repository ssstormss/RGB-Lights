let colorlist = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(253);
}

function draw() {
  noStroke()
  fill(random(colorlist));
  ellipse(mouseX, mouseY, 10000000, 10000000);
}