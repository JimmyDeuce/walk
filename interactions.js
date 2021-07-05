function interactable(name, k, aq) {
    switch (name) {
        case "reimu":
            return reimu(k, aq);
            break;
    
        default:
            break;
    }
}

function reimu(ctx, player) {
    const k = ctx;
    const aq = player;
    return {
        interact() {
            makeHearts(k, aq, this);
        }
    }
}

function makeHearts(k, a, b) {
    const hearts = [
        k.add([k.sprite("heart"), k.pos(a.pos.add(0, -64))]),
        k.add([k.sprite("heart"), k.pos(b.pos.add(0, -64))])
    ];
    k.wait(1, () => {
        hearts.forEach(heart => {
            k.destroy(heart);
        });
    });
}