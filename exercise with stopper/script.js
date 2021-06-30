let has_flipped = false;
let firstcard;
let secondcard;
const memory = document.querySelectorAll(".image");
const cards = document.querySelectorAll(".img1");
const body = document.getElementById("body");
const after = document.getElementById("after");
const pop = document.getElementById("pop");
const score = document.getElementById("score");
const points = document.getElementById("points");
points.innerHTML = 0;
let arr = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let sum1 = 0;

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
  if (arr2.length === 6) {
    return;
  }
  stopperDisplay.innerHTML = minutes + ":" + seconds;
}
window.setInterval(stopper, 1000);

for (let i = 0; i < memory.length; i++) {
  memory[i].addEventListener("click", (event) => {
    if (!has_flipped) {
      firstcard = memory[i].getAttribute("class");
      has_flipped = true;
      console.log(firstcard);
    } else {
      secondcard = memory[i].getAttribute("class");
      has_flipped = false;
      console.log(secondcard);
    }
    cards[i].classList.add("flip");
    arr.push(i);
    if (arr.length == 2) {
      if (firstcard === secondcard) {
        arr3.push(i);
        console.log(arr3);
        console.log("match");
        // for(let i =0;i<1;i++){
        arr.forEach((value, key) => {
          setTimeout(function () {
            cards[value].classList.add("stay");
          }, 1000);
        });
        arr2.push(i);
        console.log(arr2);
        score.innerHTML = "you found " + arr2.length + " out of 6 pairs";
        if (arr3.length >= 2) {
          arr4.push(10);
          sum1 = 0;
          console.log(arr4);
        } else if (arr3.length == 1) {
          arr4.push(5);
          sum1 = 0;
          console.log(arr4);
        }
        for (let i = 0; i < arr4.length; i++) {
          sum1 = sum1 + arr4[i];
        }
        points.innerHTML = sum1;
      } else {
        arr3 = [];
        console.log("not match");
        for (let i = 0; i < cards.length; i++) {
          setTimeout(function () {
            cards[i].classList.remove("flip");
          }, 1300);
        }
      }

      arr = [];
    }

    if (arr2.length === 6) {
      console.log("finish game");
      body.style.backgroundColor = "rgba(0,0,0,0.6)";
      after.style.opacity = "0.5";
      pop.style.display = "initial";
    }
  });
}

// let arr5 = [1,2,3,4,5];
// let sum1 = 0;
// for (let i = 0;i<arr5.length;i++) {
//     sum1 = sum1+arr5[i];
// }
// console.log(sum1);
