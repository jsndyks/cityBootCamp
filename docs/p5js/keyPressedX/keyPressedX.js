// -- global variable - x position of text
let x =0;

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(18);
  fill(64);
}

// -- do nothing in th edraw loop for now!
function draw() {}

function keyPressed() {
  x+=12;
  // -- put the char held in 'key' at a screen position
  // -- that incresases in x and y with each key press
  text(key,x%width, 100 + 24*int(x/width));
}

function mouseClicked() {
  background(220);
}
