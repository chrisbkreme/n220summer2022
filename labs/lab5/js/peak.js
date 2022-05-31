// filename: peak.js
// author:   Chris Barnett
// purpose:  add function to peak.html
//               - increase div size by 10% on click

var x = 100;

window.addEventListener('load',function() {
    the_div = this.document.getElementById('the_div');

    // initial style
    the_div.style.width = '100px';
    the_div.style.height = '100px';
    the_div.style.background = 'green';

    // increase size on click
    the_div.addEventListener('click',function(e) {
        x *= 1.1;
        e.currentTarget.style.width = String(x+'px');
        e.currentTarget.style.height = String(x+'px');
    })

});
