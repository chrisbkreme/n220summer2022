// filename: comp.js
// author:   Chris Barnett
// purpose:  add function to comp.html
//               - add 100 data to table
//               - change counts and style on td mouseover
//               - change style back on td mouseout

// global variable to modify
var total = 100;

var inc_td = null;

window.addEventListener('load',function() {

    // get elements
    the_table = this.document.getElementById('the_table');
    the_total = this.document.getElementById('the_total');
    
    // add 10 rows to table
    for(var i=0;i<10;i++) {

        let tr = this.document.createElement('tr');

        // add 10 data to row
        for(var j=0;j<10;j++) {

            let td = this.document.createElement('td');

            // td styling
            td.style.textAlign = 'center';
            td.style.width = '50px';
            td.style.height = '50px';
            td.style.borderRight = 'solid black 1px';
            td.style.borderBottom = 'solid black 1px';

            // initial count
            td.appendChild(this.document.createTextNode('1'));

            // the mouseover event listener
            td.addEventListener('mouseover', function(e) {
                if (inc_td != e.currentTarget) {

                    // change styling
                    e.currentTarget.style.background = '#eee';

                    // change text content
                    e.currentTarget.textContent = eval(e.currentTarget.textContent) + eval(inc_td.textContent);

                    // change global variable
                    total += eval(inc_td.textContent);
                    the_total.textContent = total;
                }

            });

            // change color back
            td.addEventListener('mouseout', function(e) {
                if (inc_td != e.currentTarget) {
                    e.currentTarget.style.background = '#fff';
                }

            });

            // select number to increment by
            td.addEventListener('click', function(e) {

                // clear old selection
                if (inc_td != null){
                    inc_td.style.background = '#fff';
                    inc_td.style.color = '#000';
                }

                // make selection distinguishable
                inc_td = e.currentTarget;
                inc_td.style.background = '#333';
                inc_td.style.color = '#fff';

            });

            tr.appendChild(td);

        }

        the_table.appendChild(tr);
        
    }

});
