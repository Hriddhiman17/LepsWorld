var player, canvas, ground;

function setup() {
  canvas = createCanvas(700, 400);

  player = createSprite(200, 100, 50, 80);
  player.shapeColor = "green";

  ground = createSprite(350, 375, 700, 20);

}

function draw() {
  background(255);

  if (keyDown('space') && player.velocityY === 0) {
    player.velocityY = player.velocityY - 25;
  }
  if (keyDown('left')) {
    player.x = player.x - 10;
  }
  if (keyDown('right')) {
    player.x = player.x + 10;
  }
  player.velocityY = player.velocityY + 1;
  
  drawSprites();

  player.collide(ground);
}
