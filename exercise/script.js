let has_flipped = false;
let firstcard;
let secondcard;
const memory = document.querySelectorAll('.image')
const cards = document.querySelectorAll('.img1');
const body = document.getElementById('body');
const after = document.getElementById('after');
const pop = document.getElementById('pop');
const score = document.getElementById('score');
let arr = [];
let arr2 = [];



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
            console.log('match');
            // for(let i =0;i<1;i++){
            arr.forEach((value,key)=>{
                setTimeout(function(){cards[value].classList.add('stay')},1000)})
            arr2.push(i);
            console.log(arr2);
            score.innerHTML = ('you found ' + arr2.length + ' out of 6 pairs');   
            
        } else {
            console.log('not match');
            for(let i = 0;i<cards.length;i++){
            setTimeout(function(){cards[i].classList.remove('flip')},1300)};
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

