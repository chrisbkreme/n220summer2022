// filename: greet.js
// author:   Chris Barnett
// purpose:  add function to greet.html
//               - button changes text content of a paragraph


window.addEventListener('load',function() {
    
    document.getElementById('the_button').addEventListener('click', function() {
        document.getElementById('out').textContent = "hello, " + document.getElementById('name').value;
    });

});
