const questions = [
{
Serial: 1,
que: "What is the probability of rolling a six on a fair six-sided die?",
ans: 3,
option: [
 "1/2",
 "1/3",
 "1/6",
 "1/4" ]

},

{
Serial: 2,
que: "If you draw a card from a standard deck of 52 playing cards, what is the probability of drawing a red card (hearts or diamonds)?",
ans: 3,
option: [
 "1/4",
 "1/3",
 "1/2",
 "2/3", ]

},

{
Serial: 3,
que: "If you flip a fair coin twice, what is the probability of getting heads on both flips?",
ans: 4,
option: [
 "1/8",
 "1/2",
 "3/4",
 "1/4" ]

},

{
Serial: 4,
que: "You have a bag with 5 red marbles and 3 blue marbles. What is the probability of drawing a red marble without replacement?",
ans: 3,
option: [
 "2/3",
 "1/4",
 "5/8",
 "3/7"]
},

{
Serial: 5,
que: "If you randomly select a card from a well-shuffled deck, what is the probability that it's a face card (jack, queen, or king)?",
ans: 2,
option: [
 "4/13",
 "3/13",
 "1/4",
 "1/3" ]

},

{
Serial: 6,
que: "What is the probability of rolling an even number on a fair six-sided die?",
ans: 2,
option: [
 "1/6",
 "1/2",
 "2/3",
 "1/4" ]

},
{
Serial: 7,
que: "You have a bag with 4 green marbles and 6 yellow marbles. What is the probability of drawing a green marble with replacement?",
ans: 3,
option: [
 "4/10",
 "1/2",
 "2/5",
 "3/5" ]

},

{
Serial: 8,
que: "If you roll two fair six-sided dice, what is the probability of getting a sum of 7?",
ans: 3,
option: [
 "1/12",
 "1/3",
 "1/6",
 "1/4"]

},

{
serial: 9,
que: "In a deck of cards, what is the probability of drawing a heart or a spade?",
ans: 3,
option: [
 "1/4",
 "1/3",
 "1/2",
 "2/3" ]

},

{
Serial: 10,
que: "You have a jar with 10 red balls and 5 blue balls. What is the probability of drawing a blue ball followed by a red ball without replacement?",
Answer: 1,
option: [
 "10/45",
 "2/5",
 "1/3",
 "1/9" ]

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