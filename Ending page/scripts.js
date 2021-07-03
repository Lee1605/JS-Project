const playerName = document.getElementById("playerName");
const playerNameAccToTime = document.getElementById("playerNameAccToTime");
const playerPoints = document.getElementById("playerPoints");
const playerTime = document.getElementById("playerTime");

let param = new URLSearchParams( window.location.search );
playerName.innerHTML = param.get('name');
playerNameAccToTime.innerHTML = param.get('name');
playerPoints.innerHTML = param.get('points');
playerTime.innerHTML = param.get('time') + " min";