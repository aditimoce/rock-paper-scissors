let playerScore = 0;
let computerScore = 0;
let roundWon = "";

const playerScorePara = document.getElementById('playerscore');
const computerScorePara = document.getElementById('computerscore');
const gameWinnerPara = document.getElementById('gamewinner');

function computerPlay() {
	let computerChoices = ["Rock", "Paper", "Scissors"];
	let computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	return computerSelection;
}

function playRound(playerSelection, computerSelection) {

  	computerSelection = computerPlay();
  	playerSelection = 'Rock';

	if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock'))
	{
      playerScore++;
      roundWon = "player";
    }

    if (playerSelection === computerSelection)
    {
    roundWon = "tie";
  	}

  	if ((computerSelection === 'Rock' && playerSelection === 'Scissors') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
        (computerSelection === 'Paper' && playerSelection === 'Rock'))
  	{
    computerScore++;
    roundWon = "computer";
  	}
  	winner();
}

function scoreDisplay() {

	if (roundWon === 'tie') {
    whowon.textContent = "It's a tie!"
  } else if (roundWon === 'player') {
    whowon.textContent = 'Player wins!'
  } else if (roundWon === 'computer') {
    whowon.textContent = 'Computer wins!'
}
	playerScorePara.textContent = `Player: ${playerScore}`
  	computerScorePara.textContent = `Computer: ${computerScore}`
}

const rockbutton = document.querySelector('#rockbutton');
	rockbutton.addEventListener('click', () => {
	playRound();
	scoreDisplay();
	});

const paperbutton = document.querySelector('#paperbutton');
	paperbutton.addEventListener('click', () => {
	playRound();
	scoreDisplay();
	});

const scissorsbutton = document.querySelector('#scissorsbutton');
	scissorsbutton.addEventListener('click', () => {
	playRound();
	scoreDisplay();
	});

function winner() {
	if (computerScore === 5) {
		gameWinnerPara.textContent = `Game over! Computer wins the game!`
		document.getElementById("rockbutton").disabled = true;
		document.getElementById("paperbutton").disabled = true;
		document.getElementById("scissorsbutton").disabled = true; 
	} if (playerScore === 5) {
		gameWinnerPara.textContent = `Game over! Player wins the game!`
		document.getElementById("rockbutton").disabled = true;
		document.getElementById("paperbutton").disabled = true;
		document.getElementById("scissorsbutton").disabled = true;
	}
}

function playAgain() {
	window.location.reload();
}