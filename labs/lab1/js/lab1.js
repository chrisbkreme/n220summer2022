const colors = {
    'white' : [255, 255, 255],
    'red' : [255, 0, 0],
    'green' : [0, 255, 0],
    'blue' : [0, 0, 255],
    'black' : [0, 0, 0]
};

const shapes = ['rect', 'line', 'triangle', 'circle', 'ellipse', 'square'];

var r,g,b;
var tick = 0;
var angle = 0;
var shape = 'rect';
var bool_compute_fill = false;
var bool_compute_stroke = false;

var auto_run = false;

// use window size for canvas
const canvas_width = document.documentElement.clientWidth;
const canvas_height = document.documentElement.clientHeight * 0.67;

function setup() {

    // canvas setup
    createCanvas(canvas_width,canvas_height);
    background(127);

    // make fill and stroke selectors work
    for(i=0;i<Object.keys(colors).length;i++) {
        document.getElementById(Object.keys(colors)[i]+"_fill").addEventListener('click', function(e) {
            select_fill(e.currentTarget.className);
        });

        document.getElementById(Object.keys(colors)[i]+"_stroke").addEventListener('click', function(e) {
            select_stroke(e.currentTarget.className);
        });
    }

    // make shape selector work
    for(i=0;i<shapes.length;i++) {
        document.getElementById(shapes[i]).addEventListener('click', function(e) {
            select_shape(e.currentTarget.className);
        });
    }

    // make computed color buttons enable computed colors for fill and stroke
    document.getElementById('computed_fill').addEventListener('click',function() {bool_compute_fill = true;});
    document.getElementById('computed_stroke').addEventListener('click',function() {bool_compute_stroke = true;});

    // make auto run checkbox work
    document.getElementById('auto').addEventListener('click', function() {auto_run = !auto_run;});

}

function select_shape(new_shape) {
    shape = new_shape;
}

// disable computed color and change to pre-made color
function select_fill(color) {
    bool_compute_fill = false;
    fill(colors[color][0],colors[color][1],colors[color][2]);
}
// disable computed color and change to pre-made color
function select_stroke(color) {
    bool_compute_stroke = false;
    stroke(colors[color][0],colors[color][1],colors[color][2]);
}

// cycle through colors
function compute_color() {
    r = ((Math.cos(angle) + 1) / 2) * 255;
    g = ((Math.cos(angle + Math.PI / 3) + 1) / 2) * 255;
    b = ((Math.cos(angle + (2 * Math.PI / 3)) + 1) / 2) * 255;

    angle += .05;
}


function draw() {
    
    // update color
    compute_color();

    // update button colors
    for(var i=0; i<document.getElementsByClassName('computed').length;i++) {
        document.getElementsByClassName('computed')[i].style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    // change fill and stroke if computed color is selected
    if (bool_compute_fill) fill(r,g,b);
    if (bool_compute_stroke) stroke(r,g,b);

    // draw with mouse
    if (mouseIsPressed === true) {
        switch(shape) {
            case 'rect' :
                rect(mouseX-20,mouseY-10,40,20);
                break;
            case 'line' :
                line(mouseX,mouseY,pmouseX,pmouseY);
                break;
            case 'circle' :
                circle(mouseX, mouseY, 30);
                break;
            case 'triangle' :
                triangle(mouseX, mouseY - 15, mouseX - 15, mouseY + 15, mouseX + 15, mouseY + 15);
                break;
            case 'ellipse' :
                ellipse(mouseX, mouseY, 40, 20);
                break;
            case 'square' :
                square(mouseX-15,mouseY-15, 30);
                break;
        }
    }

    // draw randomly every 50 frames
    if (auto_run && tick % 50 == 0) {
        rand_shape = shapes[Math.floor(Math.random() * shapes.length)];
        switch(rand_shape) {
            case 'rect' :
                rect(Math.random() * canvas_width, Math.random() * canvas_height, 40, 20);
                break;
            case 'line' :
                line(Math.random() * canvas_width, Math.random() * canvas_height, Math.random() * canvas_width, Math.random() * canvas_height);
                break;
            case 'circle' :
                circle(Math.random() * canvas_width, Math.random() * canvas_height, 30);
                break;
            case 'triangle' :
                let center = [Math.random() * canvas_width, Math.random() * canvas_height];
                triangle(center[0], center[1] - 15, center[0] - 15, center[1] + 15, center[0] + 15, center[1] + 15);
                break;
            case 'ellipse' :
                ellipse(Math.random() * canvas_width, Math.random() * canvas_height, 40, 20);
                break;
            case 'square' :
                square(Math.random() * canvas_width, Math.random() * canvas_height, 30);
                break;
        }
    }

    tick += 1;
}
