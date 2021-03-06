// filename:  space.js
// author:    Chris Barnett
// purpose:   implement space invaders in javascript
//              - using p5 js library

var invaders;
var shots;
var invader_shots;
var explosions;
var x_count,x_dir;
var tick, mult, last_shot, score, game_over, move_wait,last_moved;
var img;

var canvas_width = document.documentElement.clientWidth - 10;
var canvas_height = document.documentElement.clientHeight - 10;
var player_height = canvas_height * 0.9


// explosion class
// i was going for a 50px by 50px grid of squares
// that increases in number of squares at every stage
// but i can't figure it out for some reason

// the current effect seems explosionish

class Explosion {

    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.stage = 1;
    }

    draw() {

        // create a grid of squares
        for(let m=0;m<this.stage;m++) {

            for(let n=0;n<this.stage;n++) {

                square(this.x + m*50, this.y + n*50,50/this.stage+1);

            }

        }

        this.stage++;

    }

}

// invader class
class Invader {

    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    // update in x or y direction
    // 1% chance to fire a bullet on update
    update(x_dir, y_dir) {
        this.x += x_dir;
        this.y += y_dir;

        if (Math.random() > 0.99) {
            invader_shots.push(new Shot(this.x+25,this.y));
        }
    }

    // draw an image
    draw() {
        image(img,this.x,this.y,50,50);
    }

}

// shot class
// theyre just rectangles
class Shot {

    // if shot did not start from player position, change its direction
    constructor(x,y) {
        this.x = x;
        this.y = y;
        if (y == player_height) this.dir = 1;
        else this.dir = -1;
    }

    update() {
        this.y -= 5 * this.dir;
    }

    draw() {
        rect(this.x,this.y,5,20)
    }

}


// p5 preload for invader image
function preload() {

    img = loadImage('invader.png');

}


function setup() {

    // initial game values
    invaders = [];
    shots = [];
    invader_shots = [];
    explosions = [];

    // canvas is window-sized
    createCanvas(document.documentElement.clientWidth-10,document.documentElement.clientHeight-10);
    background(20);
    fill(255);
    stroke(255);

    // load invader image
    img.loadPixels();

    // populate invaders
    for(var i=0; i<8;i++) {
        for(var j=0;j<5;j++) {
            invaders.push(new Invader(i*canvas_width / 8,j*90));
        }
    }

    // initilize game variables
    x_count = 10;
    x_dir = 1;
    move_wait = 60;
    last_moved = 0;

    
    tick = 0;
    game_over = 0;

    last_shot = 0;

    score = 0;

}

function draw() {

    if (!game_over) {

        background(20);

        // draw player
        rect(mouseX-25,player_height + 10,50,10);
        square(mouseX-5,player_height,10);

        // draw invaders
        for(var i=0;i<invaders.length;i++) {
            invaders[i].draw();
        }

        // update invader positions after wait
        if (tick-last_moved >= move_wait) {
            last_moved = tick;

    
            if (x_count > 0) {

                // if invaders haven't moved horizontally enough times,
                // move horizontally again

                x_count--;
                for(var i=0;i<invaders.length;i++) {
                    invaders[i].update(8*x_dir,0);
                }

            } else {

                // if invaders have moved horizontally enough times,
                // reset horizontal movement in other direction
                // and move vertically

                x_dir *= -1;
                x_count = 10;
                for(var i=0;i<invaders.length;i++) {

                    invaders[i].update(0,canvas_height/50);

                    // game over if player is reached
                    if (invaders[i].y >= player_height - 60) {
                        game_over = 1;
                    }
                }
            }
        }

        // shoot with mouse or key after wait
        if ((mouseIsPressed === true || keyIsPressed === true) && tick-last_shot > 30) {
            last_shot = tick;
            shots.push(new Shot(mouseX,player_height));
        }

        // draw and update player shots
        for (var i=0;i<shots.length;i++) {
            try {
                shots[i].draw();
                shots[i].update();
                if (shots[i].y < -50) shots.splice(i,1);

            } catch (e) {}
        }

        // draw and update invader shots
        for (var i=0;i<invader_shots.length;i++) {
            try {
                // game over if player is hit by invader shot
                if (invader_shots[i].x >= mouseX-25 && invader_shots[i].x <= mouseX + 25 && invader_shots[i].y >= player_height - 10 && invader_shots[i].y <= player_height + 10) game_over = 1;
                
                invader_shots[i].draw();
                invader_shots[i].update();

                if (invader_shots[i].y > 1200) invader_shots.splice(i,1);

            } catch (e) {}
        }

        // draw and update explosions
        for(var i=0;i<explosions.length;i++) {

            try {

                // limit to 8 stages
                if (explosions[i].stage < 9) explosions[i].draw();
                else explosions.splice(i,1);

            } catch (e) {}

        }

        // shot-invader collision handling
        for(var i=0;i<shots.length;i++) {
            for(var j=0;j<invaders.length;j++) {
                try {

                    // check if invader and shot occupy same area
                    if(shots[i].x >= invaders[j].x && shots[i].x < invaders[j].x+50 && shots[i].y >= invaders[j].y && shots[i].y < invaders[j].y+50) {

                        // if they do, create new explosion at invader position,
                        // update game variables,
                        // and remove shot and invader from screen
                        explosions.push(new Explosion(invaders[j].x,invaders[j].y));
                        move_wait -= 1.5;
                        shots.splice(i,1);
                        invaders.splice(j,1);
                        score++;

                    }

                } catch (e) {}
            }
        }

        // game over if all invaders are deade
        if (invaders.length == 0) game_over = 1;

        // print score at bottom
        text('score: ' + score, canvas_width*.75, canvas_height - 60);
        
        tick++;
        
    } else {

        // end screen 
        background(20);
        if (invaders.length == 0) text('you win', canvas_width / 2, canvas_height / 2 - 50);
        else text('you lose', canvas_width / 2, canvas_height / 2);
        text('score: ' + score, canvas_width /2, canvas_height / 2 + 50);
        text('press any key to restart', canvas_width  / 2, canvas_height / 2 + 100);

        if (mouseIsPressed === true || keyIsPressed === true) setup();
    }

}
