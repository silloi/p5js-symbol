function setup() {
  createCanvas(400, 400, SVG);
}

function draw() {
  background(255);
  
  const centerX = width / 2;
  const centerY = height / 2;

  const unit = height / 14;
  
  noStroke();

  // corns
  fill(0);
  triangle(centerX, centerY, centerX - unit * 7, centerY - unit * 9 * sin(30 / 180 * PI), centerX - unit * 4, centerY)
  triangle(centerX, centerY, centerX + unit * 7, centerY - unit * 9 * sin(30 / 180 * PI), centerX + unit * 4, centerY)
  
  // circle
  fill(0);
  circle(centerX, centerY, unit * 12);

  // cutting
  fill(255);
  triangle(centerX, centerY, centerX - unit * 7, centerY - unit * 9 * sin(30 / 180 * PI), centerX - unit * 9 * sin(45 / 180 * PI),  centerY - unit * 9 * sin(45 / 180 * PI))
  triangle(centerX, centerY, centerX + unit * 7, centerY - unit * 9 * sin(30 / 180 * PI), centerX + unit * 9 * sin(45 / 180 * PI),  centerY - unit * 9 * sin(45 / 180 * PI))

  // circle  
  fill(255);
  circle(centerX, centerY, unit * 10);
  
  // corns
  fill(0);
  triangle(unit * 4, unit * 3, unit * 5, unit * 2.2, unit * 5, unit * 3.5)
  
  triangle(width - unit * 4, unit * 3, width - unit * 5, unit * 2.2, width - unit * 5, unit * 3.5)

  fill(0);
  circle(centerX, centerY, unit * 8);
  
  fill(255);
  circle(centerX, centerY, unit * 6);

  // ying yang outline
  
  fill(0);
  circle(centerX, centerY - unit * 2, unit * 4);
  
  fill(255);
  circle(centerX + 2, centerY - unit * 1.5, unit * 3);

  fill(0);
  circle(centerX, centerY + unit * 2, unit * 4);
  
  fill(255);
  circle(centerX - 2, centerY + unit * 1.5, unit * 3);

  fill(255);
  rect(centerX, centerY - unit * 3, - unit * 3, unit * 3);
  
  fill(255);
  rect(centerX, centerY, unit * 3, unit * 3);
  
  // overwrap
  strokeWeight(unit);
  stroke(0);
  noFill();
  circle(centerX, centerY, unit * 7);
  
  noStroke();
  
  // tail
  fill(255);
  arc(centerX, centerY, unit * 6, unit * 8.5, 0, HALF_PI);
  
  // bottom corn
  fill(255);
  triangle(centerX, centerY - unit * 3, centerX - unit * 0.8, centerY + unit * 4, centerX + unit * 0.8, centerY + unit * 4);
  
  fill(0);
  triangle(centerX, centerY - unit * 1.5, centerX - unit * 0.6, centerY + unit * 5 + 4, centerX + unit * 0.6, centerY + unit * 5 + 4);
}