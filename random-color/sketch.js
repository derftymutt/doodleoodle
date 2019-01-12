let randomNumberArray = [];

function setup() {
  createCanvas(windowWidth * 0.98, windowHeight * 0.97);
  strokeWeight(3);
  background(255, 255, 255);
}

function draw() {
  if (mouseIsPressed) {
    paintRandomColor();
  }
}

function mousePressed() {
  var getRandomNumber = function() {
    return random(0, 255);
  }

  randomNumberArray = [getRandomNumber(), getRandomNumber(), getRandomNumber()];
}


function mouseReleased() {
  //background(255, 255, 255);
}

function paintRandomColor() {
  noStroke();
  fill(randomNumberArray[0], randomNumberArray[1], randomNumberArray[2], 150);
  ellipse(mouseX, mouseY, 20, 20);
}
