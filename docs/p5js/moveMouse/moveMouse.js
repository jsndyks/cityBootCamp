let drawIt = true;
let txtSz=16;

let mouse = "🐁";
let turtle = "🐢";
let rabbit = "🐇";
let duck = "🦆";
let lobster = "🦞";
let crab = "🦀";
let badger = "🦡";
let squirrel = "🐿";
let hedgehog = "🦔";
let pig = "🐖";
let squid = "🦑";

let animal;

function setup () {
  createCanvas(200, 200);
  fill(32);
  textAlign(CENTER);
  animal=rabbit;
}

function draw () {
  if (drawIt) {
    background(240);
    textSize(txtSz);
    text(animal, mouseX, mouseY);
  }
  drawIt = false;
}

function mouseMoved () {
  drawIt=true;
}

function keyPressed() {
  if (key == 'q') animal = squid;
  if (key == 'p') animal = pig;
  if (key == 'h') animal = hedgehog;
  if (key == 'b') animal = badger;
  if (key == 's') animal = squirrel;
  if (key == 'c') animal = crab;
  if (key == 'l') animal = lobster;
  if (key == 'd') animal = duck;
  if (key == 'r') animal = rabbit;
  if (key == 't') animal = turtle;
  if (key == 'm') animal = mouse;
  drawIt=true;
}

function mouseClicked () {
  if (mouseButton == LEFT) {
    txtSz = min(txtSz+2, 96);
  } else {
    txtSz = max(txtSz+2, 6);
  }
  drawIt=true;
}
