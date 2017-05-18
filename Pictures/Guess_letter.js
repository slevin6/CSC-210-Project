/**
 * Created by tinavrieler on 2017-03-28.
 */


/* The code is used to test whether the window has loaded*/
window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded() {
    canvasApp();
}

function canvasApp() {
    var guesses = 0;
    var message = "Guess the letter from a (lower) to z (higher)";
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
        "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var today = new Date();
    var letterToGuess = "";
    /*the game's secret letter*/
    var higherOrLower = "";
    /*holds the text higher or lower depending on where
     the last guessed letter is in relation to the secret letter*/
    var lettersGuessed;
    var gameOver = false;


    var theCanvas = document.getElementById("canvasOne");
    var context = theCanvas.getContext("2d");

    initGame();

    function initGame() {

        /* Finds a random letter from the letter array and stores it in the letterToGuess variable*/
        var letterIndex = Math.floor(Math.random() * letters.length);
        letterToGuess = letters[letterIndex];
        guesses = 0;
        lettersGuessed = [];
        gameOver = false;

        window.addEventListener("keyup", eventKeyPressed, true);
        /*DOM listen for the keyboard keyup event.
         When a key is pressed, eventKeyPressed event handler test the letter pressed*/
        var formElement = document.getElementById("createImageData");
        formElement.addEventListener('click', createImageDataPressed, false);
        drawScreen(); //varför kallar man på denna funktion två ggr? (se nedan) Kan ej ladda hem modernzr.
    }

    function eventKeyPressed(e) {
        if (!gameOver) {

            var letterPressed = String.fromCharCode(e.keyCode);
            /* gets the key-press value and converts
             to alphabetic letter to test with the letter stored in letterToGuess*/
            letterPressed = letterPressed.toLowerCase();
            /* converts to lower case letters for comparison*/
            guesses++;
            lettersGuessed.push(letterPressed);

            if (letterPressed == letterToGuess) {
                gameOver = true;
            } else {
                letterIndex = letters.indexOf(letterToGuess);
                /* “we use the indexOf() array method
                 to get the relative index of each letter”*/
                guessIndex = letters.indexOf(letterPressed);

                if (guessIndex < 0) {
                    higherOrLower = "That is not a letter";
                }
                else if (guessIndex > letterIndex) {
                    higherOrLower = "Lower";
                }
                else {
                    higherOrLower = "Higher";
                }
            }
            drawScreen();
        }
    }

    //var ska måsvingen till canvasapp vara egentligen?
    function drawScreen() {
        //background
        context.fillStyle = "#ffffaa";
        context.fillRect(0, 0, 500, 300);

        //Box
        context.strokeStyle = "#000000";
        context.strokeRect(5, 5, 490, 290);
        context.textBaseline = "top";
        //Date
        context.fillStyle = "#000000";
        context.font = "10px _sans";
        context.fillText(today, 150, 10);

        //Message
        context.fillStyle = "FF0000";
        context.font = "14px _sans";
        context.fillText(message, 125, 30);

        //Guesses
        context.fillStyle = "#109910";
        context.font = "16px _sans";
        context.fillText('Guesses: ' + guesses, 215, 50);

        //Higher or Lower
        context.fillStyle = "#000000";
        context.font = "16px _sans";
        context.fillText('Higher or Lower: ' + higherOrLower, 150, 125);

        //Letters guessed
        context.fillStyle = "#FF0000";
        context.font = "16px _sans";
        context.fillText('Letters Guessed: ' + lettersGuessed.toString(), 10, 260);

        if (gameOver) {
            context.fillStyle = "#FF0000";
            context.font = "40px _sans";
            context.fillText("You got it!", 150, 180);
        }

    }
    function createImageDataPressed() {
        window.open(theCanvas.toDataURL(), "canvasImage", "left=0, top=0"
            + theCanvas.width + ",height=" + theCanvas.height + ",toolbar=0,resizable=0");

    }

}

