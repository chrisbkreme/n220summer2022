// filename: drop.js
// author:   Chris Barnett
// purpose:  add function to drop.html
//               - drop bricks with mouse click

var tick = 0;
var last_dropped = 0;

// set up physics
var p = [];      // position
var v = [];      // velocity
const a = 0.3;   // acceleration


function setup() {

    // create an 800x600 canvas
    createCanvas(800,600);

    // change the canvas background to grey
    background(127);

    // fill blue
    fill('brown');

}

function draw() {

    // draw over everything
    background(127);

    // loop through each brick
    for(var i=0;i<p.length;i++) {

        // draw rect at x,y position
        rect(p[i][0],p[i][1],50,25);

        // update position
        p[i][1] += v[i];

        // update velocity
        v[i] += a;

        // clean up
        if (p[i][1] > 620) {
            p.splice(i,1);
            v.splice(i,1);
        } 

    }

    // create new brick with mouse press
    if (mouseIsPressed === true && tick - last_dropped > 20) {
        last_dropped = tick;
        p.push([mouseX,mouseY]);
        v.push(0);
    }

    tick++;

}
