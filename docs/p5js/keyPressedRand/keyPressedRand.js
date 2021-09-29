let x =0;

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(18);
}

function draw() {}

function keyPressed() {
  fill(64);
  // text(key,x, height/2);
  x+=12;
  //text(key,x%width, height/2 + 24*int(x/width));
  //  text(key,width/2, height/2);
    text(key,random(20,width-20),random(20,height-20));
  // text(key, frameCount % width, random(100, height - 100));
}

function mouseClicked() {
  background(220);
}
