const playerName = document.getElementById("playerName");
const playerNameAccToTime = document.getElementById("playerNameAccToTime");
const playerPoints = document.getElementById("playerPoints");
const playerTime = document.getElementById("playerTime");

let param = new URLSearchParams( window.location.search );//Get the parameters on the url
playerName.innerHTML = param.get('name');//Get the value of the parameter name and put it in the points table 
playerNameAccToTime.innerHTML = param.get('name');//Get the value of the parameter name and put it in the time table 
playerPoints.innerHTML = param.get('points');//Get the value of the parameter points and put it in the points table 
playerTime.innerHTML = param.get('time') + " min";//Get the value of the parameter time and put it in the time table

let whatsapp = document.getElementById('whatsapp');
whatsapp.href = 'https://api.whatsapp.com/send?text=index.html?name='+param.get('name')+'&Email='+param,get('Email')+'&points='+param.get('points')+'&time='+param.get('time');

// const tds = document.querySelectorAll('.td');
// let arr = [];
// function compareNumbers(a, b)
// {
//     return a - b;
// }

// arr.sort(compareNumbers);
// console.log(arr);

// const trs = document.querySelectorAll('.tr');
// let newarr = [];
// for(let i = 0;i<trs.length;i++) {
//     arr.push(trs[i].innerHTML);
//     let point1 = (trs[0].lastElementChild.innerHTML);
//     let point2 = (trs[1].lastElementChild.innerHTML);
//     let point3 = (trs[2].lastElementChild.innerHTML);
//     let point4 = (trs[3].lastElementChild.innerHTML);

//     console.log(point1,point2,point3,point4);
//     if(point4>point1&&point4>=point2&&point4<point3){
//         newarr = [arr[2],arr[3],arr[1],arr[0]];
//     }


// }
// console.log(newarr);



