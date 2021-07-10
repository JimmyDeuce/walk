const context = kaboom({
    global: true,
    scale: 1
});

// context.loadRoot("https://i.imgur.com/");
// context.loadSprite("tatami", "MDVXHxi.png");
// context.loadSprite("shoji", "pgl2bhY.png");
// context.loadSprite("aq", "B8iJWzY.png");
// context.loadSprite("rm", "74bKMMN.png");
// context.loadSprite("heart", "rFm0sO1.png");
context.loadRoot("assets/");
context.loadSprite("tatami", "tatami.png");
context.loadSprite("shoji", "shoji.png");
context.loadSprite("aq", "aq.png");
context.loadSprite("rm", "rm.png");
context.loadSprite("heart", "heart.png");

context.scene("house", () => {

    house();

});

context.start("house");