console.log("Hello, Odin!");

let getComputerChoice = () => {
	const move = ["Rock", "Paper", "Scissors"];
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
