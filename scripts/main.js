
let playerSelection = '';
let computerSelection = '';
let result = '';
function humanPlay() {
	let answer = prompt("type Rock, Paper, or Scissors");
	playerSelection = answer.toLowerCase();
	console.log(playerSelection);
	return(playerSelection);
}
function computerPlay() {
	let randomNumber = Math.floor(Math.random() * 3);
	if (randomNumber === 0) {
		computerSelection = 'Rock';
		return(computerSelection);
	} else if (randomNumber === 1) {
		computerSelection = 'Paper';
		return(computerSelection);
	}
	else {
		computerSelection = 'Scissors';
		return(computerSelection);
	}
	console.log(computerSelection);
}

function game(playerSelection, computerSelection) {
	if (playerSelection === 'rock' && computerSelection === 'Scissors') {
		result = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
		return(result);
	} else if (playerSelection === 'paper' && computerSelection === 'Rock') {

		result = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
		return(result);
	} else if (playerSelection === 'scissors' && computerSelection === 'Paper') {

		result = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
		return(result);
	} /*else if (playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== 'scissors') {
		alert('You must choose Rock, Paper, or Scissors'); }*/	
	else {
		result = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
		return(result);
	}
}

function runIt() {
	computerPlay();
	humanPlay();
	game(playerSelection, computerSelection);
	alert(result);
}
