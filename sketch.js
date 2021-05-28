var main, ground, deepGround, level1, player, invisibleGround, groundImg, deepGroundImg, alien, alienJumpRight, alienJumpLeft, alienRunningLeft, alienRunningRight,  playerState;

function preload() {
  groundImg = loadImage("./Images/ground.png");
  deepGroundImg = loadImage("./Images/deepGround.png");
  alien = loadImage("./Images/Alien/Alien.png");
  alienJumpRight = loadImage("./Images/Alien/AlienJump/AlienJumpRight.png");
  alienJumpLeft = loadImage("./Images/Alien/AlienJump/AlienJumpLeft.png");
  alienRunningLeft = loadAnimation("./Images/deepGround","./Images/ground");
  alienRunningRight = loadAnimation("./Images/Alien/AlienWalk/AlienWalkRight/AlienRight_1.png","./Images/Alien/AlienWalk/AlienWalkRight/AlienRight_2.png");
}

function setup() {
  createCanvas(700, 400);

  level1 = new Level1();
}

function draw() {
  background(0)
  level1.display();
}
