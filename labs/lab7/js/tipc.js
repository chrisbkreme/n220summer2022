// filename: tipc.js
// author:   Chris Barnett
// purpose:  add function to tipc.html
//               - button changes text content of a paragraph


window.addEventListener('load',function() {
    
    document.getElementById('the_button').addEventListener('click', function() {
        let tip = Number(document.getElementById('tip').value * document.getElementById('bill').value);
        let total = tip + Number(document.getElementById('bill').value);

        document.getElementById('out').textContent = "Tip: $" + tip.toFixed(2) + " Total: $" + total.toFixed(2);
    });

});
