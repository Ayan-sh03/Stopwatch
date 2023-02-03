let hourDisp = document.getElementById("hour");
let minuteDisp = document.getElementById("min");
let secondDisp = document.getElementById("second");

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
resetButton.setAttribute("disabled",true);


let countSeconds = 0;
let countMinutes = 0;
let countHours = 0;
let intervalId = null;

function updateDisplay() {
  if (countSeconds === 60) {
    countSeconds = 0;
    countMinutes++;
    secondDisp.innerHTML = `${countSeconds}`;
    minuteDisp.innerHTML = `${countMinutes}:`;

    if (countMinutes === 60) {
      countMinutes = 0;
      countHours++;
      hourDisp.innerHTML = `${countHours}:`;
      secondDisp.innerHTML = `${countSeconds}`;
    }
  }
  countSeconds++;
  secondDisp.innerHTML = `${countSeconds}`;
}

function startClock() {
  intervalId = setInterval(updateDisplay, 1000);
  startButton.setAttribute("disabled", true);
  stopButton.removeAttribute("disabled");
  resetButton.removeAttribute("disabled");
}

function stopClock() {
  clearInterval(intervalId);
  startButton.removeAttribute("disabled");
  stopButton.setAttribute("disabled", true);
}

function resetClock() {
  stopClock();
  countSeconds = countMinutes = countHours = 0;
  hourDisp.innerHTML = `0${countHours}:`;
  minuteDisp.innerHTML = `0${countMinutes}:`;
  secondDisp.innerHTML = `0${countSeconds}`;
}

startButton.addEventListener("click", startClock);
stopButton.addEventListener("click", stopClock);
resetButton.addEventListener("click", resetClock);
