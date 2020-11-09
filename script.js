// computer chooses randomly between rock, paper, or scissors
function computerPlay() {
  // generate random number
  const random = Math.floor(Math.random() * 3);

  // assign random numbers to a selection
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else if (random === 2) {
    return "scissors";
  }
}

// get input from player
let playerSelection = prompt("Choose Rock, Paper, or Scissors!");
let computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));

// compare player and computer selection
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  // declare game outcome
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "rock") {
        return "You Tied.";
      } else if (computerSelection === "paper") {
        return "You Lose...";
      } else {
        return "You Win!";
      }
      break;
    case "paper":
      if (computerSelection === "rock") {
        return "You Win!";
      } else if (computerSelection === "paper") {
        return "You Tied.";
      } else {
        return "You Lose...";
      }
      break;
    case "scissors":
      if (computerSelection === "rock") {
        return "You Lose...";
      } else if (computerSelection === "paper") {
        return "You Win!";
      } else {
        return "You Tied.";
      }
      break;
  }
}
