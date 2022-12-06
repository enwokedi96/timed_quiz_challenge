// user-defined variables
var userAnswer;
var currentAnswer;
var areThereStillQuestions;
var questionCount =  0;
var totalTime = 75;
var scoreEachIteration=[]

// anchors
var startQuizButton = document.getElementById("start");
var startPage = document.querySelector(".start");
var currentQuestion = document.getElementById("questions");
var displayScore = document.getElementById("final-score"); 
var solutionPage = document.querySelector("#end-screen");
var initials = document.querySelector("#initials");
var submitInitials = document.querySelector("#submit");
var timer = document.querySelector("#time");

timer.innerHTML = `${totalTime}`

// listener to capture last score and display at quizz end
currentQuestion.addEventListener('click', function(){
        var num = localStorage.getItem("currentScore");
        console.log(`score: ${num} `) ;
        displayScore.textContent = num;
    });

// Add countdown timer to start button
startQuizButton.addEventListener("click", function(){
        var downloadTimer = setInterval(function function1(){
        timer.innerHTML = totalTime + "&nbsp"+"seconds remaining";
    
        totalTime -= 1;
        if(totalTime <= 0){
            clearInterval(downloadTimer);
            timer.innerHTML = "Time is up!"
        }
        }, 1000);
    
        //console.log(countdown);
    });

// Other eventlisteners
if(startQuizButton){
        startQuizButton.addEventListener('click',revealQuestions);
    }
    
if(submitInitials){
        submitInitials.addEventListener('click', displayHistory);
    }
    
if(currentQuestion){
        currentQuestion.addEventListener('click', checkSolution);
    }
    
if (initials){
        initials.addEventListener('change', function (){
            submitInitials.setAttribute("onclick","location.href='highscores.html'");
        })
    }

//------------------------ MAJOR EVENT FUNCTIONS ----------------------
async function revealQuestions(event) {
    
    var i = questionCount;
    clearCurrentQuestions();

    areThereStillQuestions = (allQuestions[Object.keys(allQuestions)[questionCount]]!==undefined)
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
            let d = await delay(500);
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
            let d = await delay(100);
            currentAnswer = allQuestions[Object.keys(allQuestions)[questionCount]]["answer"]
        }
        
    }

    //return (document.removeEventListener("click", revealQuestions));
    
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
    currentQuestion.appendChild(msg); let d = await delay(150);
    console.log(`Next Question: ${questionCount}`)
    questionCount++; //event.stopPropagation()

    if (areThereStillQuestions){
        revealQuestions(); 
    } 
}

function displayHistory(){
    if (initials.value.trim()===''){
        console.log("No intials entered!");
        alert("Please enter initials!!")
        //return;
        }
    else{
        var history_ = {0:initials.value.trim(), 1:localStorage.getItem("currentScore")};
        console.log(`You're the man, ${initials.value}!!`)
        
        if (localStorage.getItem("playerHistory_1") !== null){
            var obj = JSON.parse(localStorage.getItem("playerHistory_1"));
            obj.push(history_);
            localStorage.setItem("playerHistory_1",JSON.stringify(obj));
        }
        else{
            var obj = []; 
            obj.push(history_);
            localStorage.setItem("playerHistory_1",JSON.stringify(obj));
        }
    }
}


// -------------------------- ALL HELPER  FUNCTIONS ---------------------------------//

const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }

// startQuizButton.onclick(setInterval(countTimerDown,1000));
// function countTimerDown(){
//     totalTime--;
//     timer.innerHTML = `${totalTime}`;}

function clearCurrentQuestions() {
   let node = document.getElementById("questions")
   while(node.hasChildNodes()) {
     node.removeChild(node.lastChild);
   }
}

function setSelectAttributes(proptag, attrs) {
    for(var key in attrs) {
        proptag.setAttribute(key, attrs[key]);
    }
  }

//--------------------------------------------------------

