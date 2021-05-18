var player, alien, invisibleGround, ground, groundImg, deepGround, deepGroundImg, playerState;

function preload() {
  groundImg = loadImage("./Images/ground.png");
  deepGroundImg = loadImage("./Images/deepGround.png")
  alien = loadImage("./Images/Alien/Alien.png")
  alienJumpRight = loadImage("./Images/Alien/AlienJump/AlienJumpRight.png")
  alienJumpLeft = loadImage("./Images/Alien/AlienJump/AlienJumpLeft.png")
}

function setup() {
  createCanvas(700, 400);

  player = createSprite(200, 100, 50, 80);
  player.shapeColor = "green";

  invisibleGround = createSprite(350, 360, 400, 20);
  invisibleGround.visible = false;

  playerState = '';
}

function draw() {
  background(255);

  if (playerState == 'runningLeft') {
    console.log('Left')
  } else if (playerState == 'runningRight') {
    console.log('Right')
  } else if (playerState == 'jumpRight'){
    player.addImage(alienJumpRight)
  } else if (playerState == 'jumpLeft'){
    player.addImage(alienJumpLeft)
  } else {
    player.addImage(alien)
  }
  // for (var i = 0; i < 500; i = i + 90) {
  //   deepGround = createSprite(i, 390, 50, 20);
  //   deepGround.addImage(deepGroundImg);
  // }
  // for (var i = 0; i < 500; i = i + 90) {
  //   ground = createSprite(i, 375, 50, 20);
  //   ground.addImage(groundImg);
  // }
  if (keyDown('space') && player.velocityY === 0 && player.y > 150) {
    player.velocityY = player.velocityY - 15;
  } else if (keyDown('left')) {
    player.x = player.x - 10;
    playerState = 'runningLeft';
  } else if (keyDown('right')) {
    player.x = player.x + 10;
    playerState = 'runningRight';
  } 
  if (keyDown('space') && keyDown('right')){
    playerState = 'jumpRight'
  } else if (keyDown('space') && keyDown('left')){
    playerState = 'jumpLeft'
  } else {
    playerState = '';
  }
  player.velocityY = player.velocityY + 1;

  drawSprites();

  player.collide(invisibleGround);
}
