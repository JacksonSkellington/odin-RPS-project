console.log("Hello, Odin!");

let getComputerChoice = () => {
	const move = ["rock", "paper", "scissors"];
	return move[Math.floor(Math.random() * 3)];
}

let getHumanChoice = (msg) => {
	const move = ["rock", "paper", "scissors"];
	while (true) {
		let response = prompt(msg).toLowerCase();
	
		for (let i = 0; i < 3; i++) {
			if (response === move[i]) {
				return response;
			}
		}
	}
}

let playRound = (humanChoice, computerChoice) => {
	let humanChoiceCapped = humanChoice.charAt(0).toUpperCase() + humanChoice.substring(1); 
	let computerChoiceCapped = computerChoice.charAt(0).toUpperCase() + computerChoice.substring(1); 
	let outcome = judge(humanChoice, computerChoice);

	if ( outcome === null) { console.log("It's A Draw! no points awarded."); }
	else if (outcome === false) { console.log(`You Lose! ${computerChoiceCapped} beats ${humanChoiceCapped}.`); }
	else { console.log(`You Win! ${humanChoiceCapped} beats ${computerChoiceCapped}.`); }

	return outcome;
}

// This configuration assumes we're only checking if param1 beats param2.
let judge = (humanChoice, computerChoice) => {
	const move = ["rock", "paper", "scissors"]
	let humanChoiceIndex = move.indexOf(humanChoice);
	// 'false' implies a loss for param1.
	if (move[(humanChoiceIndex + 1) % 3] === computerChoice) { return false; }
	// 'true' implies a win for param1.
	if (move[(humanChoiceIndex + 2) % 3] === computerChoice) { return true; }

	// 'null' implies a draw in this case.
	// TODO: Use something other than 'null'
	return null;
}

let playGame = () => {
	let humanScore = 0;
	let computerScore = 0;
	let roundCount = 0;

	while (true) {
		if (roundCount > 5) {
			let scoreTally = `With a Score of ${humanScore} to ${computerScore}.`;
			if (humanScore === computerScore) {
				console.log(`A Draw! ${scoreTally}`);
				return;
			}
			let verdict = humanScore > computerScore ? `You Win! ${scoreTally}` : `You Lose! ${scoreTally}` 
			console.log(verdict);
			return;
		}

		let humanSelection = getHumanChoice("Please Enter a Valid Move: ");
		let computerSelection = getComputerChoice();

		let result = playRound(humanSelection, computerSelection);

		if (result === false) { computerScore++; }
		if (result === true) { humanScore++; }

		roundCount++;
	}
	
}

playGame();
