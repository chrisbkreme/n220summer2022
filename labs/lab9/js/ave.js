// filename: ave.js
// author:   Chris Barnett
// purpose:  add function to ave.html
//               - split up comma separated value strings into arrays
//               - add up sum of values
//               - output sum and average to div

var source = 0;
var csv_behavior = 0;
var file_text;
var full_arr;
var sum;

window.addEventListener('load', () => {
    
    let inputs = document.getElementsByTagName('input');

    // event listeners for radio buttons
    inputs[0].addEventListener('click', () => set_source(0));
    inputs[1].addEventListener('click', () => set_source(1));
    inputs[4].addEventListener('click', () => csv_behavior = 0);
    inputs[5].addEventListener('click', () => csv_behavior = 1);

    // get buttons to write event listeners for
    let buttons = document.getElementsByTagName('button');

    // event listener for text input go button
    buttons[0].addEventListener('click', () => {

        // turn input text into array
        // if i used split i'd have to cast string as number for each item
        let csv_text = eval('[' + document.getElementById('csv_text').value + ']');

        let sum = 0;

        // add up sum
        for(let i=0;i<csv_text.length;i++) sum += csv_text[i];

        // output to div and clear input
        document.getElementById('output_container').innerHTML = 'sum: ' + sum + '; average: ' + (sum / csv_text.length).toFixed(2);
        document.getElementById('csv_text').value = '';

    });

    // event listener for file input go button
    buttons[1].addEventListener('click', () => {

        var file = new FileReader();

        file.addEventListener('load', (e) => {

            file_text = file.result;
            text_process();

        });

        file.readAsText(document.getElementById('csv_file').files[0]);

    });

    // download small csv file
    buttons[2].addEventListener('click', () => {

        get_text('small');
    
    });

    // download medium csv file
    buttons[3].addEventListener('click', () => {

        get_text('medium');
    
    });

    // event listener for downloaded csv go button
    buttons[4].addEventListener('click', text_process);

});


// process csv text
function text_process() {
    
    if (csv_behavior) {

        // treat newlines as new arrays

        // clear output
        document.getElementById('output_container').innerHTML = '';

        // split into arrays on newline
        full_arr = file_text.split('\n');

        // loop through subarrays
        for(let i=0;i<full_arr.length;i++) {

            // split subarray on commas
            let current_arr = full_arr[i].split(',');
            sum = 0;

            // add up subarray sum
            for(let j=0;j<current_arr.length;j++) {
                
                sum += Number(current_arr[j]);

            }

            // create text node
            p = document.createTextNode('array ' + Number(i+1) + ':  ' + 'sum: ' + sum + '; average: ' + (sum / current_arr.length).toFixed(2));

            // add text node to output
            document.getElementById('output_container').appendChild(p);
            document.getElementById('output_container').appendChild(document.createElement('br'));

        }

    } else {

        // treat whole file as one array

        sum = 0;

        // replace newlines with commas and split on commas
        full_arr = file_text.replace('\n',',').split(',');

        // add up sum
        for(i of full_arr) sum += Number(i);
        
        // output to div
        document.getElementById('output_container').innerHTML = 'sum: ' + sum + '; average: ' + (sum / full_arr.length).toFixed(2);

    }

}


// switch between text and file input fields
function set_source(opt) {

    source = opt;
    document.getElementById('text_input').style.display = (!source) ? 'block' : 'none';
    document.getElementById('file_input').style.display = (source) ? 'block' : 'none';

}

// download csv and store in file_text
function get_text(size) {

    // create new ajax request
    let r = new XMLHttpRequest();

    // save text on load
    r.addEventListener('load', (e) => {
        
        if (e.target.readyState == 4 && e.target.status == 200) file_text = r.responseText;
        
    });

    // update download progress in span in button text
    r.addEventListener('progress', e => {

        document.getElementById(`${size}_progress`).textContent = (e.loaded / e.total).toFixed(2) * 100 + '%';

    })

    // csv files hosted on n220.cbkr.me
    r.open('GET', `http://n220.cbkr.me/labs/lab9/${size}.csv`);
    r.send();

}
