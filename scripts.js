function computerPlay() {

	var computerOptions = ["Rock", "Paper", "Scissors"];
	var computerSelected = computerOptions[Math.floor(Math.random()*computerOptions.length)];

	return computerSelected;

}

function playRound(playerSelection, computerSelected) {

  if (playerSelection === computerSelected) {
    return("tie");
  }

  
  if ((playerSelection === 'Rock' && computerSelected === 'Scissors') ||
           (playerSelection === 'Scissors' && computerSelected === 'Paper') ||
           (playerSelection === 'Paper' && computerSelected === 'Rock'))
    {
      playerScore++;
      return('player score is ' + playerScore);
    }

  if ((computerSelected === 'Rock' && playerSelection === 'Scissors') ||
           (computerSelected === 'Scissors' && playerSelection === 'Paper') ||
           (computerSelected === 'Paper' && playerSelection === 'Rock'))
  {
    computerScore++;
    return('computer score is ' + computerScore);
  }

}

const playerSelection = "Rock";
const computerSelected = computerPlay();
let playerScore = 0;
let computerScore = 0;


function game() {

  while (playerScore < 5) {
    playRound();
  }
  

}