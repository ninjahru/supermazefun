
let shark: Sprite = null
tiles.setTilemap(tilemap`level`)
let player1 = sprites.create(img`
    . . . 5 . . . . . . . . 5 . . . 
    . . . . 5 . . . . . . 5 . . . . 
    . . . . . 5 . . . . 5 . . . . . 
    . . . . . . 5 . . 5 . . . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 . . . . . . 5 . . . . 
    . . . . 5 . a . . a . 5 . . . . 
    . . . . 5 . . . . . . 5 . . . . 
    . . 5 . 5 5 5 5 5 5 5 5 . 5 . . 
    . . 5 5 . . . 5 5 . . . 5 5 . . 
    . . . 5 5 . . 5 5 . . 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . 5 . . . . 5 . . . . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `, 0)
controller.moveSprite(player1)
player1.setFlag(SpriteFlag.StayInScreen, true)
scene.cameraFollowSprite(player1)
player1.say("I am hungry for some apples ", 5000)
game.onUpdateInterval(500, function () {
    shark = sprites.create(img`
        . . . . . 3 3 b 3 3 d d 3 3 . . 
        . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
        . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
        . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
        . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
        . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
        . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
        . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
        . 4 4 d 1 1 1 1 1 1 d d d b b . 
        . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
        4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
        4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
        4 5 5 d 5 5 d b b b d d 3 . . . 
        4 5 5 5 d d d d 4 4 b 3 . . . . 
        . 4 5 5 5 4 4 4 . . . . . . . . 
        . . 4 4 4 . . . . . . . . . . . 
        `, SpriteKind.Food)
    shark.setPosition(200, Math.randomRange(0, 200))
    shark.setVelocity(-60, 0)
    shark.follow(player1,20)
})

