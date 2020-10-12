let togglealert;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  background(random (200,255), random(200,255), random (200,255));
}

function draw() {
  noStroke();
  fill(140);
  textSize (15);
  textAlign(CENTER);
  text("press any key to restart", windowWidth/2, windowHeight/2);

  fill(255,255,255);
  stroke (255, 255,255);
  strokeWeight(20);
  point(mouseX, mouseY);

  print(mouseX);

  if(mouseIsPressed){
  smooth();
  stroke (random (200,255), random(200,255), random (200,255));

  strokeWeight(20);
  frameRate(10);
  line(mouseX, mouseY, pmouseX, pmouseY);
  ellipse(mouseX,mouseY,20, 20)
  rect(mouseX, mouseY, 50, 50);

}

}

function keyPressed()
{
    if (togglealert == true)
    {
      background(random (200,255), random(200,255), random (200,255));
      togglealert = false;
    }
    else
    {
      togglealert = true;
      background(random (200,255), random(200,255), random (200,255));
    }

    return false;
}
