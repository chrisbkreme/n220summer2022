// filename: ave.js
// author:   Chris Barnett
// purpose:  add function to ave.html
//               - 

var source = 0;
var csv_behavior = 0;
var file_text;
var use_workers;
var full_arr;
var workers;
var worker_data;
var workers_left;
var sum;

window.addEventListener('load', () => {
    
    let inputs = document.getElementsByTagName('input');

    inputs[0].addEventListener('click', () => set_source(0));
    inputs[1].addEventListener('click', () => set_source(1));
    inputs[4].addEventListener('click', () => csv_behavior = 0);
    inputs[5].addEventListener('click', () => csv_behavior = 1);


    let buttons = document.getElementsByTagName('button');

    buttons[0].addEventListener('click', () => {

        let csv_text = eval('[' + document.getElementById('csv_text').value + ']')
        let sum = 0;

        for(let i=0;i<csv_text.length;i++) sum += csv_text[i];

        document.getElementById('output_container').innerHTML = 'sum: ' + sum + '; average: ' + (sum / csv_text.length).toFixed(2);
        document.getElementById('csv_text').value = '';


    });

    buttons[1].addEventListener('click', () => {

        use_workers = 0;

        var file = new FileReader();

        file.addEventListener('load', (e) => {

            set_text(file);

        });

        file.readAsText(document.getElementById('csv_file').files[0]);

    });


});

function set_text(file) {

    file_text = file.result;
    text_process();

}

function text_process() {
    
    if (!csv_behavior) {

        sum = 0;


        full_arr = file_text.replace('\n',',').split(',');


        for(i of full_arr) sum += Number(i);
        
        document.getElementById('output_container').innerHTML = 'sum: ' + sum + '; average: ' + (sum / full_arr.length).toFixed(2);



    } else {

        document.getElementById('output_container').innerHTML = '';

        full_arr = file_text.split('\n');

        for(let i=0;i<full_arr.length;i++) {

            let current_arr = full_arr[i].split(',');
            sum = 0;

            for(let j=0;j<current_arr.length;j++) {
                
                sum += Number(current_arr[j]);
            }

            p = document.createTextNode('array ' + Number(i+1) + ':  ' + 'sum: ' + sum + '; average: ' + (sum / current_arr.length).toFixed(2));

            document.getElementById('output_container').appendChild(p);
            document.getElementById('output_container').appendChild(document.createElement('br'));


        }

    }

}


function set_source(opt) {

    source = opt;
    document.getElementById('text_input').style.display = (!source) ? 'block' : 'none';
    document.getElementById('file_input').style.display = (source) ? 'block' : 'none';

}


