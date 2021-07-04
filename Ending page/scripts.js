const playerName = document.getElementById("playerName");
const playerNameAccToTime = document.getElementById("playerNameAccToTime");
const playerPoints = document.getElementById("playerPoints");
const playerTime = document.getElementById("playerTime");

let param = new URLSearchParams( window.location.search );//Get the parameters on the url
playerName.innerHTML = param.get('name');//Get the value of the parameter name and put it in the points table 
playerNameAccToTime.innerHTML = param.get('name');//Get the value of the parameter name and put it in the time table 
playerPoints.innerHTML = param.get('points');//Get the value of the parameter points and put it in the points table 
playerTime.innerHTML = param.get('time') + " min";//Get the value of the parameter time and put it in the time table 