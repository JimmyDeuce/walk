const TILE_SIZE = 64;
const MOVE_SPEED = 1.5; // Multiply by tile size

function house(context) {
    const STARTING_POS = context.vec2(5, 4);
    const maps = [
        [
            "||||||||||",
            "|========|",
            "|========|",
            "|========|",
            "|========|",
            "|========|",
            "|========|",
            "||||==||||",
            "   |==|   ",
            "||||==||||",
            "|========|",
            "|========|",
            "|========|",
            "|========|",
            "|========|",
            "|========|",
            "||||||||||"
        ]
    ]

    const levelCfg = {
        width : TILE_SIZE,
        height : TILE_SIZE,
        "|" : [context.sprite("shoji"), context.solid()],
        "=" : [context.sprite("tatami")],
        "@" : [context.sprite("aq")],
        "r" : [context.sprite("rm"), context.solid(), "interactable"],
    }

    const level = context.addLevel(
        maps[0],
        levelCfg
    );

    const player = level.spawn("@", STARTING_POS);

    const rm = level.spawn("r", context.vec2(1,4));

    rm.use(interactable("reimu", context, player));

    player.action(() => {
        player.resolve();
        context.camPos(player.pos);
    });
    movement(context, player);
    interaction(player);
}

function movement(context, player) {
    const dirs = {
		"left": context.vec2(-1, 0),
		"right": context.vec2(1, 0),
		"up": context.vec2(0, -1),
		"down": context.vec2(0, 1),
	};

    for (const dir in dirs) {
        // context.keyDown(dir, () => {
        //     player.move(dirs[dir].scale(TILE_SIZE * MOVE_SPEED));
        // });
        // context.keyPressRep(dir, () => {
        //     player.facing = dirs[dir];
        //     if (!player.isMoving()) {
        //         player.takeStep(dirs[dir].scale(TILE_SIZE));
        //     }
        // });
        context.keyPressRep(dir, () => {
            player.setGridPos(player.gridPos.add(dirs[dir]));
        })
    }
}

function interaction(player) {
    player.collides("interactable", (target) => {
        target.interact();
    })
}