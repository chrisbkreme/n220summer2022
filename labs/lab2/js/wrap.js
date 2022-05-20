var x_pos = 0;

function setup() {
    createCanvas(800,600);
}

function draw() {
    background(127);
    circle(x_pos, 300, 30);
    x_pos += 5;
    if (x_pos > 800) x_pos = 0;
}
