function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background("#12FF05");
}

function draw() {
  noFill();

  let myColor = lerpColor(color("black"), color("red"), frameCount / 2000);

  stroke(myColor);
  translate(width / 2, height / 2);
  rotate(frameCount * 3);
  scale(frameCount / 300);
  rect(100, 20, 100, 30, 40, 60, 100, 80);
}
