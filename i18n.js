$(document).ready(function () {
    setLanguage();
});

 //current language. Default is english
if(!localStorage.currentLang)
{
localStorage.setItem("currentLang","en");
}

var json;

//String lookup tables in json format. Separate key/value pairs with a comma
var english = '{"startText": "Start!","puzzleHelp": "Click on any two puzzle pieces to swap their places","puzzleHeader": "Puzzle Game","dog":"Dog",' +
    '"cat":"Cat","pig":"Guinea Pig","horse":"Horse","elephant":"Elephant","donkey":"Donkey","scratchHelp":"Press mouse and move over to reveal a hidden image",' +
    '"scratchHeader":"Scratch Off Game","scribbleHeader":"Scribble game","scribbleHelp":"Guess the appearing image as fast as possible!", "correctText": "Correct!"}'

var swedish = '{"startText": "Börja!","puzzleHelp": "Clicka på två puzzelbitar för att få de att byta plats med varandra", "puzzleHeader": "Puzzle Game","dog":"Hund",' +
    '"cat":"Katt","pig":"Marsvin","horse":"Häst","elephant":"Elefant","donkey":"åsna","scratchHelp":"Press mouse and move over to reveal a hidden Image",' +
    '"scratchHeader":"Scratch Off Game","scribbleHeader":"Scribble game","scribbleHelp":"Guess the appearing image as fast as possible!"}'


function changeLanguage() {
    if (localStorage.currentLang)
    {   
        var lang = localStorage.currentLang
    }
    else { var lang = "en";}

    if (lang == "en") {
        localStorage.currentLang = "se";
        
    }
    else { 
        localStorage.currentLang = "en";
        
    }
    setLanguage();

}

//called when the flag is clicked. Switches between swedish and english
function setLanguage() {

//if the current language is english we need to change it to swedish. Therefore the swedish lookup table is parsed and the current lang is set to swedish. Else the
//english table is parsed and the current language is set back to english
    if (localStorage.currentLang)
    {
        var lang = localStorage.currentLang
    }
    else { var lang = "en";}

    if (lang == "se") {
        json = JSON.parse(swedish);
        $('#flag').each(function() {
            (this).src = "Pictures/english.png";
        });
        //document.getElementById("flag").src = "Pictures/english.png";
        
    }
    else { 
        json = JSON.parse(english);
        $('#flag').each(function() {
            (this).src = "Pictures/swedish.svg";
        });
        //document.getElementById("flag").src = "Pictures/swedish.svg";
    }

//gets every element containg text via its ID and sets it with getting the string by key from whichever json table was parsed before
//be careful with the property you have to set. It might be innerHTML or value or something else
    //document.getElementById("startText").innerHTML = json["startText"];
    $('*').each(function() {
        if ($(this).attr('i18n')) {

            var text = $(this).attr('i18n');
            var translated_text = json[text];
            $(this).html(translated_text);
        }
    });
}

