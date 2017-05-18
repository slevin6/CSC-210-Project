//window.onload = onReady;
$(document).ready(function () {
    onReady();
});

var can;
var ctx;
var img;

var blockSize = 160;

var clickX;
var clickY;

var selected1;
var selected2;

var piecesArray = new Array();
var correctOrder = new Array();


//onReady function checks if the browser has support for canvas.
// Firefox browser doesn't support some of the code - therefore the "sorry" image will be shown

function onReady()
{
    can = document.getElementById('myCanvas');


    if(navigator.userAgent.toLowerCase().indexOf('firefox') >= 0 || !can.getContext)
    {
        can.style.display = 'none';
        document.getElementById('sorry').style.display = 'inline';
        document.getElementById('support').innerHTML = "Your browser is not supported.  Please use one of the browsers above.";
    }
    /**/
    ctx = can.getContext('2d');
    img = new Image();
    img.onload = onImage1Load;
    img.src = "Pictures/dog.jpg";
}

//This function is triggered once the image is loaded. This function creates the puzzle pieces.
// Block column "i" will have 4 pieces (640/160) and block rows "j" will have 3 pieces (480/160)
//loops through the columns and rows to create a rectangular boundary for each piece and then adds
// the pieces to the array

function onImage1Load()
{
    var r;
    for(var i = 0; i < 4; i++)
    {
        for(var j = 0; j < 3; j++)
        {
            r = new Rectangle(i * blockSize, j * blockSize, i * blockSize + blockSize, j * blockSize + blockSize);
            piecesArray.push(r);
            correctOrder.push(r); //CorrectOrder array remains in the original order (no scrambling)
        }
    }

    scrambleArray(piecesArray, 30);
    drawImage();
    checkWinner();
}


function onCanvasClick(evt)
{

    clickX = evt.offsetX; //Click x and y position is obtained through offsetX and Y.
    clickY = evt.offsetY;

    var drawX = Math.floor(clickX / blockSize); //Click position is divided with blockSize
    var drawY = Math.floor(clickY / blockSize); //to calculate the index of the clicked piece

    var index = drawX * 3 + drawY; //

    var targetRect = piecesArray[index];
    var drawHighlight = true;

    drawX *= blockSize; // drawX and drawY variables are multiplied by blockSize to get
    drawY *= blockSize; // the actual pixel coordinates of the puzzle piece that was clicked

    ctx.clearRect(0, 0, 640, 480); //Clear the image in preparation for drawing any changes made.

    if(selected1 != undefined && selected2 != undefined)
    {
        selected1 = selected2 = undefined;
    }

    if(selected1 == undefined) //If selected1 is undefined then this click is the user's first selection
    // for this round so we assign the clicked puzzle piece to selected
    {
        selected1 = targetRect;
    }
    else //this means the user already has selected one piece to move
    // so the piece they just clicked is the one they want to swap positions with.
    {
        selected2 = targetRect;
        swapRects(selected1, selected2);
        drawHighlight = false;
    }

    drawImage();

    if(drawHighlight)
        highlightRect(drawX, drawY);
}

//draws a highlighted border arround the puzzle piece that the user selects
function highlightRect(drawX, drawY)
{
    ctx.beginPath();
    ctx.moveTo(drawX, drawY);
    ctx.lineTo(drawX + blockSize, drawY);
    ctx.lineTo(drawX + blockSize, drawY + blockSize);
    ctx.lineTo(drawX, drawY + blockSize);
    ctx.lineTo(drawX, drawY);
    ctx.lineWidth = 4;

    // set line color
    ctx.strokeStyle = "#ff0000";
    ctx.stroke();
}

//Takes two puzzle pieces and swap them in the array
//This occurs when the user clicks on one piece and then clicks on another piece to swap them
//
function swapRects(r1, r2)
{
    var index1;
    var index2;
    var temp = r1;

    index1 = piecesArray.indexOf(r1);
    index2 = piecesArray.indexOf(r2);

    piecesArray[index1] = r2;
    piecesArray[index2] = temp;

    checkWinner();
}

//Compare puzzle pieces in piecesArray with the pieces in the correctOrder array.
function checkWinner()
{
    document.getElementById("buttonContainer").style.display = "block";
    var match = true;

    for(var i = 0; i < piecesArray.length; i++)
    {
        if(piecesArray[i] != correctOrder[i])
        {
            match = false;
        }
    }

    if(match)
    {
        console.log('complete'); //to do: animation here to show the user that the game is complete
        document.getElementById("buttonContainer").style.display = "inherit";
    }
    else
    {
        console.log('not complete');
        document.getElementById("buttonContainer").style.display = "none";
    }
}

//looping through the rows and columns
//drawImage parameters: drawing the image, top x and y coordinates of the image, width and height of the image
//the rest of the parameters refers to the same properties but describes where on the canvas the drawing occurs
function drawImage()
{
    for(var k = 0; k < 4; k++)
    {
        for(var l = 0; l < 3; l++)
        {
            r = piecesArray[k*3+l];
            ctx.drawImage(img, r.left, r.top, r.width, r.height, k*blockSize, l*blockSize, blockSize, blockSize);
        }
    }
}
//first parameter = the array we want to scramble and
//the second parameter is how many times we want to scramble
//In the loop, two random block pieces in the piecesarray list is called and swapped
//Swapping is done 30 times (as defined above)
function scrambleArray(ar, times)
{
    var count = 0;
    var temp;
    var index1;
    var index2;
    while(count < times)
    {
        index1 = Math.floor(Math.random()*piecesArray.length);
        index2 = Math.floor(Math.random()*piecesArray.length);

        temp = piecesArray[index1];
        piecesArray[index1] = piecesArray[index2];
        piecesArray[index2] = temp;

        count++;
    }
}
//Defining the rectangular pieces
function Rectangle(left, top, right, bottom)
{
    this.left = left;
    this.top  = top;
    this.right = right;
    this.bottom = bottom;

    this.width = right - left;
    this.height = bottom - top;
}

function isCanvasSupported()
{
    var elem = document.createElement('canvas');
    return (elem.getContext && elem.getContext('2d'));
}

function Tutorial() {
    $("#cursor").addClass("cursor");
    setTimeout(firstHightlight, 1800);
    setTimeout(secondHightlight, 3900);
    setTimeout(TutorialSwap, 7900);
}

function firstHightlight() {
    highlightRect(0, 0);
}

function secondHightlight() {
    highlightRect(480, 320);
}

function TutorialSwap() {
    swapRects(piecesArray[0], piecesArray[11]);
    $("#cursor").removeClass("cursor");
    drawImage();
}

