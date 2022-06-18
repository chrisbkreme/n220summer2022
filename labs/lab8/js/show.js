// filename: show.js
// author:   Chris Barnett
// purpose:  add function to show.html
//               - make buttons call function
//               - function outputs string to div


const strs = ['str1','str2','str3'];

window.addEventListener('load',function() {

    // iterate through buttons
    for(let i=0;i<strs.length;i++) {

        document.getElementById('button_'+i).textContent = strs[i];
        
        // call show_info when clicked and pass current i
        document.getElementById('button_'+i).addEventListener('click', function() {

            show_info(i);

        });

    }

});


function show_info(idx) {

    // change div text to string at index
    document.getElementById('the_div').textContent = strs[idx]

}
