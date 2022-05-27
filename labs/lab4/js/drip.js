// filename: drip.js
// author:   Chris Barnett
// purpose:  add function to drip.html
//               - draw circles
//               - translate them down the canvas
//                   - with acceleration

var tick = 0;

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
    fill(0,0,255);

}

function draw() {

    // draw over everything
    background(127);

    // loop through each drop
    for(var i=0;i<p.length;i++) {

        // draw circle at y position
        circle(400,p[i],30);

        // update position
        p[i] += v[i];

        // update velocity
        v[i] += a;

        // clean up
        if (p[i] > 620) {
            p.splice(i,1);
            v.splice(i,1);
        } 

    }

    // create new circle every 10 frames
    if (tick % 10 == 0) {
        p.push(0);
        v.push(0);
    }

    tick++;

}
