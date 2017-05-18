$(document).ready(function () {
    draw();
});

var amount = 1;
var canvas;
var ctx;
var img;
var drawFunct;


function draw() {
    img = document.getElementById("scribbleImg");
    canvas = document.getElementById("scribbleCanvas");
    ctx = canvas.getContext("2d");
    drawFunct = setInterval(drawMore, 90);
}

function drawMore() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, amount, 0, 0, canvas.width, amount);
    amount++;

    $(".addTo").removeClass("cursor");
    $(".underHeader").removeClass("underHeaderTutorial");
    $(".addTo").addClass("clear");
}

function pauseDraw() {
    $(".addTo").addClass("cursor");
    $(".underHeader").addClass("underHeaderTutorial");
    $(".addTo").removeClass("clear");

    clearInterval(drawFunct);

    setTimeout(function() {
        drawFunct = setInterval(drawMore, 90)
    }, 4000);
}