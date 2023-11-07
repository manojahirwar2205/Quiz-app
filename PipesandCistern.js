const questions = [
{
serial: 1,
que: "Two pipes can fill a cistern in 4 hours and 6 hours, respectively. How long will it take to fill the cistern if both pipes are opened together?",
ans: 3,
option: [
     "2 hours",
     "4 hours",
     "2.4 hours",
     "10 hours" ]

},

{serial: 2,
 que: "A pipe can fill a tank in 12 hours, and another pipe can empty the same tank in 8 hours. If both pipes are opened simultaneously, how long will it take to fill the tank?",
 ans: 1,
 option: [
 "24 hours",
 ":20 hours",
 "10 hours",
 "16 hours" ]
},

{
serial: 3,
que: "Pipe A can fill a cistern in 15 hours, while pipe B can fill the same cistern in 12 hours. How long will it take to fill the cistern if both pipes are opened together?",
ans: 2,
option: [
 "10 hours",
 "7.2 hours",
 "6.857 hours",
 "8 hours" ]

},

{
serial: 4,  
que: "If three pipes, A, B, and C, can fill a cistern in 8 hours, 12 hours, and 16 hours, respectively, how long will it take to fill the cistern if all three pipes are opened together?",
ans: 3,
option: [
 "3.692 hours",
 "5 hours",
 "4.364 hours",
 "7 hours" ]
},

{
serial: 5,
que: "Pipe X can fill a tank in 5 hours, and pipe Y can fill the same tank in 8 hours. How long will it take to fill the tank if both pipes are opened together, but pipe Y is closed after 3 hours?",
ans: 2,
option: [
"5 hours",
"6 hours",
"4 hours",
"7 hours"]
},

{
serial: 6,
que: "A pipe can fill a pool in 10 hours, and another pipe can fill the same pool in 15 hours. How long will it take to fill the pool if both pipes are opened together and then, after 2 hours, a third pipe that can empty the pool in 12 hours is opened as well?",
ans: 2,
option: [
"7 hours",
"6 hours",
"9 hours",
"10 hours"]

},

{
serial: 7,
que: "Pipe A can fill a tank in 18 hours, and pipe B can fill the same tank in 12 hours. If pipe A is opened for 6 hours and then both pipes are opened together, how long will it take to fill the tank completely?",
ans: 4,
option: [
"4 hours",
"5 hours",
"8 hours",
"6 hours" ]

},

{
serial: 8,
que: "Pipe P can fill a cistern in 20 hours, while pipe Q can empty the same cistern in 25 hours. If both pipes are opened together, how long will it take to fill the cistern?",
ans: 1,
option: [

"40 hours",
"45 hours",
"5 hours",
"10 hours"]

},

{
serial: 9,    
que: "Pipe A can fill a reservoir in 6 hours, and pipe B can fill the same reservoir in 9 hours. How long will it take to fill half of the reservoir using both pipes together?",
ans: 2,
Options: [

"2.5 hours",
"3.6 hours",
"4 hours",
"1.5 hours" ]

},

{
serial: 10,
que: "Pipe X can fill a container in 4 hours, and pipe Y can fill the same container in 5 hours. How long will it take to empty the container if both pipes are opened together?",
ans: 3,
Options: [

"4 hours",
"5 hours",
"It cannot be emptied; it will keep filling.",
"9 hours" ]
}
]

document.querySelector(".main-container").style.display = "none";
let nextButton = document.querySelector('.btn5');
let option1 = document.querySelector('.btn1');
let option2 = document.querySelector('.btn2');
let option3 = document.querySelector('.btn3');
let option4 = document.querySelector('.btn4');
let timer = document.getElementById('timer');
let score = document.querySelector('#score');
let calculateScore = 0;
let calculateAttempted = 0;
let correctAnswers = document.querySelector('#correctAnswers');
let wrongAttemps = document.querySelector('#wrongAttemps');
let timeTaken = document.querySelector('#timeTaken');
let totalAttempted = document.querySelector('#totalAttempted');

let i = 0;
let timeleft;
let timeinterval;
function startTimer(duration) {

    timeleft = duration;
    timer.textContent = `${timeleft}`;
    timeleft--;
    timeinterval = setInterval(updatetime, 1000);
}

function updatetime() {

    if (timeleft > 0) {
        timer.textContent = `${timeleft}`;
        timeleft--;
    }
    else {
        clearInterval(timeinterval);
        timer.innerHTML = `times up`;
    }
}

let questionContainer = document.querySelector('.question-container');
let originalBackgroundColor = option1.style.backgroundColor;
let originalColor = option1.style.color;
function loadQuiz(i) {
    score.innerHTML = `SCORE : ${calculateScore}`;
    if (i >= 10) {
        resultshow();
    }
    clearInterval(timeinterval);
    startTimer(10);
    option1.style.backgroundColor = originalBackgroundColor;
    option1.style.color = originalColor;
    option2.style.backgroundColor = originalBackgroundColor;
    option2.style.color = originalColor;
    option3.style.backgroundColor = originalBackgroundColor;
    option3.style.color = originalColor;
    option4.style.backgroundColor = originalBackgroundColor;
    option4.style.color = originalColor;
    console.log(questions[i].que);


    questionContainer.innerHTML = questions[i].que;
    option1.innerHTML = questions[i].option[0];
    option2.innerHTML = questions[i].option[1];
    option3.innerHTML = questions[i].option[2];
    option4.innerHTML = questions[i].option[3];


    
    
}
    option1.addEventListener('click', () => { checkAnswer(i, 1) });
    option2.addEventListener('click', () => { checkAnswer(i, 2) });
    option3.addEventListener('click', () => { checkAnswer(i, 3) });
    option4.addEventListener('click', () => { checkAnswer(i, 4) });
    nextButton.addEventListener('click', () => { loadQuiz(++i) });

function resultshow() {
    correctAnswers.innerHTML+=`     ${calculateScore}`;
    wrongAttemps.innerHTML+=`       ${calculateAttempted-calculateScore}`;
    totalAttempted.innerHTML+=`     ${calculateAttempted}`;

    document.querySelector(".main-container1").style.display = "none";
    document.querySelector(".main-container").style.display = "";

}

function checkAnswer(questionIndex, optionChoosen) {
    calculateAttempted++;
    if (questions[i].ans == optionChoosen) {
        calculateScore += 1;
        console.log(calculateScore);
        console.log("correct ans");
        console.log(optionChoosen);
        if (optionChoosen == 1) {
            option1.style.backgroundColor = 'green';
            option1.style.color = 'white'
        }
        if (optionChoosen == 2) {
            option2.style.backgroundColor = 'green';
            option2.style.color = 'white'
        }
        if (optionChoosen == 3) {
            option3.style.backgroundColor = 'green';
            option3.style.color = 'white'
        }
        if (optionChoosen == 4) {
            option4.style.backgroundColor = 'green';
            option4.style.color = 'white'
        }
    }
    else {
        console.log("Wrong");
        if (optionChoosen == 1) {
            option1.style.backgroundColor = 'red';
            option1.style.color = 'white'
        }
        if (optionChoosen == 2) {
            option2.style.backgroundColor = 'red';
            option2.style.color = 'white'
        }
        if (optionChoosen == 3) {
            option3.style.backgroundColor = 'red';
            option3.style.color = 'white'
        }
        if (optionChoosen == 4) {
            option4.style.backgroundColor = 'red';
            option4.style.color = 'white'
        }
    }
}
loadQuiz(0);