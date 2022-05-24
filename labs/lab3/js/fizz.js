// filename: fzz.js
// author:   Chris Barnett
// purpose:  add function to fizz.html
//               - draw circles
//                   - with different colors
//                       - depending on divisibility

// the setup function
function setup() {

    // create an 800x600 canvas
    createCanvas(800,300);

    // change the canvas background to grey
    background(127);

    for(var i=0;i<25;i++) {

        // divisible by 3
        if (i%3 == 0 && i%5 != 0) fill(127,0,127);

        // divisible by 5
        else if (i%3 != 0 && i%5 == 0) fill(0,255,0);

        // divisible by both
        else if (i%3 == 0 && i%5 == 0) fill(0,0,255);

        // divisible by neither
        else fill(0,0,0);

        circle(20+i*25,150,25);
        
    }

}
