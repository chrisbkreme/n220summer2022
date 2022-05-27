// filename: snek.js
// author:   Chris Barnett
// purpose:  add function to snek.html
//               - draw circles in last 10 mouse positions

// set up position queue
var p = Array(10);
for(var i=0;i<10;i++) p[i] = [-10,-10];

var queue_head = 0;


function setup() {

    // create an 800x600 canvas
    createCanvas(800,600);

    // change the canvas background to grey
    background(127);

    // change fill to black
    fill(0,0,0);

}

function draw() {

    // don't move snake if mouse is still
    if (mouseX != pmouseX || mouseY != pmouseY) {

        // change both positions in-place with few operations
        p[queue_head%10] = [mouseX,mouseY];
        queue_head++;

        background(127);

        // draw each circle
        for(var i=0;i<p.length;i++) circle(p[i][0],p[i][1],30);

    }

}
