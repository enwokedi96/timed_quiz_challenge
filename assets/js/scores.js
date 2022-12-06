
// Confetti visuals (adapted from CoderZ90)

// for starting the confetti 
const start = () => {
    setTimeout(function() {
        confetti.start()
    }, 300); // after time, start the confetti
};

//  for stopping the confetti 
const stop = () => {
    setTimeout(function() {
        confetti.stop()
    }, 3300); // after time, stop the confetti
};

// ------------------------- MAIN CODES ------------------------------
var displayScore = document.querySelector("#final-score"); 
var display = document.querySelector("#highscores");
var clearLeaderboard = document.querySelector("#clear")

var lastUsers = JSON.parse(localStorage.getItem("playerHistory_1"));
clearLeaderboard.addEventListener('click', clearAllLogs);

display.appendChild(document.createTextNode('(current scores at last rung!)'));

for (let i=0; i<lastUsers.length; i++){
    console.log(lastUsers[i])
    var displayItem = document.createElement("li");
    displayItem.textContent = lastUsers[i][0] + ' ----------------------------------------- ' + lastUsers[i][1];
    console.log(displayItem);
    display.appendChild(displayItem);

    // gift the upperclass a confetti shower
    if (i==lastUsers.length-1){
        if (parseInt(lastUsers[i][1])>7){
            console.log(lastUsers[i][1])
            start();
            stop();
    }
}
}

function clearAllLogs() {
        let node = document.getElementById("highscores")
        while(node.hasChildNodes()) {
          node.removeChild(node.lastChild);
        }
        localStorage.clear();
        sessionStorage.clear();
     }



                                                                                             