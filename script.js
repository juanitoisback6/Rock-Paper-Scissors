 let isR = document.getElementById("isR");
 let isP = document.getElementById("isP");
 let isS = document.getElementById("isS");
let answerS = document.getElementById("answerS");
let playerPickO = document.getElementById("playerPickO");
let computerPick = document.getElementById("computerPick");
  

 



function juga (playerPick) {

let computer;
  
let numComputer = Math.random();

if (numComputer < 0.3) {
  computer="scissors";
} else if (numComputer < 0.6 && numComputer > 0.3) {
  computer="rock";
}
else { 
  computer="paper";
}

if (computer === 'rock' && playerPick === 'rock') {
answer="Draw"
} else if (computer === "paper" && playerPick ==="paper") {
  answer="Draw";
} else if (computer === "scissors" && playerPick==="scissors") {
  answer="Draw";
}else if (computer === "scissors" && playerPick==="rock" ) {
answer="The player Won!";
} else if (computer ==="rock" && playerPick === "scissors") {
answer="The computer won";
} else if (computer === "paper" && playerPick === "rock") {
answer="The computer won";
} else if ( computer === 'rock' && playerPick=== 'paper'){

answer='The player won'
} else if (computer === 'scissors' && playerPick=== 'paper') {
  answer="The computer Won"
} else if (computer === 'paper' && playerPick=== 'scissors') {
  answer='Player Won'
}

 
console.log(answer);
 console.log(`Player picked: ${playerPick}`);
console.log(`Computer picked: ${computer}`);

answerS.textContent=  answer;
playerPick.textContent=  playerPick;
computerPick.textContent=  computerPick;


}

isR.addEventListener("click", ()=>{juga( playerPick ='rock' )});
 isP.addEventListener("click", ()=>{juga(playerPick = 'paper' )});
   isS.addEventListener("click", ()=>{juga( playerPick ='scissors' )});




