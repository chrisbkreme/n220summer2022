// filename: bad.js
// author:   Chris Barnett
// purpose:  add function to bad.html
//               - define bad words
//               = split user input into array of strings
//               - loop through array counting how many items appear in bad words
//               - output count to span

const bad_words = ['clear','water','tires'];

window.addEventListener('load', () => {

    // add click event to button
    document.getElementById('the_button').addEventListener('click', () => {

        let count = 0;

        // loop through input
        for(i of document.getElementById('the_input').value.split(' ')) if (bad_words.includes(i)) count++;

        // change span text
        document.getElementById('the_output').textContent = count;

        // clear input
        document.getElementById('the_input').value = '';

    });

});
