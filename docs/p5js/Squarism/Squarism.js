var img;
var s = 5;

function preload(){
  img = loadImage("data/Holiday.png");
}

function setup() {
  createCanvas(640, 480);
  
  rectMode(CENTER);
  background(127);
}

function draw() {
  int rx = int(random(-25,25));       // -- integer from -25 to 25 : x offset
  int ry = int(random(-25,25));       // -- integer from -25 to 25 : y offset
  let c = img.get(mouseX+rx, mouseY+ry);  // -- called 'img' at cell mouseX,mouseY.
  fill(c,64);                           // -- Set fill to this semi-opaque colour.
  rect(mouseX, mouseY, s, s);         // -- Then draw a rectangle at
}                                       // -- the mouse position.

