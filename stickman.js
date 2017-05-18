window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded() {
    drawMan();
}

function drawMan() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var canvas = document.getElementById("canvasOne");
    if (canvas.getContext) {
        context = canvas.getContext("2d");
        with (canvas) {
            setAttribute("width", w - 6);
            setAttribute("height", h - 6);
        }

        with (context) {
            strokeStyle = "#000000";
            lineWidth = "5";

            arc(w / 2, h / 2, h / 10, 0, Math.PI * 2, true);
            moveTo(w / 2, h / 2 + (h / 10));
            lineTo(w / 2, h - (h / 5));
        }
    }
    window.onresize = function () {
        drawMan();
    }

    drawMan();
}



