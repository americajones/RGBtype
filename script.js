
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

displayGreeting();

function displayGreeting() {
    let redNode = document.createElement('div');
    redNode.classList.add('red');
    redNode.classList.add('line');
    let redNode2 = document.createElement('div');
    redNode2.classList.add('red');
    redNode2.classList.add('line');
    let redNode3 = document.createElement('div');
    redNode3.classList.add('red');
    redNode3.classList.add('line');
    let redNode4 = document.createElement('div');
    redNode4.classList.add('red');
    redNode4.classList.add('line');
    let redNode5 = document.createElement('div');
    redNode5.classList.add('red');
    redNode5.classList.add('line');
    let redNode6 = document.createElement('div');
    redNode6.classList.add('red');
    redNode6.classList.add('line');
    let redNode7 = document.createElement('div');
    redNode7.classList.add('red');
    redNode7.classList.add('line');
    let redNode8 = document.createElement('div');
    redNode8.classList.add('red');
    redNode8.classList.add('line');
    let redNode9 = document.createElement('div');
    redNode9.classList.add('red');
    redNode9.classList.add('line');
    let redNode10 = document.createElement('div');
    redNode10.classList.add('red');
    redNode10.classList.add('line');
    let redNode11 = document.createElement('div');
    redNode11.classList.add('red');
    redNode11.classList.add('line');
    let redNode12 = document.createElement('div');
    redNode12.classList.add('red');
    redNode12.classList.add('line');
    let redNode13 = document.createElement('div');
    redNode13.classList.add('red');
    redNode13.classList.add('line');
    let redNode14 = document.createElement('div');
    redNode14.classList.add('red');
    redNode14.classList.add('line');
    let redNode15 = document.createElement('div');
    redNode15.classList.add('red');
    redNode15.classList.add('line');
    let redNode16 = document.createElement('div');
    redNode16.classList.add('red');
    redNode16.classList.add('line');
    let redNode17 = document.createElement('div');
    redNode17.classList.add('red');
    redNode17.classList.add('line');
    let redNode18 = document.createElement('div');
    redNode18.classList.add('red');
    redNode18.classList.add('line');
    let redNode19 = document.createElement('div');
    redNode19.classList.add('red');
    redNode19.classList.add('line');
    let redNode20 = document.createElement('div');
    redNode20.classList.add('red');
    redNode20.classList.add('line');
    let redNode21 = document.createElement('div');
    redNode21.classList.add('red');
    redNode21.classList.add('line');
    let redNode22 = document.createElement('div');
    redNode22.classList.add('red');
    redNode22.classList.add('line');
    let redNode23 = document.createElement('div');
    redNode23.classList.add('red');
    redNode23.classList.add('line');
    let redNode24 = document.createElement('div');
    redNode24.classList.add('red');
    redNode24.classList.add('line');
    let redNode25 = document.createElement('div');
    redNode25.classList.add('red');
    redNode25.classList.add('line');
    let redNode26 = document.createElement('div');
    redNode26.classList.add('red');
    redNode26.classList.add('line');
    let redNode27 = document.createElement('div');
    redNode27.classList.add('red');
    redNode27.classList.add('line');
    let redNode28 = document.createElement('div');
    redNode28.classList.add('red');
    redNode28.classList.add('line');
    let redNode29 = document.createElement('div');
    redNode29.classList.add('red');
    redNode29.classList.add('line');
    let redNode30 = document.createElement('div');
    redNode30.classList.add('red');
    redNode30.classList.add('line');
    let redNode31 = document.createElement('div');
    redNode31.classList.add('red');
    redNode31.classList.add('line');
    let redNode32 = document.createElement('div');
    redNode32.classList.add('red');
    redNode32.classList.add('line');
    let redNode33 = document.createElement('div');
    redNode33.classList.add('red');
    redNode33.classList.add('line');
    let redNode34 = document.createElement('div');
    redNode34.classList.add('red');
    redNode34.classList.add('line');
    let redNode35 = document.createElement('div');
    redNode35.classList.add('red');
    redNode35.classList.add('line');
    let redNode36 = document.createElement('div');
    redNode36.classList.add('red');
    redNode36.classList.add('line');
    let redNode37 = document.createElement('div');
    redNode37.classList.add('red');
    redNode37.classList.add('line');
    let redNode38 = document.createElement('div');
    redNode38.classList.add('red');
    redNode38.classList.add('line');
    let redNode39 = document.createElement('div');
    redNode39.classList.add('red');
    redNode39.classList.add('line');
    let redNode40 = document.createElement('div');
    redNode40.classList.add('red');
    redNode40.classList.add('line');
    let redNode41 = document.createElement('div');
    redNode41.classList.add('red');
    redNode41.classList.add('line');
    let redNode42 = document.createElement('div');
    redNode42.classList.add('red');
    redNode42.classList.add('line');
    let redNode43 = document.createElement('div');
    redNode43.classList.add('red');
    redNode43.classList.add('line');
    let redNode44 = document.createElement('div');
    redNode44.classList.add('red');
    redNode44.classList.add('line');
    let redNode45 = document.createElement('div');
    redNode45.classList.add('red');
    redNode45.classList.add('line');
    let redNode46 = document.createElement('div');
    redNode46.classList.add('red');
    redNode46.classList.add('line');
    let redNode47 = document.createElement('div');
    redNode47.classList.add('red');
    redNode47.classList.add('line');
    let redNode48 = document.createElement('div');
    redNode48.classList.add('red');
    redNode48.classList.add('line');
    let redNode49 = document.createElement('div');
    redNode49.classList.add('red');
    redNode49.classList.add('line');
    let redNode50 = document.createElement('div');
    redNode50.classList.add('red');
    redNode50.classList.add('line');
    let redNode51 = document.createElement('div');
    redNode51.classList.add('red');
    redNode51.classList.add('line');
    let redNode52 = document.createElement('div');
    redNode52.classList.add('red');
    redNode52.classList.add('line');
    let redNode53 = document.createElement('div');
    redNode53.classList.add('red');
    redNode53.classList.add('line');
    let redNode54 = document.createElement('div');
    redNode54.classList.add('red');
    redNode54.classList.add('line');
    let redNode55 = document.createElement('div');
    redNode55.classList.add('red');
    redNode55.classList.add('line');
    let redNode56 = document.createElement('div');
    redNode56.classList.add('red');
    redNode56.classList.add('line');
    let redNode57 = document.createElement('div');
    redNode57.classList.add('red');
    redNode57.classList.add('line');
    let redNode58 = document.createElement('div');
    redNode58.classList.add('red');
    redNode58.classList.add('line');
    let redNode59 = document.createElement('div');
    redNode59.classList.add('red');
    redNode59.classList.add('line');
    let redNode60 = document.createElement('div');
    redNode60.classList.add('red');
    redNode60.classList.add('line');
    let redNode61 = document.createElement('div');
    redNode61.classList.add('red');
    redNode61.classList.add('line');
    let redNode62 = document.createElement('div');
    redNode62.classList.add('red');
    redNode62.classList.add('line');
    let redNode63 = document.createElement('div');
    redNode63.classList.add('red');
    redNode63.classList.add('line');
    let redNode64 = document.createElement('div');
    redNode64.classList.add('red');
    redNode64.classList.add('line');
    let redNode65 = document.createElement('div');
    redNode65.classList.add('red');
    redNode65.classList.add('line');
    let redNode66 = document.createElement('div');
    redNode66.classList.add('red');
    redNode66.classList.add('line');
    let grnNode = document.createElement('div');
    grnNode.classList.add('green');
    grnNode.classList.add('line');
    let grnNode2 = document.createElement('div');
    grnNode2.classList.add('green');
    grnNode2.classList.add('line');
    let grnNode3 = document.createElement('div');
    grnNode3.classList.add('green');
    grnNode3.classList.add('line');
    let grnNode4 = document.createElement('div');
    grnNode4.classList.add('green');
    grnNode4.classList.add('line');
    let grnNode5 = document.createElement('div');
    grnNode5.classList.add('green');
    grnNode5.classList.add('line');
    let grnNode6 = document.createElement('div');
    grnNode6.classList.add('green');
    grnNode6.classList.add('line');
    let grnNode7 = document.createElement('div');
    grnNode7.classList.add('green');
    grnNode7.classList.add('line');
    let grnNode8 = document.createElement('div');
    grnNode8.classList.add('green');
    grnNode8.classList.add('line');
    let grnNode9 = document.createElement('div');
    grnNode9.classList.add('green');
    grnNode9.classList.add('line');
    let grnNode10 = document.createElement('div');
    grnNode10.classList.add('green');
    grnNode10.classList.add('line');
    let grnNode11 = document.createElement('div');
    grnNode11.classList.add('green');
    grnNode11.classList.add('line');
    let grnNode12 = document.createElement('div');
    grnNode12.classList.add('green');
    grnNode12.classList.add('line');
    let grnNode13 = document.createElement('div');
    grnNode13.classList.add('green');
    grnNode13.classList.add('line');
    let grnNode14 = document.createElement('div');
    grnNode14.classList.add('green');
    grnNode14.classList.add('line');
    let grnNode15 = document.createElement('div');
    grnNode15.classList.add('green');
    grnNode15.classList.add('line');
    let grnNode16 = document.createElement('div');
    grnNode16.classList.add('green');
    grnNode16.classList.add('line');
    let grnNode17 = document.createElement('div');
    grnNode17.classList.add('green');
    grnNode17.classList.add('line');
    let grnNode18 = document.createElement('div');
    grnNode18.classList.add('green');
    grnNode18.classList.add('line');
    let grnNode19 = document.createElement('div');
    grnNode19.classList.add('green');
    grnNode19.classList.add('line');
    let grnNode20 = document.createElement('div');
    grnNode20.classList.add('green');
    grnNode20.classList.add('line');
    let grnNode21 = document.createElement('div');
    grnNode21.classList.add('green');
    grnNode21.classList.add('line');
    let grnNode22 = document.createElement('div');
    grnNode22.classList.add('green');
    grnNode22.classList.add('line');
    let grnNode23 = document.createElement('div');
    grnNode23.classList.add('green');
    grnNode23.classList.add('line');
    let grnNode24 = document.createElement('div');
    grnNode24.classList.add('green');
    grnNode24.classList.add('line');
    let grnNode25 = document.createElement('div');
    grnNode25.classList.add('green');
    grnNode25.classList.add('line');
    let grnNode26 = document.createElement('div');
    grnNode26.classList.add('green');
    grnNode26.classList.add('line');
    let grnNode27 = document.createElement('div');
    grnNode27.classList.add('green');
    grnNode27.classList.add('line');
    let grnNode28 = document.createElement('div');
    grnNode28.classList.add('green');
    grnNode28.classList.add('line');
    let grnNode29 = document.createElement('div');
    grnNode29.classList.add('green');
    grnNode29.classList.add('line');
    let grnNode30 = document.createElement('div');
    grnNode30.classList.add('green');
    grnNode30.classList.add('line');
    let grnNode31 = document.createElement('div');
    grnNode31.classList.add('green');
    grnNode31.classList.add('line');
    let grnNode32 = document.createElement('div');
    grnNode32.classList.add('green');
    grnNode32.classList.add('line');
    let grnNode33 = document.createElement('div');
    grnNode33.classList.add('green');
    grnNode33.classList.add('line');
    let grnNode34 = document.createElement('div');
    grnNode34.classList.add('green');
    grnNode34.classList.add('line');
    let grnNode35 = document.createElement('div');
    grnNode35.classList.add('green');
    grnNode35.classList.add('line');
    let grnNode36 = document.createElement('div');
    grnNode36.classList.add('green');
    grnNode36.classList.add('line');
    let grnNode37 = document.createElement('div');
    grnNode37.classList.add('green');
    grnNode37.classList.add('line');
    let grnNode38 = document.createElement('div');
    grnNode38.classList.add('green');
    grnNode38.classList.add('line');
    let grnNode39 = document.createElement('div');
    grnNode39.classList.add('green');
    grnNode39.classList.add('line');
    let grnNode40 = document.createElement('div');
    grnNode40.classList.add('green');
    grnNode40.classList.add('line');
    let grnNode41 = document.createElement('div');
    grnNode41.classList.add('green');
    grnNode41.classList.add('line');
    let grnNode42 = document.createElement('div');
    grnNode42.classList.add('green');
    grnNode42.classList.add('line');
    let grnNode43 = document.createElement('div');
    grnNode43.classList.add('green');
    grnNode43.classList.add('line');
    let grnNode44 = document.createElement('div');
    grnNode44.classList.add('green');
    grnNode44.classList.add('line');
    let grnNode45 = document.createElement('div');
    grnNode45.classList.add('green');
    grnNode45.classList.add('line');
    let grnNode46 = document.createElement('div');
    grnNode46.classList.add('green');
    grnNode46.classList.add('line');
    let grnNode47 = document.createElement('div');
    grnNode47.classList.add('green');
    grnNode47.classList.add('line');
    let grnNode48 = document.createElement('div');
    grnNode48.classList.add('green');
    grnNode48.classList.add('line');
    let grnNode49 = document.createElement('div');
    grnNode49.classList.add('green');
    grnNode49.classList.add('line');
    let grnNode50 = document.createElement('div');
    grnNode50.classList.add('green');
    grnNode50.classList.add('line');
    let bluNode = document.createElement('div');
    bluNode.classList.add('blue');
    bluNode.classList.add('line');
    let bluNode2 = document.createElement('div');
    bluNode2.classList.add('blue');
    bluNode2.classList.add('line');
    let bluNode3 = document.createElement('div');
    bluNode3.classList.add('blue');
    bluNode3.classList.add('line');
    let bluNode4 = document.createElement('div');
    bluNode4.classList.add('blue');
    bluNode4.classList.add('line');
    let bluNode5 = document.createElement('div');
    bluNode5.classList.add('blue');
    bluNode5.classList.add('line');
    let bluNode6 = document.createElement('div');
    bluNode6.classList.add('blue');
    bluNode6.classList.add('line');
    let bluNode7 = document.createElement('div');
    bluNode7.classList.add('blue');
    bluNode7.classList.add('line');
    let bluNode8 = document.createElement('div');
    bluNode8.classList.add('blue');
    bluNode8.classList.add('line');
    let bluNode9 = document.createElement('div');
    bluNode9.classList.add('blue');
    bluNode9.classList.add('line');
    let bluNode10 = document.createElement('div');
    bluNode10.classList.add('blue');
    bluNode10.classList.add('line');
    let bluNode11 = document.createElement('div');
    bluNode11.classList.add('blue');
    bluNode11.classList.add('line');
    let bluNode12 = document.createElement('div');
    bluNode12.classList.add('blue');
    bluNode12.classList.add('line');
    let bluNode13 = document.createElement('div');
    bluNode13.classList.add('blue');
    bluNode13.classList.add('line');
    let bluNode14 = document.createElement('div');
    bluNode14.classList.add('blue');
    bluNode14.classList.add('line');
    let bluNode15 = document.createElement('div');
    bluNode15.classList.add('blue');
    bluNode15.classList.add('line');
    let bluNode16 = document.createElement('div');
    bluNode16.classList.add('blue');
    bluNode16.classList.add('line');
    let bluNode17 = document.createElement('div');
    bluNode17.classList.add('blue');
    bluNode17.classList.add('line');
    let bluNode18 = document.createElement('div');
    bluNode18.classList.add('blue');
    bluNode18.classList.add('line');
    let bluNode19 = document.createElement('div');
    bluNode19.classList.add('blue');
    bluNode19.classList.add('line');
    let bluNode20 = document.createElement('div');
    bluNode20.classList.add('blue');
    bluNode20.classList.add('line');
    let bluNode21 = document.createElement('div');
    bluNode21.classList.add('blue');
    bluNode21.classList.add('line');
    let bluNode22 = document.createElement('div');
    bluNode22.classList.add('blue');
    bluNode22.classList.add('line');
    let bluNode23 = document.createElement('div');
    bluNode23.classList.add('blue');
    bluNode23.classList.add('line');
    let bluNode24 = document.createElement('div');
    bluNode24.classList.add('blue');
    bluNode24.classList.add('line');
    let bluNode25 = document.createElement('div');
    bluNode25.classList.add('blue');
    bluNode25.classList.add('line');
    let bluNode26 = document.createElement('div');
    bluNode26.classList.add('blue');
    bluNode26.classList.add('line');
    let bluNode27 = document.createElement('div');
    bluNode27.classList.add('blue');
    bluNode27.classList.add('line');
    let bluNode28 = document.createElement('div');
    bluNode28.classList.add('blue');
    bluNode28.classList.add('line');
    let bluNode29 = document.createElement('div');
    bluNode29.classList.add('blue');
    bluNode29.classList.add('line');
    let bluNode30 = document.createElement('div');
    bluNode30.classList.add('blue');
    bluNode30.classList.add('line');
    let bluNode31 = document.createElement('div');
    bluNode31.classList.add('blue');
    bluNode31.classList.add('line');
    let bluNode32 = document.createElement('div');
    bluNode32.classList.add('blue');
    bluNode32.classList.add('line');
    let bluNode33 = document.createElement('div');
    bluNode33.classList.add('blue');
    bluNode33.classList.add('line');
    let bluNode34 = document.createElement('div');
    bluNode34.classList.add('blue');
    bluNode34.classList.add('line');
    let bluNode35 = document.createElement('div');
    bluNode35.classList.add('blue');
    bluNode35.classList.add('line');
    let bluNode36 = document.createElement('div');
    bluNode36.classList.add('blue');
    bluNode36.classList.add('line');
    let bluNode37 = document.createElement('div');
    bluNode37.classList.add('blue');
    bluNode37.classList.add('line');
    let bluNode38 = document.createElement('div');
    bluNode38.classList.add('blue');
    bluNode38.classList.add('line');
    let bluNode39 = document.createElement('div');
    bluNode39.classList.add('blue');
    bluNode39.classList.add('line');
    let bluNode40 = document.createElement('div');
    bluNode40.classList.add('blue');
    bluNode40.classList.add('line');
    let bluNode41 = document.createElement('div');
    bluNode41.classList.add('blue');
    bluNode41.classList.add('line');
    let bluNode42 = document.createElement('div');
    bluNode42.classList.add('blue');
    bluNode42.classList.add('line');
    let bluNode43 = document.createElement('div');
    bluNode43.classList.add('blue');
    bluNode43.classList.add('line');
    let bluNode44 = document.createElement('div');
    bluNode44.classList.add('blue');
    bluNode44.classList.add('line');
    let bluNode45 = document.createElement('div');
    bluNode45.classList.add('blue');
    bluNode45.classList.add('line');
    let bluNode46 = document.createElement('div');
    bluNode46.classList.add('blue');
    bluNode46.classList.add('line');
    let bluNode47 = document.createElement('div');
    bluNode47.classList.add('blue');
    bluNode47.classList.add('line');
    let bluNode48 = document.createElement('div');
    bluNode48.classList.add('blue');
    bluNode48.classList.add('line');
    let bluNode49 = document.createElement('div');
    bluNode49.classList.add('blue');
    bluNode49.classList.add('line');
    let bluNode50 = document.createElement('div');
    bluNode50.classList.add('blue');
    bluNode50.classList.add('line');
    let bluNode51 = document.createElement('div');
    bluNode51.classList.add('blue');
    bluNode51.classList.add('line');
    let bluNode52 = document.createElement('div');
    bluNode52.classList.add('blue');
    bluNode52.classList.add('line');
    let bluNode53 = document.createElement('div');
    bluNode53.classList.add('blue');
    bluNode53.classList.add('line');
    let bluNode54 = document.createElement('div');
    bluNode54.classList.add('blue');
    bluNode54.classList.add('line');
    let bluNode55 = document.createElement('div');
    bluNode55.classList.add('blue');
    bluNode55.classList.add('line');
    let bluNode56 = document.createElement('div');
    bluNode56.classList.add('blue');
    bluNode56.classList.add('line');
    let bluNode57 = document.createElement('div');
    bluNode57.classList.add('blue');
    bluNode57.classList.add('line');
    let bluNode58 = document.createElement('div');
    bluNode58.classList.add('blue');
    bluNode58.classList.add('line');
    let bluNode59 = document.createElement('div');
    bluNode59.classList.add('blue');
    bluNode59.classList.add('line');
    let bluNode61 = document.createElement('div');
    bluNode61.classList.add('blue');
    bluNode61.classList.add('line');
    let bluNode60 = document.createElement('div');
    bluNode60.classList.add('blue');
    bluNode60.classList.add('line');
    let bluNode62 = document.createElement('div');
    bluNode62.classList.add('blue');
    bluNode62.classList.add('line');
    let bluNode63 = document.createElement('div');
    bluNode63.classList.add('blue');
    bluNode63.classList.add('line');
    let bluNode64 = document.createElement('div');
    bluNode64.classList.add('blue');
    bluNode64.classList.add('line');
    let bluNode65 = document.createElement('div');
    bluNode65.classList.add('blue');
    bluNode65.classList.add('line');
    let bluNode66 = document.createElement('div');
    bluNode66.classList.add('blue');
    bluNode66.classList.add('line');
    let bluNode67 = document.createElement('div');
    bluNode67.classList.add('blue');
    bluNode67.classList.add('line');
    let emptyNode = document.createElement('div');
    emptyNode.classList.add('black');
    emptyNode.classList.add('line');
    let redDot = document.createElement('div');
    redDot.classList.add('red');
    redDot.classList.add('lowDot');
    let grnDot = document.createElement('div');
    grnDot.classList.add('green');
    grnDot.classList.add('lowDot');
    let bluDot = document.createElement('div');
    bluDot.classList.add('blue');
    bluDot.classList.add('lowDot');
    let redDot2 = document.createElement('div');
    redDot2.classList.add('red');
    redDot2.classList.add('lowDot');
    let grnDot2 = document.createElement('div');
    grnDot2.classList.add('green');
    grnDot2.classList.add('lowDot');
    let bluDot2 = document.createElement('div');
    bluDot2.classList.add('blue');
    bluDot2.classList.add('lowDot');
    let emptyNode2 = document.createElement('div');
    emptyNode2.classList.add('black');
    emptyNode2.classList.add('line');
    let emptyNode3 = document.createElement('div');
    emptyNode3.classList.add('black');
    emptyNode3.classList.add('line');
    let emptyNode4 = document.createElement('div');
    emptyNode4.classList.add('black');
    emptyNode4.classList.add('line');
    let emptyNode5 = document.createElement('div');
    emptyNode5.classList.add('black');
    emptyNode5.classList.add('line');
    let emptyNode6 = document.createElement('div');
    emptyNode6.classList.add('black');
    emptyNode6.classList.add('line');
    let emptyNode7 = document.createElement('div');
    emptyNode7.classList.add('black');
    emptyNode7.classList.add('line');
    let emptyNode8 = document.createElement('div');
    emptyNode8.classList.add('black');
    emptyNode8.classList.add('line');
    let emptyNode9 = document.createElement('div');
    emptyNode9.classList.add('black');
    emptyNode9.classList.add('line');
    let emptyNode10 = document.createElement('div');
    emptyNode10.classList.add('black');
    emptyNode10.classList.add('line');
    let emptyNode11 = document.createElement('div');
    emptyNode11.classList.add('black');
    emptyNode11.classList.add('line');
    let emptyNode12 = document.createElement('div');
    emptyNode12.classList.add('black');
    emptyNode12.classList.add('line');
    let emptyNode13 = document.createElement('div');
    emptyNode13.classList.add('black');
    emptyNode13.classList.add('line');
    let emptyNode14 = document.createElement('div');
    emptyNode14.classList.add('black');
    emptyNode14.classList.add('line');
    let emptyNode15 = document.createElement('div');
    emptyNode15.classList.add('black');
    emptyNode15.classList.add('line');
    let emptyNode16 = document.createElement('div');
    emptyNode16.classList.add('black');
    emptyNode16.classList.add('line');
    let emptyNode17 = document.createElement('div');
    emptyNode17.classList.add('black');
    emptyNode17.classList.add('line');
    let emptyNode18 = document.createElement('div');
    emptyNode18.classList.add('black');
    emptyNode18.classList.add('line');
    colums[14].childNodes[3].appendChild(redNode);
    colums[14].childNodes[4].appendChild(redNode2);
    colums[14].childNodes[5].appendChild(redNode3);
    colums[14].childNodes[6].appendChild(redNode4);
    colums[14].childNodes[7].appendChild(redNode5);
    colums[14].childNodes[8].appendChild(redNode6);
    colums[14].childNodes[9].appendChild(redNode7);
    colums[15].childNodes[3].appendChild(redNode8);
    colums[16].childNodes[3].appendChild(redNode9);
    colums[15].childNodes[6].appendChild(redNode10);
    colums[16].childNodes[6].appendChild(redNode11);
    colums[17].childNodes[5].appendChild(redNode12);
    colums[17].childNodes[4].appendChild(redNode13);
    colums[17].childNodes[7].appendChild(redNode14);
    colums[17].childNodes[8].appendChild(redNode15);
    colums[17].childNodes[9].appendChild(redNode16);
    colums[19].childNodes[8].appendChild(grnNode);
    colums[19].childNodes[7].appendChild(grnNode2);
    colums[19].childNodes[6].appendChild(grnNode3);
    colums[19].childNodes[5].appendChild(grnNode4);
    colums[19].childNodes[4].appendChild(grnNode5);
    colums[20].childNodes[3].appendChild(grnNode6);
    colums[21].childNodes[3].appendChild(grnNode7);
    colums[20].childNodes[9].appendChild(grnNode8);
    colums[21].childNodes[9].appendChild(grnNode9);
    colums[22].childNodes[4].appendChild(grnNode10);
    colums[22].childNodes[9].appendChild(grnNode11);
    colums[22].childNodes[7].appendChild(grnNode12);
    colums[23].childNodes[7].appendChild(grnNode13);
    colums[23].childNodes[8].appendChild(grnNode14);
    colums[25].childNodes[9].appendChild(bluNode);
    colums[25].childNodes[8].appendChild(bluNode2);
    colums[25].childNodes[7].appendChild(bluNode3);
    colums[25].childNodes[6].appendChild(bluNode4);
    colums[25].childNodes[5].appendChild(bluNode5);
    colums[25].childNodes[4].appendChild(bluNode6);
    colums[25].childNodes[3].appendChild(bluNode7);
    colums[26].childNodes[3].appendChild(bluNode8);
    colums[26].childNodes[6].appendChild(bluNode9);
    colums[26].childNodes[9].appendChild(bluNode10);
    colums[27].childNodes[3].appendChild(bluNode11);
    colums[27].childNodes[6].appendChild(bluNode12);
    colums[27].childNodes[9].appendChild(bluNode13);
    colums[28].childNodes[8].appendChild(bluNode14);
    colums[28].childNodes[7].appendChild(bluNode15);
    colums[28].childNodes[5].appendChild(bluNode16);
    colums[28].childNodes[4].appendChild(bluNode17);
    colums[31].childNodes[6].append(redNode17, grnNode15, bluNode18);
    colums[32].childNodes[6].append(redNode18, grnNode16, bluNode19);
    colums[33].childNodes[6].append(redNode19, grnNode17, bluNode20);
    colums[34].childNodes[6].append(redNode20, grnNode18, bluNode21);
    colums[32].childNodes[5].append(redNode21, grnNode19, bluNode22);
    colums[32].childNodes[4].append(redNode22, grnNode20, bluNode23);
    colums[32].childNodes[7].append(redNode23, grnNode21, bluNode24);
    colums[32].childNodes[8].append(redNode24, grnNode22, bluNode25);
    colums[33].childNodes[9].append(redNode25, grnNode23, bluNode26);
    colums[34].childNodes[8].append(redNode26, grnNode24, bluNode27);
    colums[36].childNodes[8].append(redNode27, grnNode25, bluNode28);
    colums[36].childNodes[7].append(redNode28, grnNode26, bluNode29);
    colums[37].childNodes[9].append(redNode29, grnNode27, bluNode30);
    colums[38].childNodes[8].append(redNode30, grnNode28, bluNode31);
    colums[38].childNodes[7].append(redNode31, grnNode29, bluNode32);
    colums[38].childNodes[10].append(redNode32, grnNode30, bluNode33);
    colums[38].childNodes[11].append(redNode33, grnNode31, bluNode34);
    colums[36].childNodes[11].append(redNode34, grnNode32, bluNode35);
    colums[37].childNodes[12].append(redNode35, grnNode33, bluNode36);
    colums[40].childNodes[12].append(redNode36, grnNode34, bluNode37);
    colums[40].childNodes[11].append(redNode37, grnNode35, bluNode38);
    colums[40].childNodes[10].append(redNode38, grnNode36, bluNode39);
    colums[40].childNodes[9].append(redNode39, grnNode37, bluNode40);
    colums[40].childNodes[8].append(redNode40, grnNode38, bluNode41);
    colums[40].childNodes[7].append(redNode41, grnNode39, bluNode42);
    colums[41].childNodes[7].append(redNode42, grnNode40, bluNode43);
    colums[41].childNodes[9].append(redNode43, grnNode41, bluNode44);
    colums[42].childNodes[8].append(redNode44, grnNode42, bluNode45);
    colums[44].childNodes[7].append(redNode45, grnNode43, bluNode46);
    colums[44].childNodes[8].append(redNode46, grnNode44, bluNode47);
    colums[45].childNodes[7].append(redDot2, grnDot2, bluDot2);
    colums[45].childNodes[9].append(redNode48, grnNode46, bluNode49);
    colums[46].childNodes[9].append(redNode49, grnNode47, bluNode50);
    colums[46].childNodes[7].append(redNode50, grnNode48, bluNode51);
    colums[45].childNodes[8].append(redDot, grnDot, bluDot);
    colums[50].childNodes[5].append(redNode51, emptyNode2, bluNode52);
    colums[50].childNodes[6].append(redNode52, emptyNode4, bluNode53);
    colums[51].childNodes[4].append(redNode53, emptyNode5, bluNode54);
    colums[51].childNodes[5].append(redNode54, emptyNode6, bluNode55);
    colums[51].childNodes[6].append(redNode55, emptyNode7, bluNode56);
    colums[51].childNodes[7].append(redNode56, emptyNode8, bluNode57);
    colums[52].childNodes[8].append(redNode57, emptyNode9, bluNode58);
    colums[52].childNodes[7].append(redNode58, emptyNode10, bluNode59);
    colums[52].childNodes[6].append(redNode59, emptyNode11, bluNode60);
    colums[52].childNodes[5].append(redNode60, emptyNode12, bluNode61);
    colums[53].childNodes[4].append(redNode61, emptyNode13, bluNode62);
    colums[53].childNodes[5].append(redNode62, emptyNode14, bluNode63);
    colums[53].childNodes[6].append(redNode63, emptyNode15, bluNode64);
    colums[53].childNodes[7].append(redNode64, emptyNode16, bluNode65);
    colums[54].childNodes[6].append(redNode65, emptyNode17, bluNode66);
    colums[54].childNodes[5].append(redNode66, emptyNode18, bluNode67);
}

document.addEventListener('keypress', function (e) {
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
    } else if (e.target.classList.contains('clear')) {
        holes.forEach(hole => {
            removeAllChildNodes(hole);
        })
    }
    else {
        holes.forEach(hole => {
            clear = !clear;
            hole.classList.toggle('border')
        })
    }

});

