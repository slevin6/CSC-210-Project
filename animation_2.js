/**
 * Created by tinavrieler on 2017-04-10.
 */
window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded() {
    canvasApp();
}

function canvasApp() {
    var pointImage = new Image();
    pointImage.src = "point_black.png";

    var penImage = new Image();
    penImage.src = "pencil.png";


    function drawScreen() {
        context.fillStyle = "#EEEEEE";
        context.fillRect(0, 0, theCanvas.width, theCanvas.height);
        //Box
        context.strokeStyle = "#000000";
        context.strokeRect(1, 1, theCanvas.width - 2, theCanvas.height - 2);

        //create ball/pen
        if (moves > 0) {
            moves--;
            penImage.x += xunits; //updates the x and y properties of the ball object
            penImage.y += yunits;
        }
        points.push({x: penImage.x, y: penImage.y});

        for (var i = 0; i < points.length; i++) {
            context.drawImage(pointImage, points[i].x, points[i].y, 1, 1);
        }
        context.drawImage(penImage, penImage.x, penImage.y, 1, 1);

        var speed = 5;
        var p1 = {x:20,y:250};
        var p2 = {x:480,y:250};
        var dx = p2.x - p1.x;
        var dy = p2.y - p1.y;
        var distance = Math.sqrt(dx*dx + dy*dy);
        var moves = distance/speed;

        var xunits = (p2.x - p1.x)/moves;
        var yunits = (p2.y - p1.y)/moves;
        penImage = {x:p1.x, y:p1.y};
        var points = new Array();

        theCanvas = document.getElementById("canvasOne");
        context = theCanvas.getContext("2d");

        setInterval(drawScreen, 33);
    }
}