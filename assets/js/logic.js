
var questionCount =  0;

var startQuizButton = document.getElementById("start");
var startPage = document.querySelector(".start");
var currentQuestion = document.getElementById("questions");
var solutionPage = document.querySelector("#end-screen");
var initials = document.querySelector("#initials");
var submitInitials = document.querySelector("#submit");



function revealQuestions(event) {
    var i = questionCount;

    currentQuestion.setAttribute('class','hide');
    console.log('Finished!')
    solutionPage.removeAttribute('class','hide');
    
 
    startPage.setAttribute('class','fadeOut')
    startPage.setAttribute('class','hide');
        
}

