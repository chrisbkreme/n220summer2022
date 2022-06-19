// filename: fc.js
// author:   Chris Barnett
// purpose:  add function to fc.html
//               - add event listener to buttons
//               - event handler executes code the button needs if it exists
//               - then changes div text to answer to question

var clicked = 0;
var batt_level = 'not supported in this browser';

window.addEventListener('load',function() {

    buttons = document.getElementsByTagName('button');

    // iterate through buttons
    for(let i=0;i<buttons.length;i++) {

        buttons[i].addEventListener('click', function(e) {

            try {

                eval(e.currentTarget.getAttribute('data-exec'));

            } catch (e) {}

            finally {

                document.getElementById('the_div').textContent = eval(e.currentTarget.getAttribute('data-answer'));

            }

        });
        
    }

});
