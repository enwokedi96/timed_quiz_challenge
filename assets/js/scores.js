
var displayScore = document.querySelector("#final-score"); 
var display = document.querySelector("#highscores");
var userScore = localStorage.getItem("currentScore");

var lastUser = JSON.parse(localStorage.getItem("playerHistory"));
console.log(lastUser);
var displayItem = document.createElement("li");
displayItem.textContent = lastUser.user + ' ----------------------------------------- ' + lastUser.score;
console.log(displayItem);
display.appendChild(displayItem);



                                                                                             