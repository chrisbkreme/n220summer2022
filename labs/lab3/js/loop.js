// filename: loop.js
// author:   Chris Barnett
// purpose:  add function to loop.html
//               - spawn random shapes in center of canvas
//               - move them away from center
//               - delete them


var p = [];  // position
var s = [];  // shape
var v = [];  // velocity
var c = [];  // color

var tick = 0;

// the setup function
function setup() {

    // create an 800x600 canvas
    createCanvas(800,800);

    // change the canvas background to grey
    background(127);

}

function draw() {
    background(127);

    // the loop
    for(var i=0;i<p.length;i++) {

        // change fill to shape's color
        fill(c[i][0],c[i][1],c[i][2]);

        // draw shape at its position
        switch (s[i]) {
            case 0:
                circle(p[i][0],p[i][1],25);
                break;
            case 1:
                square(p[i][0],p[i][1],25);
                break;
            case 2:
                rect(p[i][0],p[i][1],50,25);
                break;
        }

        // update positions
        p[i][0] += v[i][0];
        p[i][1] += v[i][1];

        // delete when edge of canvas is reached
        if (p[i][0] <= 0 || p[i][0] >= 800 || p[i][1] <= 0 || p[i][1] >= 800) {
            p.splice(i,1);
            s.splice(i,1);
            v.splice(i,1);
            c.splice(i,1);
        }
    }

    // spawn random shape in center
    if (tick % 2 == 0) {
        p.push([400,400]);
        s.push(Math.floor(Math.random() * 3));
        v.push([Math.random() * 10-5, Math.random() * 10-5]);
        c.push([Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255)]);
    }

    tick++;  // tock

}
