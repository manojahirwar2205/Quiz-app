let pipesCistern = document.getElementById('pipes');
let mainContainer = document.querySelector('.main-container')

let parentContainer = document.createElement('div');
parentContainer.style.position = 'relative';
parentContainer.appendChild(mainContainer);
document.body.appendChild(parentContainer);

// Create the timer element and position it within the parent container
let timerElement = document.createElement('div');
timerElement.style.position = 'absolute';
timerElement.style.top = '10px';
timerElement.style.left = '10px';
parentContainer.appendChild(timerElement);

pipesCistern.addEventListener("click", () => {
  myFunction(0);
  startTimer(120);
});

var storedName = localStorage.getItem("storedName");

function loadName(){
    var userName = document.getElementById("userName")
} 

let timeleft;
let timeinterval;
startTimer();
function startTimer(duration){
    console.log("Hello timer")
    timeleft = duration;
    timeinterval = setInterval(updateTimer,1000);
}
function updateTimer()
{
    console.log("Update timer")
    if(timeleft>0)
    {
        timerElement.textContent=`Time left ${timeleft}`;
        timeleft--;
    }
    else{
        clearInterval(timeinterval);
        timerElement.textContent = `times up`;
    }
}