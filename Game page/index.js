let param = new URLSearchParams( window.location.search );
let FullName = param.get('name');
let Email = param.get('Email');
const score = document.getElementById('score');
score.innerHTML = 'Hello ' + FullName;

let has_flipped = false;
const memory = document.querySelectorAll('.image')
const cards = document.querySelectorAll('.img1');
const body = document.getElementById('body');
const after = document.getElementById('after');
const pop = document.getElementById('pop');
const points = document.getElementById('points');
const again = document.getElementById('again');
const scores = document.getElementById('scores');
let sum = 0;
points.innerHTML = 'Your points : ' + 0;
let arr = [];
let array = [];
let x;
let y;
let has = false;
let finish = document.getElementById('finish');

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
    if (array.length === 6) {
        return;
    }
    if(minutes<10 & seconds<10){
        stopperDisplay.innerHTML = "0" + minutes + ":" + "0" + seconds;
    }
    else{
        if(minutes<10){
            stopperDisplay.innerHTML = "0" + minutes + ":" + seconds;
        }
        if(seconds<10){
            stopperDisplay.innerHTML = minutes + ":" + "0" + seconds;
        }
        else{
            topperDisplay.innerHTML = minutes + ":" + seconds;
        }
    }
}
window.setInterval(stopper, 1000);

for(let i = 0;i<memory.length; i++) {
    memory[i].addEventListener('click',(event)=>{
        if(!has_flipped) {
            x=i;
            has_flipped = true;
            arr.push(flip(i));
        }
        else {
            y=i;
            has_flipped = false;
            arr.push(flip(i));
            if(arr[0]!=arr[1]){
                unFlip(x);
                unFlip(y);
            }
            else{
                array.push(arr[0]);
                sum = sum + 5;
                points.innerHTML = 'your points : ' + sum;
                if(array.length===6) {
                    body.style.backgroundColor = 'rgba(0,0,0,0.6)';
                    after.style.opacity = '0.5';
                    finish.innerHTML = 'Well Done ' + FullName;
                    pop.style.display = 'initial';
                    scores.childNodes[0].href="../Ending page/index.html?name=" + FullName + "&Email=" + Email + "&points=" + sum + "&time=" + ( minutes + seconds/60);
                }
            }
            arr = [];
        } 
    });
    has_flipped = false;
}

function flip(j){
    cards[j].classList.add('flip');
    return memory[j].getAttribute('class');
}

function unFlip(j){
    setTimeout(function(){cards[j].classList.remove('flip')},300);       
}

(function shuffle() {
    memory.forEach(card=> {
        let random_pos = Math.floor(Math.random()*12);
        card.style.order = random_pos;
    })
}) ();

again.childNodes[0].href = "index.html?name=" + FullName + "&Email=" + Email; 
