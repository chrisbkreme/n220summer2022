// filename: neap.js
// author:   Chris Barnett
// purpose:  add function to neap.html
//               - simulate ice cream production


// initialize ice cream
const colors = [
    'brown',   // chocolate
    'white',   // vanilla
    'pink'     // strawberry
];


function setup() {

    // create an 800x600 ice cream tub
    createCanvas(900,600);

    // loop through ice cream flavors
    for(var i=0;i<3;i++) {

        // switch flavor
        fill(colors[i]);

        // fill ice cream
        rect(i*300,0,300,600);
    }

}
