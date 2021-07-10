function interactable(name, aq) {
    switch (name) {
        case "reimu":
            return reimu(aq);
            break;
    
        default:
            break;
    }
}

function reimu(player) {
    const aq = player;
    return {
        interact() {
            makeHearts(aq, this);
        }
    }
}

function makeHearts(a, b) {
    const hearts = [
        context.add([context.sprite("heart"), context.pos(a.pos.add(0, -64))]),
        context.add([context.sprite("heart"), context.pos(b.pos.add(0, -64))])
    ];
    context.wait(1, () => {
        hearts.forEach(heart => {
            context.destroy(heart);
        });
    });
}