
// Confetti visuals (adapted from CoderZ90)

// for starting the confetti 
const start = () => {
    setTimeout(function() {
        confetti.start()
    }, 300); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};

//  for stopping the confetti 
const stop = () => {
    setTimeout(function() {
        confetti.stop()
    }, 3300); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};
// after this here we are calling both the function so it works
start();
stop();

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
    displayItem.textContent = lastUsers[i][0] + ' ----------------------------------------- ' + lastUsers[i]["1"];
    console.log(displayItem);
    display.appendChild(displayItem);}

function clearAllLogs() {
        let node = document.getElementById("highscores")
        while(node.hasChildNodes()) {
          node.removeChild(node.lastChild);
        }
        localStorage.clear();
        sessionStorage.clear();
     }



                                                                                             