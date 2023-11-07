const questions = [
{
    "serial": 1,
    "que": "A shopkeeper bought 100 pens at ₹10 each and sold them at ₹15 each. What is the profit (in INR)?",
    "ans": 4,
    "option": [
        "₹100",
        "₹250",
        "₹50",
        "₹500" ]
},

{
    "serial": 2,
    "que": "If a trader sold a shirt for ₹450, making a profit of ₹80, what was the cost price of the shirt (in INR)?",
    "ans": 1,
    "option": [
        "₹370",
        "₹370",
        "₹530",
        "₹520" ]
},

{
    "serial": 3,
    "que": "A bookshop bought 200 books at ₹150 each. If they sell each book at ₹200, what is the total profit (in INR)?",
    "ans": 2,
    "option": [
        "₹5,000",
        "₹10,000",
        "₹20,000",
        "₹2,000" ]
},

{
    "serial": 4,
    "que": "A mobile phone is purchased for ₹12,000 and sold for ₹14,500. What is the profit percentage?",
    "ans": 3,
    "option": [
        "5%",
        "20%",
        "21.67%",
        "15%" ]
},

{
    "serial": 5,
    "que": "A trader incurred a loss of ₹750 when he sold a watch for ₹2,250. What was the cost price of the watch (in INR)?",
    "ans": 2,
    "option": [
        "₹2,000",
        "₹3,000",
        "₹2,500",
        "₹1,500" ]
},

{
    "serial": 6,
    "que": "A pair of shoes is marked at ₹1,200, but a customer gets a discount of 10%. What is the selling price (in INR) after the discount?",
    "ans": 3,
    "option": [
        "₹1,320",
        "₹1,100",
        "₹1,080",
        "₹1,200" ]
},

{
    "serial": 7,
    "que": "A trader bought 80 kilograms of rice at ₹35 per kilogram and sold it at ₹45 per kilogram. What is the total profit (in INR)?",
    "ans": 2,
    "option": [
        "₹400",
        "₹800",
        "₹1600",
        "₹200" ]
},

{
    "serial": 8,
    "que": "If a car is sold at a loss of 15% and the selling price is ₹8,500, what was the cost price (in INR)?",
    "ans": 3,
    "option": [
        "₹8,500",
        "₹9,500",
        "₹10,000",
        "₹7,500" ]
},

{
    "serial": 9,
    "que": "A company earned a profit of ₹4,500 in the first quarter and a loss of ₹2,800 in the second quarter. What is the net profit or loss (in INR) for the two quarters?",
    "ans": 1,
    "option": [
        "₹1,700 profit",
        "₹1,700 loss",
        "₹1,700 gain",
        "₹1,700 deficit" ]
},

{
    "serial": 10,
    "que": "A trader sold a bicycle for ₹2,500, making a profit of 25%. What was the cost price of the bicycle (in INR)?",
    "ans": 4,
    "option": [
        "₹1,250",
        "₹2,000",
        "₹2,100",
        "₹2,000" ]
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