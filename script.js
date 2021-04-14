
const grid = document.querySelector('#grid');

for (let i = 0; i < 100; i++) {
    const line = document.createElement('div');
    line.classList.add('column');
    line.classList.add('col' + i);
    for (let i = 0; i < 60; i++) {
        let newHole = document.createElement('div')
        newHole.classList.add('hole');
        newHole.classList.add('border');
        newHole.classList.add(i);
        line.append(newHole);
    }
    grid.append(line);
}

let num = 10;
let colNum = 10;
const holes = document.querySelectorAll('.hole');
const colums = document.querySelectorAll('.column');
let selectedHole = colums[colNum].childNodes[num];
let down = true;
let back = false;

selectedHole.classList.add('selected');

document.addEventListener('keydown', function (e) {
    let redNode = document.createElement('div');
    redNode.classList.add('red');
    redNode.classList.add('line');
    let grnNode = document.createElement('div');
    grnNode.classList.add('green');
    grnNode.classList.add('line');
    let bluNode = document.createElement('div');
    bluNode.classList.add('blue');
    bluNode.classList.add('line');
    let emptyNode = document.createElement('div');
    emptyNode.classList.add('black');
    emptyNode.classList.add('line');
    let emptyNode2 = document.createElement('div');
    emptyNode2.classList.add('black');
    emptyNode2.classList.add('line');

    switch (e.code) {
        case 'KeyR':
            console.log(selectedHole.childNodes);
            if (selectedHole.childNodes > 0) {
                break;
            } else {
                selectedHole.append(redNode, emptyNode, emptyNode2);
                if (down === true) {
                    selectNextHole();
                } else selectNextColumn();
            }
            break
        case 'KeyG':
            if (selectedHole.children > 0) {
                break;
            } else {
                selectedHole.append(emptyNode);
                selectedHole.append(grnNode);
                selectedHole.append(emptyNode2);
                if (down === true) {
                    selectNextHole();
                } else selectNextColumn();
            }
            break
        case 'KeyB':
            selectedHole.append(emptyNode);
            selectedHole.append(emptyNode2);
            selectedHole.append(bluNode);
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'KeyC':
            selectedHole.append(emptyNode);
            selectedHole.append(grnNode);
            selectedHole.append(bluNode);
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'KeyM':
            selectedHole.append(redNode);
            selectedHole.append(emptyNode);
            selectedHole.append(bluNode);
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'KeyY':
            selectedHole.append(redNode);
            selectedHole.append(grnNode);
            selectedHole.append(emptyNode);
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'KeyW':
            selectedHole.append(redNode, grnNode, bluNode);
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'KeyX'://grey
            redNode.classList.add('opa50');
            grnNode.classList.add('opa50');
            bluNode.classList.add('opa50');
            selectedHole.append(redNode, grnNode, bluNode);
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'KeyP'://Pank
            bluNode.classList.add('opa50');
            selectedHole.append(redNode, emptyNode, bluNode);
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'KeyU'://pUrple
            redNode.classList.add('opa50');
            selectedHole.append(redNode, emptyNode, bluNode);
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'KeyS'://seafoam
            grnNode.classList.add('opa50');
            selectedHole.append(emptyNode, grnNode, bluNode);
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'KeyI'://lime
            redNode.classList.add('opa50');
            selectedHole.append(redNode, grnNode, emptyNode);
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'KeyO'://orange
            grnNode.classList.add('opa50');
            selectedHole.append(redNode, grnNode, emptyNode);
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'Space':
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        //vim directions 
        case 'KeyL':
            selectedHole = colums[colNum++].childNodes[num];
            reselect(selectedHole);
            break
        case 'KeyH':
            selectedHole = colums[colNum--].childNodes[num];
            reselect(selectedHole);
            break
        case 'KeyK':
            selectedHole = colums[colNum].childNodes[num--];
            reselect(selectedHole);
            break
        case 'KeyJ':
            selectedHole = colums[colNum].childNodes[num++];
            reselect(selectedHole);
            break
        case 'Backspace':
            removeAllChildNodes(selectedHole);
            break
        case 'ArrowDown':
            down = true;
            downSwitch.classList.remove('rotate');
            break
        case 'ArrowRight':
            down = false;
            downSwitch.classList.add('rotate');
            break

    }
});

function selectNextHole() {
    selectedHole = colums[colNum].childNodes[num++];
    reselect(selectedHole);
}
function selectNextColumn() {
    selectedHole = colums[colNum++].childNodes[num];
    reselect(selectedHole);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

function reselect(item) {
    lastSelected = document.querySelectorAll('.selected');
    if (lastSelected) lastSelected.forEach(el => {
        el.classList.remove('selected');
    });
    item.classList.add('selected');
}

const downSwitch = document.querySelector('.downSwitch');
let clear = false;

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('hole')) {
        selectedHole = e.target;
        reselect(selectedHole);
        if (clear === false) {
            num = e.target.classList[2];
            if (num === "selected" || num === "border") {
                num = e.target.classList[1];
            }
        } else { num = e.target.classList[1]; }
        let col = String(selectedHole.parentElement.classList[1]);
        colNum = Number(col.substring(3));

        console.log('two numbers are: ', num, colNum);
    } else if (e.target.classList.contains('downSwitch')) {
        down = !down;
        downSwitch.classList.toggle('rotate')
    }
    else {
        holes.forEach(hole => {
            clear = !clear;
            hole.classList.toggle('border')
        })
    }

})
