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
loadRoot("assets/");
loadSprite("tatami", "tatami.png");
loadSprite("shoji", "shoji.png");
loadSprite("aq", "aq.png");
loadSprite("rm", "rm.png");
loadSprite("heart", "heart.png");

scene("house", () => {

    house();

});

start("house");