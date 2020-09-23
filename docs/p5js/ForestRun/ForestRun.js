//declare images
var bg;
var sprite;
var logImg;

//declare variables
var frame;
var playerX, playerY;
var obstacleCount;
var logX, logY;
var isJumping = false;

//var man1, man2, man3, man4, man5, man6, man6, man8;

function preload() {
  //load images
  bg = loadImage("data/forest.jpg");
  logImg = loadImage("data/log.png");
  //for (var i = 0; i < 8; i=i+1) {
  //  sprite[i] = loadImage("data/man" + i + ".png");
  //}

  man1 = loadImage("data/man0.png");
  man2 = loadImage("data/man1.png");
  man3 = loadImage("data/man2.png");
  man4 = loadImage("data/man3.png");
  man5 = loadImage("data/man4.png");
  man6 = loadImage("data/man5.png");
  man7 = loadImage("data/man6.png");
  man8 = loadImage("data/man7.png");
  sprite = new Array(man1, man2, man3, man4, man5, man6, man7, man8);
}

function setup() {
  createCanvas(500, 389);

  //set up variables
  frame = 0;
  playerX = 0;
  playerY = 160;
  obstacleCount = 5;
  logX = 500;
  logY = 320;

  //setup text
  textAlign(CENTER);
  textSize(30);
  fill(0, 0, 255);

}


function draw() {
  backGroundScroll();
  drawLog();
  run();
  jump();
  collisionDetection();
  gameOver();
}

function gameOver() {
  if (frameCount > width * 6) {
    noLoop();
    text("You made it through the forest!", width/2, height/2);
  }
}

function keyPressed() {
  if (key == ' ') {
    isJumping = true;
  }
}

function backGroundScroll() {
  image(bg, 0-(frameCount%516), 0);
  image(bg, 450-(frameCount%516), 0);
}



function drawLog() {
  logImg.resize(50, 0);
  image(logImg, logX-frameCount%(width+100), logY);
}

function run() {
  image(sprite[frame], playerX, playerY);
  frame = int(frameCount/5%8);
}

function jump() {
  if (isJumping) {
    playerY--4;
    playerY--4;
    if (playerY == 2) {
      isJumping = false;
    }
  } else if (playerY !=160) {
    playerY++4;
  }
}

function collisionDetection() {
  //print("Player x: " + playerX);
  //println("Player y: " + (playerY+180));
  //println("logX: " + (logX-frameCount%(width+100)));
  if (logX-frameCount%(width+100) <= playerX + 100 &&
    logX-frameCount%(width+100) > playerX &&
    logY < playerY+180) {
    text("Sorry, you didn't make it.", width/2, height/2);
    noLoop();
  }
}
