// filename: cm.js
// author:   Chris Barnett
// purpose:  add function to db7.html
//               - 

var rgb = [0,0,0];

window.addEventListener('load',function() {

    // initial div styling
    document.getElementById('the_div').style.width = document.documentElement.clientWidth - 20 + 'px';
    document.getElementById('the_div').style.height = '200px';    


    let buttons = document.getElementsByTagName('button');

    // loop through buttons
    for(let i=0;i<buttons.length;i++) {

        // add event listener to add to color with click
        buttons[i].addEventListener('click', function(e) {

            add_color(e.currentTarget);

        });

    }

});


function add_color(tgt) {

    // start rgb string
    let str = 'rgb(';
   
    // loop through component colors
    for(let i=0;i<3;i++) {

        // add to rgb using list found in data attribute
        rgb[i] += eval(tgt.getAttribute('data-add'))[i];

        // add to rgb string
        str += rgb[i] + ((i<2) ? ',' : '');

    }

    str += ')';

    // set style to rgb string
    document.getElementById('the_div').style.background = str;

    // use rgb string for the paragraph
    document.getElementById('rgb').textContent = 'current color:' + str;

}
