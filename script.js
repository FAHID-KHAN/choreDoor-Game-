let doorImage1 = document.getElementById('door1');

let startButton = document.getElementById('start');

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath ="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let numClosedDoors=3;

let currentlyPlaying = true;

let openDoor1;
let openDoor2;
let openDoor3;
const isBot=function(door){
  if(door.src === botDoorPath){
    return true;
  }
  else{
    return false;
  }

}


const isClicked = function(door){
  if(door.src===closedDoorPath){
    return false;
  }
  else{
    return true;
  }

}

const playDoor = function(door){
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver('win');
  }
  else if(isBot(door)){
    gameOver('lose');

  }

}


const randomChoreDoorGenerator= function(){
const choreDoor = Math.floor(Math.random()*numClosedDoors);
if(choreDoor===0){
  openDoor1 = botDoorPath;
  openDoor2 = beachDoorPath;
  opendoor3=spaceDoorPath;

}
else if(choreDoor===1){
  openDoor2 = botDoorPath;
  openDoor1= beachDoorPath;
  openDoor3=spaceDoorPath;

}
else if(choreDoor===2){
openDoor3 = botDoorPath;
openDoor2=beachDoorPath;
openDoor1=spaceDoorPath;
}
}

doorImage1.onclick = function(){
  if(!isClicked(doorImage1)&& currentlyPlaying){
doorImage1.src=openDoor1;
  playDoor(doorImage1);
  }
  

}

let doorImage2 = document.getElementById('door2');

doorImage2.onclick=function(){
  if(!isClicked(doorImage2)&& currentlyPlaying){
doorImage2.src = openDoor2;
  playDoor(doorImage2);
  }
  

}
let doorImage3=document.getElementById('door3');

doorImage3.onclick=function(){
if(!isClicked(doorImage3)&& currentlyPlaying){
doorImage3.src = openDoor3;
playDoor(doorImage3);
}

}
startButton.onclick = function(){
  if(!currentlyPlaying){
startRound();
  }
  
}

const startRound = function(){
  numClosedDoors=3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  currentlyPlaying =true;
  startButton.innerHTML = "Good Luck";
  randomChoreDoorGenerator();

}

const gameOver=function(status){
  if(status==='win'){
    startButton.innerHTML = 'You Win! Play Again?';
  }
  else {
    startButton.innerHTML = "Game Over!  Play again?"
  }
  currentlyPlaying =false;

}
;

startRound();
