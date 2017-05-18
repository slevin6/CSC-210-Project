/**
 * Created by tinavrieler on 2017-03-31.
 */
window.addEventListener('load', eventWindowLoaded, false);

function eventWindowLoaded() {
    canvasApp();
}

function canvasApp() {

    var theCanvas = document.getElementById("canvas");
    var context = theCanvas.getContext("2d");

    drawScreen();



}