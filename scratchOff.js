var canvasContext;

$(document).ready(function () {
    create();
});

function init(container, width, height, fillColor) {
            var canvasRev = createCanvas(container, width, height);
            var ctxRev = canvasRev.context;
            canvasContext = ctxRev;
            // define a custom fillCircle method
            ctxRev.fillCircle = function(x, y, radius, fillColor) {
                this.fillStyle = fillColor;
                this.beginPath();
                this.moveTo(x, y);
                this.arc(x, y, radius, 0, Math.PI * 2, false);
                this.fill();
            };
            ctxRev.clearTo = function(fillColor) {
                ctxRev.fillStyle = fillColor;
                ctxRev.fillRect(0, 0, width, height);
            };
            ctxRev.clearTo(fillColor || "#ddd");

            // bind mouse events
            canvasRev.node.onmousemove = function(e) {
                if (!canvasRev.isDrawing) {
                    return;
                }
                var x = e.pageX - this.offsetLeft;
                var y = e.pageY - this.offsetTop;
                var radius = 10; // or whatever
                var fillColor = '#b8b4a9';
                ctxRev.globalCompositeOperation = 'destination-out';
                ctxRev.fillCircle(x, y, radius, fillColor);
            };
            canvasRev.node.onmousedown = function(e) {
                canvasRev.isDrawing = true;
            };
            canvasRev.node.onmouseup = function(e) {
                canvasRev.isDrawing = false;
            };
}

function create() {
            var container = document.getElementById('revealCanvas');
            init(container, 640, 480, '#ddd');;
}

function createCanvas(parent, width, height) {
            var canvas = {};
            canvas.node = document.createElement('canvas');
            canvas.context = canvas.node.getContext('2d');
            canvas.node.width = width || 100;
            canvas.node.height = height || 100;
            parent.appendChild(canvas.node);
            return canvas;
}

function tutorial() {
    simulateClick();
}

function simulateClick() {
    $("#cursor").addClass("cursor");

    var evt = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
        target: canvasContext,
        clientX: 4,
        clientY: 10
    });

    canvasContext.globalCompositeOperation = 'destination-out';

    simulateClickNDrag(evt, 0);
}

function simulateClickNDrag(event, offset) {
    if(offset < 351) {
        canvasContext.fillCircle(event.x + offset, event.y, 10, "#b8b4a9");
        setTimeout(function() { 
            simulateClickNDrag(event, (offset + 1)) 
        }, 25);
    }
    else {
        canvasContext.globalCompositeOperation = 'source-over';
        canvasContext.clearTo("#ddd" || "#ddd");
        $("#cursor").removeClass("cursor");
    }
}


