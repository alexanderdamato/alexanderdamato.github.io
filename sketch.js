let cnv;
let h;
let w;
let R;
let G;
let B;
let A;
R = 0
G = 0
B = 0
A = 0
function setup() {

    cnv = createCanvas(1395, 495);
    background(255);
    cnv.mouseWheel(changeSize);
    h = 40;
    w = 10;

}

function draw() {
    noStroke();
    if (mouseIsPressed) {
        fill(R = random(0, 255), G = random(0, 255), B = random(0, 255),A = random(0, 255));
    } else {
        fill(R, G, B, A );
    }
    if (keyIsDown(32))
        fill(255)
    if (keyIsDown(37))
        R = R + 1
    if (keyIsDown(39))
        B = B + 1
    if (keyIsDown(38))
        G = G + 1
    if (keyIsDown(40))
        A = A + 1
    if (keyIsDown(81))
        R = R - 1
    if (keyIsDown(87))
        B = B - 1
    if (keyIsDown(69))
        G = G - 1
    if (keyIsDown(83))
        A = A - 1

    ellipse(mouseX , mouseY, w, w);
}


function mouseWheel() {
    h = h + 10;
    h = h - 10

}

function changeSize(event) {
    if (event.deltaY > 0) {
        w = w + 10;
    } else {
        w = w - 10;
    }
}
