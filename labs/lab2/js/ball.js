var b = [];
var v = [];
var i,j;

const radius = 60;

function setup() {

    createCanvas(800,600);

    // make add ball button work
    document.getElementById('add_ball').addEventListener('click',function() {add_ball();});j

    // add the first ball
    add_ball();
}

// add a ball in a random position
function add_ball() {
    b.push([Math.random() * 800, Math.random() * 600]);
    v.push([5,5]);
}

function draw() {
    background(127);

    for(i=0;i<b.length;i++) {

        // draw each ball
        circle(b[i][0],b[i][1],radius/2);
        
        // border collision detection
        if (b[i][0] <= 0 || b[i][0] >= 800) v[i][0] *= -1;
        if (b[i][1] <= 0 || b[i][1] >= 600) v[i][1] *= -1;
    }

    if (b.length > 1) {
        for(i=0;i<b.length-1;i++) {
            for(j=i+1;j<b.length;j++) {

                // ball-ball collision detection
                if (dist(b[i][0],b[i][i],b[j][0],b[j][1]) <= radius) {

                    // i couldn't figure out the physics fast enough
                    // so i did it lazily
                    v[i][0] *= -1;
                    v[j][0] *= -1;
                    v[i][1] *= -1;
                    v[j][1] *= -1;
                }
            }
        }

    }

    // update ball positions
    for(i=0;i<b.length;i++) {
        b[i][0] += v[i][0];
        b[i][1] += v[i][1];
    }

}
