function setup() {
    createCanvas(400,300);
}

function draw() {
    background(127);
    if (mouseX < 200) fill(255,0,0);
    else fill(0,0,255);
    circle(mouseX, 150, 30);
}
