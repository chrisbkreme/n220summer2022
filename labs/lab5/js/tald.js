// filename: tald.js
// author:   Chris Barnett
// purpose:  add function to tald.html
//               - add 100 tiny divs to the DOM
//               - change the color for each div


window.addEventListener('load',function() {
    
    for(var i=0;i<100;i++) {

        // create a div
        let element = this.document.createElement('div');

        // change the style
        element.style.width = '20px';
        element.style.height = '20px';
        element.style.float = 'left';

        element.style.background =
            'rgb(' +

            // change the color
            String(((Math.cos(i*0.0628) + 1) / 2) * 255) + ',' +
            String(((Math.cos(i*0.0628 + Math.PI / 3) + 1) / 2) * 255) + ',' +
            String(((Math.cos(i*0.0628 + (2 * Math.PI / 3)) + 1) / 2) * 255) + ')';
        
        // add element to body
        this.document.body.appendChild(element);
    }

});
