function playerCharacter(context, speed) {
    const ctx = context;
    let moving = false;
    let startingPos = ctx.vec2(0, 0);
    let moveVector = ctx.vec2(0, 0);
    let moveProgress = 0;
    return {
        facing : "left",
        speed : speed,
        takeStep(movement) {
            startingPos = this.pos;
            moving = true;
            moveVector = movement;
        },
        isMoving() {
            return moving;
        },
        update() {
            if (moving) {
                moveProgress = Math.min(1, moveProgress + ctx.dt() * this.speed);
                this.pos = startingPos.add(moveVector.scale(moveProgress));
                if (moveProgress == 1) {
                    moving = false;
                    startingPos = ctx.vec2(0, 0);
                    moveVector = ctx.vec2(0, 0);
                    moveProgress = 0;
                }
            }
        },
    };
}