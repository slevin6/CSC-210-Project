/**
 * Created by tinavrieler on 2017-03-29.
 */

window.addEventListener('load', eventWindowLoaded, false);

function eventWindowLoaded() {
    canvasApp();
}

function canvasApp() {

    var theCanvas = document.getElementById("canvas");
    var context = theCanvas.getContext("2d");

    drawScreen();
//Draws a rectangle
    /*function drawScreen() {
     //make changes here
     context.fillStyle = "#000000";
     context.strokeStyle = "#ff00ff";
     context.lineWidth = 10;
     context.fillRect(10, 10, 40, 40);
     context.clearRect(20,20,20,20);
     //context.fillStyle = "#000000";
     //context.font = "20px _sans";
     //context.textBaseline = "top";
     //context.fillText("Canvas!", 0, 0);
     }
     }

     /*context.save()
     /*context.restore() restores the last saved state to the stack
     */

//Draws a line
    /*function drawScreen() {
     context.strokeStyle = "black"; //need list of available colors
     context.lineWidth = 10;
     context.lineJoin = "bevel";
     context.lineCap = "round"; //the end of the line drawn on the context
     context.beginPath();
     context.moveTo(0, 0);
     context.lineTo(25, 25);
     context.stroke();
     context.closePath();
     }*/

    //Draws a corner in rec
    /*function drawScreen() {
     context.strokeStyle = "black"; //need list of available colors
     context.lineWidth = 10;
     context.lineJoin = "round";
     context.lineCap = "butt";
     context.beginPath();
     context.moveTo(10, 100);
     context.lineTo(35, 100);
     context.lineTo(35, 125);
     context.stroke();
     context.closePath();

     }
     */
//rita en cirkel
    /*
     function drawScreen(){
     context.beginPath();
     context.strokeStyle = "black";
     context.lineWidth = 5;
     context.arc(100, 100, 20, (Math.PI/180)*0, (Math.PI/180)*90, true);

     //full circle
     context.stroke();
     context.closePath();
     }
     */
//Bezier curve
    //bezier curve eller quadratic curve
    /*
     function drawScreen() {
     context.beginPath();
     context.strokeStyle = "black";
     context.lineWidth = 5;
     context.moveTo(0, 0);
     context.quadraticCurveTo(100,25,0,50);
     context.stroke();
     context.closePath();
     }
     */
    /*Rita Ess
     function drawScreen() {
     context.beginPath();
     context.strokeStyle = "black";
     context.lineWidth = 5;
     context.moveTo(150, 0);
     context.bezierCurveTo(0,125,300,175,150,300);
     context.stroke();
     context.closePath();
     }
     */
//clippning
    /*function drawScreen() {
     //draws a big box on the screen
     context.fillStyle = "black";
     context.fillRect(10,10,200,200);
     context.save();
     context.beginPath();
     //clip the canvas to a 50*50 square starting at 0,0
     context.rect(0,0,50,50);
     context.clip();

     //red circle
     context.beginPath();
     context.strokeStyle = "red";
     context.lineWidth = 5;
     context.arc(100,100,100,(Math.PI/180)*0, (Math.PI/180)*360, false);
     context.stroke();
     context.closePath();

     context.restore()

     //reclip to the entire canvas
     context.beginPath();
     context.rect(0,0,500,500);
     context.clip();

     //draw a blur line that is not clipped

     context.beginPath();
     context.strokeStyle = "blue";
     context.lineWidth = "5";
     context.arc(100,100,50,(Math.PI/180)*0, (Math.PI/180)*360, false);

     context.stroke();
     context.closePath();

     /*
     context.strokeStyle = "black";
     context.lineWidth = 5;
     context.moveTo(150, 0);
     context.bezierCurveTo(0,125,300,175,150,300);
     context.stroke();
     context.closePath();
     */

    //Gradient
    /*function drawScreen() {

     var gr = context.createLinearGradient(0, 0, 200, 0);

     // Add the color stops.
     gr.addColorStop(0,'rgb(255,0,0)');
     gr.addColorStop(.5,'rgb(0,255,0)');
     gr.addColorStop(1,'rgb(255,0,0)');

     // Use the gradient for the fillStyle. (StrokeStyle or StrokeGradient)
     context.fillStyle = gr;
     context.fillRect(0, 0, 100, 100);
     context.fillRect(120, 400, 50, 100);
     context.fillRect(0, 100, 200, 100);

     }*/
//how to repeat pattern
    /*function drawScreen() {
        var fillImg = new Image();
        fillImg.src = "Circle200.gif";
        fillImg.onload = function () {
            var fillPattern = context.createPattern(fillImg, 'repeat');
            context.fillStyle = fillPattern;
            context.fillRect(0, 0, 300, 300);

        }

    }*/

    //create shadow
    function drawScreen() {
        context.fillStyle = "red";
        context.shadowOffsetX = 50;
        context.shadowOffsetY = 50;
        context.shadowColor = "black";
        context.shadowBlur = 8;
        context.fillRect(10,10,100,100);

    }

}




 //lineWidth
//lineJoin "miter" is default, "round" and "bevel" (slope edge)