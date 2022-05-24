// filename: cioc.js
// author:   Chris Barnett
// purpose:  add function to cioc.html
//               - draw big circle
//               - draw smaller circles

// the setup function
function setup() {

    // create an 800x600 canvas
    createCanvas(800,600);

    // change the canvas background to grey
    background(220);

    // 4px between edges decreasing in size
    for(var i=300;i>0;i-=8) {
        circle(200,200,i);
    }

}
