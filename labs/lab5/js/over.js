// filename: over.js
// author:   Chris Barnett
// purpose:  add function to over.html
//               - change div to black on mouseover
//               - change div to blue on mouseout


window.addEventListener('load',function() {
    
    the_div = this.document.getElementById('the_div');

    // initial style
    the_div.style.background = 'blue';
    the_div.style.width = '100px';
    the_div.style.height = '100px';

    // change to black on mouseover
    the_div.addEventListener('mouseover',function(e) {e.currentTarget.style.background = 'black';});
    
    // change to blue on mouseout
    the_div.addEventListener('mouseout',function(e) {e.currentTarget.style.background = 'blue';});

});
