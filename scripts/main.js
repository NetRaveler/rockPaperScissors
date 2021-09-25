
let playerSelection = '';
let computerSelection = '';
let computerScore = 0;
let playerScore = 0;
let result = '';
let round = 0;
// get the user input and store it in a variable, return that variable
function humanPlay() {
	let answer = prompt("type Rock, Paper, or Scissors");
	playerSelection = answer.toLowerCase();
	console.log(playerSelection);
	return(playerSelection);
}
// Randomly select the computer answer and store it in a variable
function computerPlay() {
	let randomNumber = Math.floor(Math.random() * 3);
	if (randomNumber === 0) {
		computerSelection = 'rock';
		return(computerSelection);
	} else if (randomNumber === 1) {
		computerSelection = 'paper';
		return(computerSelection);
	}
	else {
		computerSelection = 'scissors';
		return(computerSelection);
	}
}
// Compare user and computer variables and determine outcome of the game
function playRound() {
	humanPlay();
	computerPlay();
	if (playerSelection === 'rock' && computerSelection === 'scissors') {
		result = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
		playerScore = playerScore + 1;
		return(result);
	} else if (playerSelection === 'paper' && computerSelection === 'rock') {

		playerScore = playerScore + 1;
		result = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
		return(result);
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {

		playerScore = playerScore + 1;
		result = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
		return(result);
	} else if (playerSelection === computerSelection) {
		result = "It's a Tie!"
	}
	else {
		result = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
		computerScore = computerScore + 1;
		return(computerScore);
		return(result);
	}
}

// Play 5 rounds of the game
function game() {
	while (playerScore < 6 && computerScore < 6) {
		if (playerScore === 5) {
			alert("You have won the game!");
			break;
		} else if (computerScore === 5) {
			alert("You have lost the game!");
			break;
		} else {
			playRound();
			alert(result);
		}
	}
}
