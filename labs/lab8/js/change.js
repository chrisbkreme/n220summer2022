// filename: change.js
// author:   Chris Barnett
// purpose:  add function to change.html
//               - give divs initial style
//               = make divs call function to change style when clicked


window.addEventListener('load',function() {
    
    // loop through divs
    for(var i=1;i<4;i++) {

        // set initial style
        document.getElementById('div_'+i).style.background = '#f00';
        document.getElementById('div_'+i).style.width = '200px';
        document.getElementById('div_'+i).style.height = '200px';

        // call change_styles when clicked, passing itself as an html element
        document.getElementById('div_'+i).addEventListener('click', function(e) {
            change_styles(e.currentTarget);
        });

    }

});

// change target element's color to blue and width to 75% the original width
function change_styles(tgt) {
    tgt.style.background = '#00f';
    tgt.style.width = '150px';
}
