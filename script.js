let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.round(Math.random() * 9);
}

console.log('Generated Target: ' + generateTarget());

const compareGuesses = (humanGuess, computerGuess, target) => {
  return Math.abs(target - humanGuess) <= Math.abs(target - computerGuess);
}

console.log('Expected true: ' + compareGuesses(4, 8, 3));

const updateScore = (player) => {
  if (player === 'human') humanScore++;
  if (player === 'computer') computerScore++;
}

const advanceRound = () => {
  currentRoundNumber++;
}