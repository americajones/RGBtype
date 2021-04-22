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

let num = 0;
let colNum = 0;
const holes = document.querySelectorAll('.hole');
const columns = document.querySelectorAll('.column');
let selectedHole = columns[colNum].childNodes[num];
let down = true;
let back = false;
const downSwitch = document.querySelector('.downSwitch');
let clear = false;

selectedHole.classList.add('selected');

function displayTitle() {
    addNode('line', 'red', columns[14].childNodes[4]);
    addNode('line', 'red', columns[14].childNodes[3]);
    addNode('line', 'red', columns[14].childNodes[5]);
    addNode('line', 'red', columns[14].childNodes[6]);
    addNode('line', 'red', columns[14].childNodes[7]);
    addNode('line', 'red', columns[14].childNodes[8]);
    addNode('line', 'red', columns[14].childNodes[9]);
    addNode('line', 'red', columns[15].childNodes[3]);
    addNode('line', 'red', columns[16].childNodes[3]);
    addNode('line', 'red', columns[15].childNodes[6]);
    addNode('line', 'red', columns[16].childNodes[6]);
    addNode('line', 'red', columns[17].childNodes[5]);
    addNode('line', 'red', columns[17].childNodes[4]);
    addNode('line', 'red', columns[17].childNodes[7]);
    addNode('line', 'red', columns[17].childNodes[8]);
    addNode('line', 'red', columns[17].childNodes[9]);
    addNode('line', 'green', columns[19].childNodes[8]);
    addNode('line', 'green', columns[19].childNodes[7]);
    addNode('line', 'green', columns[19].childNodes[6]);
    addNode('line', 'green', columns[19].childNodes[5]);
    addNode('line', 'green', columns[19].childNodes[4]);
    addNode('line', 'green', columns[20].childNodes[3]);
    addNode('line', 'green', columns[21].childNodes[3]);
    addNode('line', 'green', columns[20].childNodes[9]);
    addNode('line', 'green', columns[22].childNodes[4]);
    addNode('line', 'green', columns[21].childNodes[9]);
    addNode('line', 'green', columns[21].childNodes[7]);
    addNode('line', 'green', columns[22].childNodes[7]);
    addNode('line', 'green', columns[22].childNodes[8]);
    addNode('line', 'blue', columns[24].childNodes[9]);
    addNode('line', 'blue', columns[24].childNodes[8]);
    addNode('line', 'blue', columns[24].childNodes[7]);
    addNode('line', 'blue', columns[24].childNodes[6]);
    addNode('line', 'blue', columns[24].childNodes[5]);
    addNode('line', 'blue', columns[24].childNodes[4]);
    addNode('line', 'blue', columns[24].childNodes[3]);
    addNode('line', 'blue', columns[25].childNodes[3]);
    addNode('line', 'blue', columns[26].childNodes[3]);
    addNode('line', 'blue', columns[25].childNodes[6]);
    addNode('line', 'blue', columns[26].childNodes[6]);
    addNode('line', 'blue', columns[25].childNodes[9]);
    addNode('line', 'blue', columns[26].childNodes[9]);
    addNode('line', 'blue', columns[27].childNodes[8]);
    addNode('line', 'blue', columns[27].childNodes[7]);
    addNode('line', 'blue', columns[27].childNodes[5]);
    addNode('line', 'blue', columns[27].childNodes[4]);
    addNode('line', 'white', columns[30].childNodes[6]);
    addNode('line', 'white', columns[31].childNodes[6]);
    addNode('line', 'white', columns[32].childNodes[6]);
    addNode('line', 'white', columns[31].childNodes[7]);
    addNode('line', 'white', columns[31].childNodes[5]);
    addNode('line', 'white', columns[31].childNodes[4]);
    addNode('line', 'white', columns[31].childNodes[8]);
    addNode('line', 'white', columns[32].childNodes[9]);
    addNode('line', 'white', columns[33].childNodes[8]);
    addNode('line', 'white', columns[35].childNodes[8]);
    addNode('line', 'white', columns[35].childNodes[6]);
    addNode('line', 'white', columns[35].childNodes[7]);
    addNode('line', 'white', columns[36].childNodes[9]);
    addNode('line', 'white', columns[37].childNodes[8]);
    addNode('line', 'white', columns[37].childNodes[6]);
    addNode('line', 'white', columns[37].childNodes[7]);
    addNode('line', 'white', columns[37].childNodes[10]);
    addNode('line', 'white', columns[37].childNodes[11]);
    addNode('line', 'white', columns[36].childNodes[12]);
    addNode('line', 'white', columns[35].childNodes[11]);
    addNode('line', 'white', columns[39].childNodes[11]);
    addNode('line', 'white', columns[39].childNodes[12]);
    addNode('line', 'white', columns[39].childNodes[10]);
    addNode('line', 'white', columns[39].childNodes[9]);
    addNode('line', 'white', columns[39].childNodes[8]);
    addNode('line', 'white', columns[39].childNodes[7]);
    addNode('line', 'white', columns[39].childNodes[6]);
    addNode('line', 'white', columns[40].childNodes[6]);
    addNode('line', 'white', columns[41].childNodes[8]);
    addNode('line', 'white', columns[41].childNodes[7]);
    addNode('line', 'white', columns[40].childNodes[9]);
    addNode('line', 'white', columns[44].childNodes[9]);
    addNode('line', 'white', columns[43].childNodes[8]);
    addNode('line', 'white', columns[43].childNodes[7]);
    addNode('line', 'white', columns[44].childNodes[6]);
    addNode('line', 'white', columns[45].childNodes[9]);
    addNode('line', 'white', columns[45].childNodes[7]);
    addNode('dot', 'white', columns[44].childNodes[8]);
    addNode('line', 'magenta', columns[49].childNodes[7]);
    addNode('line', 'magenta', columns[49].childNodes[6]);
    addNode('line', 'magenta', columns[49].childNodes[5]);
    addNode('line', 'magenta', columns[50].childNodes[4]);
    addNode('line', 'magenta', columns[50].childNodes[5]);
    addNode('line', 'magenta', columns[50].childNodes[6]);
    addNode('line', 'magenta', columns[50].childNodes[7]);
    addNode('line', 'magenta', columns[50].childNodes[8]);
    addNode('line', 'magenta', columns[51].childNodes[4]);
    addNode('line', 'magenta', columns[51].childNodes[5]);
    addNode('line', 'magenta', columns[51].childNodes[6]);
    addNode('line', 'magenta', columns[51].childNodes[7]);
    addNode('line', 'magenta', columns[51].childNodes[8]);
    addNode('line', 'magenta', columns[51].childNodes[9]);
    addNode('line', 'magenta', columns[52].childNodes[10]);
    addNode('line', 'magenta', columns[52].childNodes[9]);
    addNode('line', 'magenta', columns[52].childNodes[8]);
    addNode('line', 'magenta', columns[52].childNodes[7]);
    addNode('line', 'magenta', columns[52].childNodes[6]);
    addNode('line', 'magenta', columns[52].childNodes[5]);
    addNode('line', 'magenta', columns[53].childNodes[4]);
    addNode('line', 'magenta', columns[53].childNodes[5]);
    addNode('line', 'magenta', columns[53].childNodes[6]);
    addNode('line', 'magenta', columns[53].childNodes[7]);
    addNode('line', 'magenta', columns[53].childNodes[8]);
    addNode('line', 'magenta', columns[53].childNodes[9]);
    addNode('line', 'magenta', columns[54].childNodes[4]);
    addNode('line', 'magenta', columns[54].childNodes[5]);
    addNode('line', 'magenta', columns[54].childNodes[6]);
    addNode('line', 'magenta', columns[54].childNodes[7]);
    addNode('line', 'magenta', columns[54].childNodes[8]);
    addNode('line', 'magenta', columns[55].childNodes[7]);
    addNode('line', 'magenta', columns[55].childNodes[6]);
    addNode('line', 'magenta', columns[55].childNodes[5]);
    addNode('dot', 'yellow', columns[1].childNodes[5]);
    addNode('dot', 'yellow', columns[69].childNodes[3]);
    addNode('dot', 'yellow', columns[66].childNodes[1]);
    addNode('dot', 'yellow', columns[11].childNodes[2]);
    addNode('dot', 'yellow', columns[7].childNodes[10]);
    addNode('dot', 'yellow', columns[40].childNodes[0]);
    addNode('dot', 'yellow', columns[60].childNodes[8]);
    addNode('dot', 'yellow', columns[90].childNodes[5]);
    addNode('dot', 'yellow', columns[30].childNodes[13]);
    addNode('dot', 'yellow', columns[79].childNodes[12]);
    addNode('dot', 'yellow', columns[99].childNodes[10]);
};
displayTitle();

document.addEventListener('keydown', function () {

})

function addNode(type, color, parent) {
    let Node1 = document.createElement('div');
    let Node2 = document.createElement('div');
    let Node3 = document.createElement('div');
    switch (color) {
        case "red":
            Node1.classList.add('red');
            Node2.classList.add('black');
            Node3.classList.add('black');
            break;
        case "green":
            Node1.classList.add('black');
            Node2.classList.add('green');
            Node3.classList.add('black');
            break;
        case "blue":
            Node1.classList.add('black');
            Node2.classList.add('black');
            Node3.classList.add('blue');
            break;
        case "white":
            Node1.classList.add('red');
            Node2.classList.add('green');
            Node3.classList.add('blue');
            break;
        case "cyan":
            Node1.classList.add('black');
            Node2.classList.add('green');
            Node3.classList.add('blue');
            break;
        case "magenta":
            Node1.classList.add('red');
            Node2.classList.add('black');
            Node3.classList.add('blue');
            break;
        case "yellow":
            Node1.classList.add('red');
            Node2.classList.add('green');
            Node3.classList.add('black');
            break;
        case "grey":
            Node1.classList.add('red');
            Node2.classList.add('green');
            Node3.classList.add('blue');
            Node1.classList.add('opa50');
            Node2.classList.add('opa50');
            Node3.classList.add('opa50');
            break;
        case "pink":
            Node1.classList.add('red');
            Node2.classList.add('black');
            Node3.classList.add('blue');
            Node3.classList.add('opa50');
            break;
        case "purple":
            Node1.classList.add('red');
            Node1.classList.add('opa50');
            Node2.classList.add('black');
            Node3.classList.add('blue');
            break;
        case "seafoam":
            Node1.classList.add('black');
            Node2.classList.add('green');
            Node3.classList.add('blue');
            Node2.classList.add('opa50');
            break;
        case "lime":
            Node1.classList.add('red');
            Node1.classList.add('opa50');
            Node2.classList.add('green');
            Node3.classList.add('black');
            break;
        case "orange":
            Node1.classList.add('red');
            Node2.classList.add('green');
            Node2.classList.add('opa50');
            Node3.classList.add('black');
            break;
    }
    if (type === 'line') {
        Node1.classList.add('line');
        Node2.classList.add('line');
        Node3.classList.add('line');
    } else if (type === 'dot') {
        Node1.classList.add('lowDot');
        Node2.classList.add('lowDot');
        Node3.classList.add('lowDot');
    }
    parent.append(Node1, Node2, Node3)
};

const lineChange = document.querySelector('.lineChange')
const dotChange = document.querySelector('.dotChange')
let nodeType = "line";

lineChange.addEventListener('click', function () {
    nodeType = "line"
});
dotChange.addEventListener('click', function () {
    nodeType = "dot"
});

document.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'KeyR':
            addNode(nodeType, 'red', selectedHole)
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'KeyG':
            addNode(nodeType, 'green', selectedHole)
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'KeyB':
            addNode(nodeType, 'blue', selectedHole)
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'KeyC':
            addNode(nodeType, 'cyan', selectedHole)
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'KeyM':
            addNode(nodeType, 'magenta', selectedHole)
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'KeyY':
            addNode(nodeType, 'yellow', selectedHole)
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'KeyW':
            addNode(nodeType, 'white', selectedHole)
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'KeyX'://grey
            addNode(nodeType, 'grey', selectedHole)
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'KeyP'://Pank
            addNode(nodeType, 'pink', selectedHole)
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'KeyU'://pUrple
            addNode(nodeType, 'purple', selectedHole)
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'KeyS'://seafoam
            addNode(nodeType, 'seafoam', selectedHole)
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'KeyI'://lime
            addNode(nodeType, 'lime', selectedHole)
            if (down === true) {
                selectNextHole();
            } else selectNextColumn();
            break
        case 'KeyO'://orange
            addNode(nodeType, 'orange', selectedHole)
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
            selectedHole = columns[colNum++].childNodes[num];
            reselect(selectedHole);
            break
        case 'KeyH':
            selectedHole = columns[colNum--].childNodes[num];
            reselect(selectedHole);
            break
        case 'KeyK':
            selectedHole = columns[colNum].childNodes[num--];
            reselect(selectedHole);
            break
        case 'KeyJ':
            selectedHole = columns[colNum].childNodes[num++];
            reselect(selectedHole);
            break
        case 'Backspace':
            console.log('BSPACE');
            removeAllChildNodes(selectedHole);
            break
        case 'ArrowDown':
            down = true;
            console.log('ARROW');
            downSwitch.classList.remove('rotate');
            break
        case 'ArrowRight':
            down = false;
            console.log('ARROW');
            downSwitch.classList.add('rotate');
            break

    }
});


function selectNextHole() {
    selectedHole = columns[colNum].childNodes[num++];
    reselect(selectedHole);
}
function selectNextColumn() {
    selectedHole = columns[colNum++].childNodes[num];
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
        // console.log('two numbers are: ', num, colNum);
    } else if (e.target.classList.contains('downSwitch')) {
        down = !down;
        downSwitch.classList.toggle('rotate')
    } else if (e.target.classList.contains('clear')) {
        holes.forEach(hole => {
            removeAllChildNodes(hole);
        })
    }
    else if (e.target.classList.contains('gridTog')) {
        holes.forEach(hole => {
            clear = !clear;
            hole.classList.toggle('border')
        })
    }

});
