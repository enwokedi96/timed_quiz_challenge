
var questionCount =  0;

var startQuizButton = document.getElementById("start");
var startPage = document.querySelector(".start");
var currentQuestion = document.getElementById("questions");
var solutionPage = document.querySelector("#end-screen");
var initials = document.querySelector("#initials");
var submitInitials = document.querySelector("#submit");

startQuizButton.addEventListener('click',revealQuestions);

async function revealQuestions(event) {
    var i = questionCount;

    currentQuestion.setAttribute('class','hide');
    console.log('Finished!')
    solutionPage.removeAttribute('class','hide');
    
 
    startPage.setAttribute('class','fadeOut')
    let d = await delay(1000);
    startPage.setAttribute('class','hide');
        
}

// -------------------------- ALL HELPER  FUNCTIONS ---------------------------------//

const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }

