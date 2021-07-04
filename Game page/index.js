let param = new URLSearchParams( window.location.search );
let FullName = param.get('name');
let Email = param.get('Email');
const score = document.getElementById('score');
score.innerHTML = 'Hello ' + FullName;

let has_flipped = false; // determine which carde is flipped, when false the player flipped the first card, when true the player flipped the second card,when the second card is flipped we give it the value false and repeate. 
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
let arr = []; //contains the two cards we are comparing
let array = []; //Contains the class attribute of flipped cards.
let x,y; // The index of the card the player has clicked.
let oneDone = false; // true if the player flipped two identical images, false if the opposite
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
            stopperDisplay.innerHTML = minutes + ":" + seconds;
        }
    }
}
window.setInterval(stopper, 1000);

for(let i = 0;i<memory.length; i++) {
    memory[i].addEventListener('click',(event)=>{
        //if the array contains the class attribute of a card the player just clicked stop the eventListener
        if ( array.indexOf(memory[i].getAttribute('class'))>=0){
            memory[i].preventDefault;
            memory[i].stopPropagation;
        }
        else{
            if(!has_flipped) {
                //flipped the first card
                //save the index on x
                //save the class attribute temporarily on arr
                x=i;
                has_flipped = true;
                arr.push(flip(i));
            }
            else {
                //save the index on y
                y=i;
                //restart the has_flipped variable.
                has_flipped = false;
                //flipped the second card
                //save the class attribute temporarily on arr
                arr.push(flip(i));
                //comparing the two cards saved on arr with the class attribute
                //if not the same attribute ==> not the same image then unflip the two cards
                if(arr[0]!=arr[1]){
                    unFlip(x);
                    unFlip(y);
                    oneDone = false; // not the same images so it is false
                }
                else{
                    array.push(arr[0]);//The player has flipped the same images so save the class attribute into array
                    //The player has flipped the same cards on the last round so give him 10 points
                    if(oneDone){
                        sum = sum + 10;
                    }
                    //The player hasn't flipped the same cards on the last round so give him 5 points 
                    //and change oneDone to true
                    else{
                        sum = sum + 5;
                        oneDone = true; //  the same images so it is true
                    }
                    points.innerHTML = 'your points : ' + sum;
                    //The game is over.
                    if(array.length===6) {
                        body.style.backgroundColor = 'rgba(0,0,0,0.6)';
                        after.style.opacity = '0.5';
                        finish.innerHTML = 'Well Done ' + FullName;
                        pop.style.display = 'initial';
                        //Go to scores page 
                        scores.childNodes[0].href="../Ending page/index.html?name=" + FullName + "&Email=" + Email + "&points=" + sum + "&time=" + ( minutes + seconds/60);
                    }
                }
                //restart arr
                arr = [];
            } 
        }
    });
    has_flipped = false;
}

//The function flip the card and return the class attribute.
function flip(j){
    cards[j].classList.add('flip');
    return memory[j].getAttribute('class');
}

//The function unflip the card after 0.3s
function unFlip(j){
    setTimeout(function(){cards[j].classList.remove('flip')},300);       
}

//The function shuffles the cards.
(function shuffle() {
    memory.forEach(card=> {
        let random_pos = Math.floor(Math.random()*12);
        card.style.order = random_pos;
    })
}) ();

again.childNodes[0].href = "index.html?name=" + FullName + "&Email=" + Email; 
