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
        add([sprite("heart"), pos(a.pos.add(0, -64))]),
        add([sprite("heart"), pos(b.pos.add(0, -64))])
    ];
    wait(1, () => {
        hearts.forEach(heart => {
            destroy(heart);
        });
    });
}