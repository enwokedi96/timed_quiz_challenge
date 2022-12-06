
var displayScore = document.querySelector("#final-score"); 
var display = document.querySelector("#highscores");
//var userScore = localStorage.getItem("currentScore");

var lastUsers = JSON.parse(localStorage.getItem("playerHistory_1"));
//console.log(lastUsers);
display.appendChild(document.createTextNode('(current scores at last rung!)'));
for (let i=0; i<lastUsers.length; i++){
    console.log(lastUsers[i])
    var displayItem = document.createElement("li");
    displayItem.textContent = lastUsers[i][0] + ' ----------------------------------------- ' + lastUsers[i]["1"];
    console.log(displayItem);
    display.appendChild(displayItem);}



                                                                                             