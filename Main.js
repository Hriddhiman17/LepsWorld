class Main {
    constructor() { 
        createCanvas(700, 400);
        player = createSprite(200, 100, 50, 80);
        invisibleGround = createSprite(350, 360, 400, 20);
        playerState = '';
        invisibleGround.visible = false;
    }

    display() {
        background(255);

        if (playerState == 'runningLeft') {
            player.setAnimation(alienRunningLeft_1, alienRunningLeft_2)
        } else if (playerState == 'runningRight') {
            // console.log('Right')
        } else if (playerState == 'jumpRight') {
            player.addImage(alienJumpRight)
        } else if (playerState == 'jumpLeft') {
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
        } else {
            playerState = '';
        }
        if (keyDown('space') && keyDown('right')) {
            playerState = 'jumpRight'
        } else if (keyDown('space') && keyDown('left')) {
            playerState = 'jumpLeft'
        }
        player.velocityY = player.velocityY + 1;

        drawSprites();
        player.collide(invisibleGround);
    }
}