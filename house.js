const GRID_WIDTH = 10;
const GRID_HEIGHT = 17;
const TILE_SIZE = 64;
const MOVE_SPEED = 1.5; // Multiply by tile size
const MOVEMENT_BLOCKERS = ["|"];
var blocked = [];

function house() {
    const STARTING_POS = vec2(5, 4);
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
        "|" : [sprite("shoji")],
        "=" : [sprite("tatami")],
    }

    const level = addLevel(
        maps[0],
        levelCfg
    );

    let i = 0;
    maps[0].forEach(row => {
        row.split("").forEach(symbol => {
            blocked[i] = MOVEMENT_BLOCKERS.includes(symbol);
            i++;
        })
    });

    const player = add([
        sprite("aq"),
        pos(STARTING_POS.scale(TILE_SIZE)),
        playerCharacter(MOVE_SPEED)
    ]);

    const rm = add([
        sprite("rm"), 
        pos(vec2(1,4).scale(TILE_SIZE)),
        solid(),
        "interactable",
        interactable("reimu", player)
    ]);

    movement(player);
    player.action(() => {
        player.resolve();
        camPos(player.pos);
    });
    interaction(player);
}

function movement(player) {
    const dirs = {
		"left": vec2(-1, 0),
		"right": vec2(1, 0),
		"up": vec2(0, -1),
		"down": vec2(0, 1),
	};

    for (const dir in dirs) {
        // context.keyDown(dir, () => {
        //     player.move(dirs[dir].scale(TILE_SIZE * MOVE_SPEED));
        // });
        keyPressRep(dir, () => {
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