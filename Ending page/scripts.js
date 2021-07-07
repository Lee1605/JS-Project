const playerName = document.getElementById("playerName");
const playerNameAccToTime = document.getElementById("playerNameAccToTime");
const playerPoints = document.getElementById("playerPoints");
const playerTime = document.getElementById("playerTime");


let param = new URLSearchParams( window.location.search );//Get the parameters on the url
let time = param.get('time');
time = Number(time);
playerName.innerHTML = param.get('name');//Get the value of the parameter name and put it in the points table 
playerNameAccToTime.innerHTML = param.get('name');//Get the value of the parameter name and put it in the time table 
playerPoints.innerHTML = param.get('points');//Get the value of the parameter points and put it in the points table 
playerTime.innerHTML = time.toFixed(2) + " min";//Get the value of the parameter time and put it in the time table


let whatsapp = document.getElementById('whatsapp');
whatsapp.href = 'https://api.whatsapp.com/send?text=I wanted to share with you my game result ! '+param.get('name')+' - '+param.get('Email')+', I got '+param.get('points')+' points in '+time.toFixed(2) +' minutes.';
let env = document.getElementById('env');
env.href = "mailto:?subject=I wanted to share with you my game result !&body="+param.get('name')+' - '+param.get('Email')+', I got '+param.get('points')+' points in '+time.toFixed(2) +' minutes.';

let table = document.querySelectorAll('table');
let rows = table.rows;
let targetedPerson = table[0].rows[4];
for(let i= 1 ; i < table[0].rows.length-1; i++){
    let x = targetedPerson;
    let y = table[0].rows[i];
    if(x.innerText != y.innerText){
        if(Number(x.lastElementChild.innerHTML) >= Number(y.lastElementChild.innerHTML)){
            exchange(x,y);
        }
    }
}

// y = 4;
targetedPerson = table[1].rows[4];  
console.log(targetedPerson);
for(let i= 1 ; i < table[0].rows.length-1; i++){
    console.log(1);
    x = targetedPerson;
    y = table[1].rows[i];
    if(x.innerText != y.innerText){
        if(parseFloat(x.lastElementChild.innerHTML) <= parseFloat(y.lastElementChild.innerHTML)){
            exchange(x,y);
        }
    }
}

function exchange(x,y){
    let z;
    z = y.innerHTML;
    y.innerHTML = x.innerHTML;
    x.innerHTML = z;  
}



