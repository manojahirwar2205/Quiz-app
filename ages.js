const questions = [
 {
    serial: 1,
    que: "The sum of the ages of Alice and Bob is 40 years. If Alice is 10 years older than Bob, how old is Alice?",
    ans: 2,
    option: [
        "20 years old",
        "25 years old",
        "30 years old",
        "35 years" ]

},

{
serial: 2,
que: "Three years ago, John's age was twice as old as Sarah's. If John is currently 27 years old, how old is Sarah?",
ans: 2,
option: [
 "18 years old",
 "21 years old",
 "24 years old",
 "30 years old" ]

},

{
serial: 3,  
que: "The average age of a family of four is 30 years. If the father is 10 years older than the mother and their two children are 5 years apart in age, how old is the mother?",
ans: 1,
option: [
 "25 years old",
 "30 years old",
 "35 years old",
 "40 years old" ]

},

{
serial: 4  , 
que: "If Emily is half the age of her older brother Jake, and Jake is 18 years old, how old is Emily?",
ans: 2,
option: [
 "6 years old",
 "9 years old",
 "12 years old",
 "15 years old" ]

},

{
serial: 5,
que: "If Sam's age is three times the age of his son Max, and Sam is 45 years old, how old is Max?",
ans: 3,
option: [
 "10 years old",
 "12 years old",
 "15 years old",
 "18 years old" ]

},

{
serial: 6,
que: "Five years ago, Mia was twice as old as her sister Ella. If Mia is currently 15 years old, how old is Ella?",
ans: 3,
option: [
 "5 years old",
 "7.5 years old",
 "10 years old",
 "12.5 years old" ]
 
},

{
serial: 7,
que: "Tom's age is four times the age of his son Tim. If Tom is 40 years old, how old is Tim?",
ans: 4,
option: [
 "5 years old",
 "20 years old",
 "15 years old",
 "10 years old" ]
 
},

{
serial: 8,
que: "If Mary is 8 years older than Jane, and their combined age is 56 years, how old is Jane?",
ans: 3,
option: [
 "20 years old",
 "28 years old",
 "23 years old",
 "32 years old" ]

},

{
serial: 9,
que: "The sum of David's age and Lisa's age is 60. If David is 25 years older than Lisa, how old is Lisa?",
ans: 1,
option: [
 "17.5 years old",
 "20 years old",
 "25 years old",
 "30 years old"]

},

{
serial: 10,
que: "Ten years ago, Sarah was twice as old as Michael. If Sarah is currently 40 years old, how old is Michael?",
ans: 3,
option: [
 "20 years old",
 "25 years old",
 "30 years old",
 "35 years old" ]

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