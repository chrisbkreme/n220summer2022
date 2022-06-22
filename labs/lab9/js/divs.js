// filename: divs.js
// author:   Chris Barnett
// purpose:  add function to divs.html
//               - define array of styling objects
//               = create element for each object

window.addEventListener('load', () => {

    // given array
    let objects = [

        { color: "#FF0000", height: 100, width: 300 },
       
        { color: "#FFFF00", height: 200, width: 200 },
       
        { color: "#ff0000", height: 300, width: 100 },
       
    ];

    // loop through objects
    for(i of objects) {

        // make div
        let element = document.createElement('div');

        // change style
        element.style.background = i.color;
        element.style.height = i.height + 'px';
        element.style.width = i.width + 'px';

        // append to body
        document.body.appendChild(element);

    }
       
});
