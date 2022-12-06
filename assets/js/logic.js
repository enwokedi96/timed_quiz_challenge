import allQuestions from './questions.js'

var userAnswer;
var currentAnswer;
var areThereStillQuestions;
var questionCount =  0;

var startQuizButton = document.getElementById("start");
var startPage = document.querySelector(".start");
var currentQuestion = document.getElementById("questions");
var solutionPage = document.querySelector("#end-screen");
var initials = document.querySelector("#initials");
var submitInitials = document.querySelector("#submit");

if(startQuizButton){
    startQuizButton.addEventListener('click',revealQuestions);
}
// if(startQuizButton){  
//     initials.addEventListener('change', displayHistory)
// }
if(submitInitials){
    submitInitials.addEventListener('click', displayHistory);
    submitInitials.setAttribute("onclick","location.href='highscores.html'");
}
if(currentQuestion){
    currentQuestion.addEventListener('click', checkSolution);
}

async function revealQuestions(event) {
    var i = questionCount;
    clearCurrentQuestions(); 

    areThereStillQuestions = (allQuestions[Object.keys(allQuestions)[questionCount]]!==undefined)
    console.log(areThereStillQuestions);
    if (areThereStillQuestions===false) {
        currentQuestion.setAttribute('class','hide');
        console.log('Finished!')
        solutionPage.removeAttribute('class','hide');
        //startQuiz.removeEventListener('click',revealQuestions);
        //currentQuestion.removeEventListener('click', checkSolution);
    }

    else{
        if (i==0){
            startPage.setAttribute('class','fadeOut')
            let d = await delay(1000);
            startPage.setAttribute('class','hide');
        }

        var askQuestion = document.createElement("h2");
        askQuestion.textContent = allQuestions[Object.keys(allQuestions)[i]]["question"];
        currentQuestion.appendChild(askQuestion);
        for (let j=0; j<allQuestions[Object.keys(allQuestions)[i]]["options"].length; j++){
            var opt = allQuestions[Object.keys(allQuestions)[i]]["options"][j];
            var selectOpt = document.createElement("button");
            var selectOptLabel = opt; //console.log(selectOptLabel)
            setSelectAttributes(selectOpt, {"id":`${j}`,
                                            "style": `text-align: left;`})
            selectOpt.onclick = function(e) {
                console.log(this.id);
                userAnswer = this.id;};
            var optText = document.createTextNode(`option ${j+1} :${opt}`); //document.createElement("label");       
            selectOpt.appendChild(optText);
            currentQuestion.appendChild(selectOpt); 
            currentQuestion.appendChild(document.createElement("br"));
            let d = await delay(200);
        }
        currentAnswer = allQuestions[Object.keys(allQuestions)[questionCount]]["answer"]
    }

}

// -------------------------- ALL HELPER  FUNCTIONS ---------------------------------//

const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }

function clearCurrentQuestions() {
   let node = document.getElementById("questions")
   while(node.hasChildNodes()) {
     node.removeChild(node.lastChild);
   }
}

// // define check boxes mutuality for password lengths
// function selectOnlyOne (obj) {
//     userAnswer = obj.id;
//   }

function setSelectAttributes(proptag, attrs) {
    for(var key in attrs) {
        proptag.setAttribute(key, attrs[key]);
    }
  }

async function checkSolution(event) {
    console.log(`user: ${userAnswer} | answer: ${currentAnswer}`);
    var messageUser;
    if (userAnswer==currentAnswer){
            messageUser = "Correct Option Chosen!!";
            if (localStorage.getItem("currentScore") === null || questionCount===0) {
                localStorage.setItem("currentScore",1)
              }
            else {
                var newScore = parseInt(localStorage.getItem("currentScore")) + 1;
                localStorage.setItem("currentScore",newScore)
            }
        }
    else{
            messageUser = `Wrong Option!!!`;
            if (localStorage.getItem("currentScore") === null || questionCount===0) {
                localStorage.setItem("currentScore",0)
              }
        }
    var msg = document.createElement("h4");
    msg.setAttribute("style", "margin-top: 12px");
    msg.textContent = messageUser; 
    currentQuestion.appendChild(msg); let d = await delay(120);
    console.log(`Next Question: ${questionCount}`)
    questionCount++;
    //event.stopPropagation();
    revealQuestions();  
}

//--------------------------------------------------------
//var userScore = parseInt(localStorage.getItem("currentScore"));

function displayHistory(){
    if (initials.value===''){
        console.log("No intials entered!");
        return;
        }
    else{
        var history_ = {user:initials.value.trim(),
            score: localStorage.getItem("currentScore")};
        console.log(`You're the man, ${initials.value}!!`)
        localStorage.setItem("playerHistory",JSON.stringify(history_));
    }
}

