let has_flipped = false;
let firstcard;
let secondcard;
const memory = document.querySelectorAll('.image')
const cards = document.querySelectorAll('.img1');
const body = document.getElementById('body');
const after = document.getElementById('after');
const pop = document.getElementById('pop');
const score = document.getElementById('score');
const points = document.getElementById('points');
points.innerHTML = 0;
let arr = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let sum1 = 0;

let params = window.location.search;
console.log(params);

let params1 = new URLSearchParams(params);
console.log(params1.get('Full-name'));
let fname = params1.get('Full-name');
score.innerHTML = score.innerHTML + ' ' + fname;




for(let i = 0;i<memory.length; i++) {
    memory[i].addEventListener('click',(event)=>{
    if(!has_flipped) {
        firstcard = memory[i].getAttribute('class');
        has_flipped = true
        console.log(firstcard);
    } else {
        secondcard = memory[i].getAttribute('class');
        has_flipped = false;
        console.log(secondcard);
    }
    cards[i].classList.add('flip');
    arr.push(i);
    if(arr.length==2) {
        if(firstcard===secondcard) {
            arr3.push(i);
            console.log(arr3);
            console.log('match');
            // for(let i =0;i<1;i++){
            arr.forEach((value,key)=>{
                setTimeout(function(){cards[value].classList.add('stay')},1000)})
            arr2.push(i);
            console.log(arr2);
            score.innerHTML = ('You found ' + arr2.length + ' out of 6 pairs');
            if(arr3.length>=2) {
                arr4.push(10);
                sum1 = 0;
                console.log(arr4);
            } else if (arr3.length==1) {
                arr4.push(5);
                sum1 = 0;
                console.log(arr4);
            }
            for (let i=0;i<arr4.length;i++) {
                sum1 = sum1 + arr4[i];
            }   
            points.innerHTML = sum1;
            
        } else {
            arr3 = [];
            console.log('not match');
            for(let i = 0;i<cards.length;i++){
            setTimeout(function(){cards[i].classList.remove('flip')},1200)};
        }
        
        arr = [];
    }

    if(arr2.length===6) {
        console.log('finish game');
        body.style.backgroundColor = 'rgba(0,0,0,0.6)';
        after.style.opacity = '0.5';
        pop.style.display = 'initial';
    }

    })
}

(function shuffle() {
    memory.forEach(card=> {
        let random_pos = Math.floor(Math.random()*12);
        card.style.order = random_pos;
    })
}) ();
    








