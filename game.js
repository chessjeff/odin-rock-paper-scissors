// receive a string from player
// string must === "rock", "paper", or "scissors"


// assign random number (1 - 3) to "rock" "paper" "scissors"
function getComputerChoice(max=3) { 
    let randInt = Math.floor(Math.random() * max + 1);
    let computerChoice;

    switch(randInt) {
        case 1:
            computerChoice = "Rock"
            break;
        case 2:
            computerChoice = "Paper"
            break;
        default:
            computerChoice = "Scissors"
    }

    return computerChoice;
}

// compare user input to random: 
//      rock > scissors 
//      paper > rock
//      scissors > paper
// if user input wins: "congrats, you win"
//      if computer wins: "i win"