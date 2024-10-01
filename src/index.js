// defining globals
const MOVE = ["rock", "paper", "scissors"];
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
// getting DOM elements
const rockButton = document.querySelector("#rock-btn");
const paperButton = document.querySelector("#paper-btn");
const scissorsButton = document.querySelector("#scissors-btn");
const playButton = document.querySelector(".play-btn");
// initializing a list with the selection buttons for elegant event listener hooking
const buttons = [rockButton, paperButton, scissorsButton];
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', () => { 
		playerChoice = MOVE[i];
		playRound(playerChoice, getComputerChoice()); })
}

playButton.addEventListener("click", () => { resetGame(); })

// getting scorecards
const playerScorecard = document.querySelector(".player-score");
const computerScorecard = document.querySelector(".computer-score");
const verdictCard = document.querySelector(".verdict-card");

// defining game logic
let getComputerChoice = () => {
	return MOVE[Math.floor(Math.random() * 3)];
}

let getHumanChoice = (msg) => {
	while (true) {
		let response = prompt(msg).toLowerCase();
	
		for (let i = 0; i < 3; i++) {
			if (response === MOVE[i]) {
				return response;
			}
		}
	}
}

let playRound = (humanChoice, computerChoice) => {
	let humanChoiceCapped = humanChoice.charAt(0).toUpperCase() + humanChoice.substring(1); 
	let computerChoiceCapped = computerChoice.charAt(0).toUpperCase() + computerChoice.substring(1); 
	let outcome = judge(humanChoice, computerChoice);

	if ( outcome === null) { verdictCard.textContent = "It's A Draw! no points awarded."; }
	else if (outcome === false) { verdictCard.textContent = `You Lose! ${computerChoiceCapped} beats ${humanChoiceCapped}.`; 
		computerScore++;
	}
	else { verdictCard.textContent = `You Win! ${humanChoiceCapped} beats ${computerChoiceCapped}.`;
		playerScore++;
	}

	playerScorecard.textContent = `You: ${playerScore}`
	computerScorecard.textContent = `CPU: ${computerScore}`

	return outcome;
}

// This configuration assumes we're only checking if param1 beats param2.
let judge = (humanChoice, computerChoice) => {
	let humanChoiceIndex = MOVE.indexOf(humanChoice);
	// 'false' implies a loss for param1.
	if (MOVE[(humanChoiceIndex + 1) % 3] === computerChoice) { return false; }
	// 'true' implies a win for param1.
	if (MOVE[(humanChoiceIndex + 2) % 3] === computerChoice) { return true; }

	// 'null' implies a draw in this case.
	// TODO: Use something other than 'null'
	return null;
}

const resetGame = () => {
	playerChoice = "";
	playerScore = 0;
	computerScore = 0;
	roundCount = 0;
	playerScorecard.textContent = "You: 0";
	computerScorecard.textContent = "CPU: 0";
	verdictCard.textContent = "Let's PLay!";
}
//playGame();
