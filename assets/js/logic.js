
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

    clearCurrentQuestions(); 

    currentQuestion.setAttribute('class','hide');
    console.log('Finished!')
    solutionPage.removeAttribute('class','hide');
    
    startPage.setAttribute('class','fadeOut')
    let d = await delay(1000);
    startPage.setAttribute('class','hide');

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

 function setSelectAttributes(proptag, attrs) {
    for(var key in attrs) {
        proptag.setAttribute(key, attrs[key]);
    }
  }
