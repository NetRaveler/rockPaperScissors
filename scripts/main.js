
let playerSelection = '';
let computerSelection = '';
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
		return(result);
	} else if (playerSelection === 'paper' && computerSelection === 'rock') {

		result = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
		return(result);
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {

		result = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
		return(result);
	} else if (playerSelection === computerSelection) {
		result = "It's a Tie!"
	}
	else {
		result = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
		return(result);
	}
}
// Play 5 rounds of the game
function game() {
	for (round = 0; round < 5; round++) {
	playRound();
	alert(result);
	}
}
