// global key values correspond to the question number
// global values include the question, options and answer
// the options is an array and the answer is the index of the correct option in the array

var allQuestions = {
    1:{
        question: 'What skill does a front-end developer not need?',
        options:['React', 'MATLAB Programming', 'DOM Manipulation', 'Javascript'],
        answer: 1},
    2:{
        question: 'Which of these describes HTML meta tags',
        options:['Meta tags can include data about encoding, document title, character description, etc,',
         'Meta tags are not passed as pairs', 
         'Meta tags are displayed on the page', 
         'Meta tags fit inside the HTML body tag.'],
        answer: 0},
    3:{
        question: 'Differentiate between div and span?',
        options:['Div is for in-line elements and span for blocks', 
        'Span tag cannot include global and attributes',
        'Div can contain <p> and span does not'],
        answer: 2},
    4:{
        question: 'What is a Grid system in CSS?',
        options:['Writing neat, legible text unto HTML body', 
            'Liasing with JavaScripts to implement user-informed styles',
            'Partitioning of spatial dimensions of page into relevant html contents', 
            'Porting styles from external sources to local CSS'],
        answer: 2 },
    5:{
        question: 'Inside which HTML element do we put the JavaScript?',
        options: ['<body>','<script>','<head>','<js>'],
        answer: 1 },
    6:{
        question: "Given that the id of a paragraph tag is 'snaky-puppy', which is a valid way to edit the tag in JavaScript?",
        options: ['document.getElementByName("snaky-puppy").content = "Awesome band bruv!"',
                    'document.getElementById("snaky-puppy").content = "Awesome band bruv!"',
                    'document.getElement("p").innerHTML = "Awesome band bruv!"',
                    'document.getElementById("snaky-puppy").innerHTML = "Awesome band bruv!"'],
        answer: 3 },
    7:{
        question: 'Inside which HTML element do we put the JavaScript?',
        options: ['<body>','<script>','<head>','<js>'],
        answer: 1 },
    8:{
        question: 'Inside which HTML element do we put the JavaScript?',
        options: ['<body>','<script>','<head>','<js>'],
        answer: 1 },
    9:{
        question: 'Inside which HTML element do we put the JavaScript?',
        options: ['<body>','<script>','<head>','<js>'],
        answer: 1 },
    10:{
        question: 'Inside which HTML element do we put the JavaScript?',
        options: ['<body>','<script>','<head>','<js>'],
        answer: 1 },
}