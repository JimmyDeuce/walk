const TILE_SIZE = 64;
const MOVE_SPEED = 1.5; // Multiply by tile size
const MOVEMENT_BLOCKERS = ["|"];

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
    }

    const level = context.addLevel(
        maps[0],
        levelCfg
    );

    var blocked = [];

    let i = 0;
    maps[0].forEach(row => {
        row.split("").forEach(symbol => {
            blocked[i] = MOVEMENT_BLOCKERS.includes(symbol);
            i++;
        })
    });

    const player = add([
        context.sprite("aq"),
        context.pos(STARTING_POS.scale(TILE_SIZE)),
        playerCharacter(context, MOVE_SPEED)
    ]);

    const rm = add([
        context.sprite("rm"), 
        context.pos(vec2(1,4).scale(TILE_SIZE)),
        context.solid(),
        "interactable",
        interactable("reimu", context, player)
    ]);

    movement(context, player);
    player.action(() => {
        player.resolve();
        context.camPos(player.pos);
    });
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
        context.keyPressRep(dir, () => {
            player.facing = dirs[dir];
            if (!player.isMoving()) {
                player.takeStep(dirs[dir].scale(TILE_SIZE));
            }
        });
        // context.keyPressRep(dir, () => {
        //     player.setGridPos(player.gridPos.add(dirs[dir]));
        // })
    }
}

function interaction(player) {
    player.collides("interactable", (target) => {
        target.interact();
    })
}