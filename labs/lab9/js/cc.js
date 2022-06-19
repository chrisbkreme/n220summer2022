// filename: cc.js
// author:   Chris Barnett
// purpose:  add function to cc.html
//               - change style of 3 divs when clicked


window.addEventListener('load', () => {
    
    // loop through divs
    for(let i=0;i<3;i++) {

        let the_div = document.getElementById('div_'+i);

        // set initial style
        the_div.style.background = '#555';
        the_div.style.width = '200px';
        the_div.style.height = '200px';
        the_div.style.float = 'left';

        // call change_styles when clicked, passing itself as an html element
        the_div.addEventListener('click', (e) => change_color(e.currentTarget));

    }

});

// change target element's color to blue and width to 75% the original width
function change_color(tgt) {
    tgt.style.background = tgt.getAttribute('data-color-change-to');
}
