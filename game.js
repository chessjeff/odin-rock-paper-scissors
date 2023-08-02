// receive a string from player
// string must === "rock", "paper", or "scissors"


// assign random number (1 - 3) to "rock" "paper" "scissors"
function getComputerChoice(max=3) { 
    const randInt = Math.floor(Math.random() * max + 1);
    let computerChoice;

    switch(randInt) {
        case 1:
            computerChoice = "rock"
            break;
        case 2:
            computerChoice = "paper"
            break;
        default:
            computerChoice = "scissors"
    }

    return computerChoice;
}

// plays a round of rock paper scissors
// 

function playRound(playerSelection, computerSelection) { // manually insert playerSelection, call computerSelection()
    let result;
    let lowerPlayerSelection = playerSelection.toLowerCase()
    
    switch(lowerPlayerSelection) {
        case "rock":
            if(computerSelection === "paper") {
                result = `You lose! ${computerSelection} beats Rock!`
            } else if (computerSelection === "scissors") {
                result = `You win!! Rock beats ${computerSelection}`
            } else {
                result = "It's a draw!"
            }
            break;
        case "paper":
            if(computerSelection === "scissors") {
                result = `You lose! ${computerSelection} beats Paper!`
            } else if (computerSelection === "rock") {
                result = `You win!! Paper beats ${computerSelection}`
            } else {
                result = "It's a draw!"
            }
            break;
        case "scissors":
            if(computerSelection === "rock") {
                result = `You lose! ${computerSelection} beats Scissors!`
            } else if (computerSelection === "paper") {
                result = `You win!! Scissors beats ${computerSelection}`
            } else {
                result = "It's a draw!"
            }
            break;
    }

    return result;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection))

// compare user input to random: 
//      rock > scissors 
//      paper > rock
//      scissors > paper
// if user input wins: "congrats, you win"
//      if computer wins: "i win"