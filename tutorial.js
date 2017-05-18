/**
 * Created by tinavrieler on 2017-03-28.
 */


/* The code is used to test whether the window has loaded*/
window.addEventListener("load", eventWindowLoaded, false);

var Debugger = function() {
};

/* For browsers without control.log support*/
var Debugger = function(){ };

Debugger.log = function (message) {
    try {
        console.log(message);
    } catch (exception) {
        return;
    }
}


function eventWindowLoaded() {
    canvasApp();
}

function canvasApp() {
    drawScreen();
}

/*Retrieving a reference to canvasOne by calling
 the getElementById function of document and passing
 the name canvasOne, which is the id of the canvas.
 */
var theCanvas =
    document.getElementById("canvasOne");

/* Retrieving the 2D context*/
var context = theCanvas.getContext("2d");

Debugger.log("Drawing Canvas");

/* Draws "Hello World" */
function drawScreen() {

    /* Fillstyle draw a yellow box/background in the canvas. fillRect create a rectangle and puts it on the screen*/
    context.fillStyle = "#ffffaa";
    context.fillRect(0, 0, 500, 300);

    /* Set font color, size and weight/vertical alignment of the font/print the test on the screen*/
    context.fillStyle = "#000000";
    context.font = "20px _sans";
    context.textBaseline = "top";
    context.fillText("Hello World!", 165, 80);

    /* Displaying image once the image has loaded*/
    var helloWorldImage = new Image();
    helloWorldImage.src = "maya.jpeg";
    helloWorldImage.onload = function () {
        context.drawImage(helloWorldImage, 200, 220);
    }

    /* StrokeStyle draws the border of the box. strokeRect draws the rectangle border*/
    context.strokeStyle = "#000000";
    context.strokeRect(5, 5, 490, 290);
}

drawScreen();
