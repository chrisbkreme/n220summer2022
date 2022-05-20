var radius = 1;

function setup() {
    createCanvas(200,200);
    background(127);
}

function draw() {
    circle(100,100,radius);
    radius++;
    if (radius > 200) {
        radius = 1;
        background(127);
    }
}