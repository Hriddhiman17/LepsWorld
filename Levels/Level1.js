class Level1 {
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
            player.addAnimation("RunningLeft", alienRunningLeft)
            console.log('Player is running towards Left!!')
        } else if (playerState == 'runningRight') {
            player.addAnimation("RunningRight", alienRunningRight)
            console.log('Player is running towards Right!!')
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
        }
        if (keyDown('left')) {
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
        if(player.y < 300){
            player.velocityY = player.velocityY + 1;
        }else{
            player.velocityY = 0;
        }
        drawSprites();
    }
}
