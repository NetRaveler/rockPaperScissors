let playerSelection = '';
let computerSelection = '';
let computerScore = 0;
let playerScore = 0;
let result = '';
let round = 0;
const pscore = document.querySelector('#player');
const cscore = document.querySelector('#computer');

const btn = document.querySelector('#start');
btn.addEventListener('click', () => {
    btn.style.opacity = '0';
    pscore.textContent = 'Player: 0';
    cscore.textContent = 'Computer: 0';
    resetPlayer();
    resetComputer();
});

const rock = document.querySelector('#rock');
rock.addEventListener('click', function(e) {
    console.log(e);
    playerSelection = 'rock';
    playRound();
    game();
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', function(e) {
    console.log(e);
    playerSelection = 'paper';
    playRound();
    game();
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function(e) {
    console.log(e);
    playerSelection = 'scissors';
    playRound();
    game();
});
// get the user input and store it in a variable, return that variable
/* function humanPlay() {
	let answer = prompt("type Rock, Paper, or Scissors");
	playerSelection = answer.toLowerCase();
	console.log(playerSelection);
	return(playerSelection);
} */
function resetPlayer() {
    playerScore = 0;
    return (playerScore);
}

function resetComputer() {
    computerScore = 0;
    return (computerScore);
}
// Randomly select the computer answer and store it in a variable
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerSelection = 'rock';
        return (computerSelection);
    } else if (randomNumber === 1) {
        computerSelection = 'paper';
        return (computerSelection);
    } else {
        computerSelection = 'scissors';
        return (computerSelection);
    }
}
// Compare user and computer variables and determine outcome of the game
function playRound() {
    computerPlay();
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
        playerScore = playerScore + 1;
        alert(result);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {

        playerScore = playerScore + 1;
        result = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
        alert(result);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {

        playerScore = playerScore + 1;
        result = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
        alert(result);
    } else if (playerSelection === computerSelection) {
        result = "It's a Tie!"
        alert(result);
    } else {
        result = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
        computerScore = computerScore + 1;
        alert(result);

    }

}

// Play 5 rounds of the game
function game() {

    pscore.textContent = 'Player: ' + playerScore;

    cscore.textContent = 'Computer: ' + computerScore;

    if (playerScore === 5) {
        alert("You have won the game!");
        btn.style.opacity = '1';

        return;

    } else if (computerScore === 5) {
        alert("You have lost the game!");
        btn.style.opacity = '1';
        return;

    } else {
        return;
    }

}