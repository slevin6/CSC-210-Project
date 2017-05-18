/**
 * Created by tinavrieler on 2017-04-13.

 */
if(!localStorage.audio)
{
    localStorage.setItem("audio","on");
}

$(document).ready(function () {
    startAudio();
});

function startAudio() {
    $('.background').each(function() {
        if (localStorage.audio == "off") {
            (this).muted = true;
            var soundButton = document.getElementById("sound");
            soundButton.src = "Pictures/sound_off.png";
        } else {
            (this).muted = false;
            var soundButton = document.getElementById("sound");
            soundButton.src = "Pictures/sound_on.png";

        }
    });
}


function audioControl() {
    var sound = document.getElementById("background_music");
    var soundButton = document.getElementById("sound"); 

    if (localStorage.audio == "on") {
        sound.muted = true;
        soundButton.src = "Pictures/sound_off.png";
        localStorage.audio = "off";
    } else {
        sound.muted = false;
        soundButton.src = "Pictures/sound_on.png";
        localStorage.audio = "on";
    }
}



function playButton() {
    var audio = document.getElementById('audio1');
    audio.play()
}

function wrongButton() {
    var audio = document.getElementById('audioWrong');
    audio.play()
}




function audioGame() {

    var sound1 = document.getElementById("background_music2");
    var soundButton = document.getElementById("sound");
    if (localStorage.audio == "on") {
        sound1.muted = true;
        soundButton.src = "Pictures/sound_off.png";
        localStorage.audio = "off";
    } else {
        sound1.muted = false;
        soundButton.src = "Pictures/sound_on.png";
        localStorage.audio = "on";
    }
}

function dogSound() {
    var dogSoundPlay = document.getElementById("audioDog");
    dogSoundPlay.play();
}

function horseSound() {
    var horseSoundPlay = document.getElementById("audioHorse");
    horseSoundPlay.play();
}

function catSound() {
    var SoundPlay = document.getElementById("audioCat");
    SoundPlay.play();
}

/*
 var soundButton = document.getElementById("soundButton");
 var isPlaying = false;

 function togglePLay(){
 if (isPlaying) {
 soundButton.pause();
 isPlaying = false;
 } else {
 soundButton.play();
 isPlaying = true;
 }
 }

 */
