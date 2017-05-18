var starCanvas = document.getElementById("starCanvas");
var starCtx = starCanvas.getContext("2d");
var cw = starCanvas.width;
var ch = starCanvas.height;
var final_x = 0;

// for efficiency, create the star once on an in-memory canvas
var star = drawStar(31, 31, 5, 30, 15);

// the star's current x position
var x = 0;

function shootStar() {
    $("#starCanvas").removeClass("behind");
    $(".container").removeClass("behind");
    $(".container").append("<h1 i18n='correctText'></h1>");
    $(".container").before("<div id='congratsModal'></div>");
    // start the star at x=0
    x = 0;
    // use requestAnimationFrame to animate the star
    requestAnimationFrame(animate);    
}


function animate(time){
    starCtx.drawImage(star, x, 270);

    //Controls the timing of how fast the star moves
    if(x < 430) {
        x += 4;
    } 
    else if(x >= 430 && x < 485) {
        x += 3;
    }
    else if(x >= 485 && x < 530) {
        x += 2.5;
    }
    else if(x >= 530 && x < 565) {
        x += 2;
    }
    else if(x >= 565 && x < 590) {
        x += 1.5;
    }
    else if(x >= 590 && x < 608) {
        x += 1;
    }

    //Controls the path of the star (Spiral )
    var y = Math.pow(((-147) * x + 89540), (16 / 32)) * Math.sin((.02) * x) + 305;

    // draw the star canvas onto the main canvas
    starCtx.clearRect(0, 0, cw, ch);
    starCtx.drawImage(star, x, y);

    // continue animating if the star hasn't moved off the canvas

    requestAnimationFrame(animate);
}

// make an in-memory canvas with a star drawing
function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
    var c = document.createElement('canvas'); //Creates the canvas
    var cctx= c.getContext('2d'); //Tells JS that this will be 2-dimensional
    var rot = Math.PI / 2 * 3; //Two-thirds of pi
    var x = cx; //This is 31 (Set equal to 1st parameter)
    var y = cy; //This is 31 (Set equal to 2nd parameter)
    var step = Math.PI / spikes; //This is pi/5

    cctx.strokeSyle = "black"; //Color of the stroke
    cctx.beginPath(); //Begins the path that you want to draw
    cctx.moveTo(cx, cy - outerRadius) //Moves the beginning stroke to the specified point
    for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        cctx.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        cctx.lineTo(x, y)
        rot += step
    }
    cctx.lineTo(cx, cy - outerRadius)
    cctx.closePath();
    cctx.lineWidth=1;
    cctx.strokeStyle='#FFDF00';
    cctx.stroke();
    cctx.fillStyle='#FFDF00';
    cctx.fill();
    return(c);
}