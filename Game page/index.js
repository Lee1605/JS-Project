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
let sum = 0;
points.innerHTML = 'Your points : ' + 0;
let arr = [];
let array = [];
let x;
let y;
let has = false;

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
                    pop.style.display = 'initial';
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



