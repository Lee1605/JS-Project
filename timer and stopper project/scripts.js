// **TIMER**

// DOM integration
let timerDisplay = document.getElementById("timer");
// initializing
let timeLeft = 60;
/* function logic: every second timeLeft variable decreasing by 1 from 60 until 0. 
when reach to 0, timeLeft initializing again */
function countDown() {
  timeLeft--;
  if (timeLeft < 0) {
    return (timeLeft = 60);
  }
  timerDisplay.innerHTML = timeLeft;
}
window.setInterval(countDown, 1000);

// **STOPPER**

// DOM integration
stopperDisplay = document.getElementById("stopper");
// initializing
seconds = 0;
minutes = 0;
/* function logic: every second seconds variable increasing by 1 until 60.
when seconds variable reach to 60, seconds variable initializing and minutes variabale increasing by 1 */
function stopper() {
  seconds++;
  if (seconds / 60 === 1) {
    minutes++;
    seconds = 0;
  }
  stopperDisplay.innerHTML = minutes + ":" + seconds;
}
window.setInterval(stopper, 1000);
