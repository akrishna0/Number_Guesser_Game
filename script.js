let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
const generateTarget = ()=>{
  return Math.floor(Math.random()*9);
}
const compareGuesses=(humanGuess,computerGuess,target)=>{
  let human = Math.abs(humanGuess - target);
  let computer= Math.abs(computerGuess - target);
  if(human >computer){
    return false;
  }else {
    return true;
  }
}

const updateScore =(winner)=>{
  if(winner === 'human'){
    humanScore +=1; 
  }else if(winner === 'computer'){
    computerScore +=1;
  }
}

const advanceRound=()=>{
  return currentRoundNumber +=1;
}
