// filename: fc.js
// author:   Chris Barnett
// purpose:  add function to fc.html
//               - add event listener to buttons
//               - event handler executes code the button needs if it exists
//               - then changes div text to answer to question

var clicked = 0;
var batt_level = 'not supported in this browser';

window.addEventListener('load', () => {

    buttons = document.getElementsByTagName('button');

    // iterate through buttons
    for(let i=0;i<buttons.length;i++) {

        // add event listener to execute some code if needed, then output the answer to the div
        buttons[i].addEventListener('click', (e) => {

            try {

                eval(e.currentTarget.getAttribute('data-exec'));

            } catch (e) {}

            finally {

                document.getElementById('the_div').textContent = eval(e.currentTarget.getAttribute('data-answer'));

            }

        });
        
    }

});

// had to make a separate function because the getBattery promise resolved too slow
function update_batt(b) {

    document.getElementById('the_div').textContent = b.level * 100 + '%';

}
