//import  * as logic from './logic.js'

var displayScore = document.querySelector("#final-score"); 
var display = document.querySelector("#highscores");
var userScore = localStorage.getItem("currentScore");

//console.log(localStorage.getItem(""));

if(displayScore){
    displayScore.textContent = userScore;
}