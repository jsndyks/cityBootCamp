var img;
var s = 25;

function preload(){
  img = loadImage("data/Holiday.png");
}

function setup() {
  createCanvas(640, 480);
  
  rectMode(CENTER);
  background(127);
}

function draw() {
  var c = img.get(mouseX, mouseY);
  fill(c);
  rect(mouseX, mouseY, s, s);
  
}
