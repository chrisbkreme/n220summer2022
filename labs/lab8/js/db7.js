// filename: db7.js
// author:   Chris Barnett
// purpose:  add function to db7.html
//               - function determines if parameter is divisible by 7
//               - button updates div with yes or no
//                   - depending on whether or not function returns true for input


window.addEventListener('load',function() {

    // update button text
    document.getElementById('the_input').addEventListener('keyup', function() {
        document.getElementById('the_button').textContent = "Is " + document.getElementById('the_input').value + " divisible by 7?";
    });

    // call function when button is clicked
    document.getElementById('the_button').addEventListener('click', function() {

        // try/catch maybe not needed, alphabetical input didn't cause an error
        try {

            // if input is divisible by 7, output yes
            if (db7(eval(document.getElementById('the_input').value))) document.getElementById('the_div').textContent = 'yes';
            
            // otherwise, output no
            else document.getElementById('the_div').textContent = 'no';

        } catch (e) {

            // if anything goes wrong, the input probably isn't divisible by 7
            document.getElementById('the_div').textContent = 'no';

        }

    });

});


function db7(num) {
    // return bool
    return (num % 7 == 0);
}
