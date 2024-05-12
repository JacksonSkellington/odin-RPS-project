console.log("Hello, Odin!");

let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
	const move = ["rock", "paper", "scissors"];
	return move[Math.floor(Math.random() * 3)];
}

let getHumanChoice = (msg) => {
	const move = ["rock", "paper", "scissors"];
	let response = prompt(msg).toLowerCase();
	
	for (let i = 0; i < 3; i++) {
		if (response === move[i]) {
			return response;
		}
	}

	return null;
}

let playRound = (humanChoice, computerChoice) => {
}

// This configuration assumes we're only checking if param1 beats param2.
let judge = (humanChoice, computerChoice) => {
	const move = ["rock", "paper", "scissors"]
	// 'false' implies a loss for param1.
	if (move[(humanChoice + 1) % 3] === move[computerChoice]) { return false; }
	// 'true' implies a win for param1.
	if (move[(humanChoice + 2) % 3] === move[computerChoice]) { return true; }

	// 'null' implies a draw in this case.
	return null;
}
