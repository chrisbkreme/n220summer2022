// filename: pyra.js
// author:   Chris Barnett
// purpose:  add function to pyra.html
//               - draw a row of one square
//               - draw a row of two squares
//               - draw a row of three squares
//               - draw a row of four squares

// the setup function
function setup() {

    // create an 800x600 canvas
    createCanvas(800,300);

    // change the canvas background to white
    background(255);

    // change fill to red
    fill(255,0,0);

    // change stroke to white
    stroke(255,255,255)

    // draw rows of squares
    for(var i=0;i<5;i++) {

        // draw squares
        for(var j=0;j<i;j++) {

            // square
            square(25+25*j,25*i,25);
        }
    
    }

}
