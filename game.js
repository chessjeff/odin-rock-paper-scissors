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

// plays a round of rock paper scissors and returns game result
function playRound(playerSelection, computerSelection) { // manually insert playerSelection, call computerSelection()
    let result;
    let lowerPlayerSelection = playerSelection.toLowerCase()
    
    // compare user input to random: 
    // rock > scissors 
    // paper > rock
    // scissors > paper
    // if user input wins: "congrats, you win"
    // if computer wins: "i win"
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
                result = `You win!! Paper beats ${computerSelection}!`
            } else {
                result = "It's a draw!"
            }
            break;
        case "scissors":
            if(computerSelection === "rock") {
                result = `You lose! ${computerSelection} beats Scissors!`
            } else if (computerSelection === "paper") {
                result = `You win!! Scissors beats ${computerSelection}!`
            } else {
                result = "It's a draw!"
            }
            break;
    }
    console.log(result);
    return result;
}

//const playerSelection = "paper";
//const computerSelection = getComputerChoice();

//console.log(playRound(playerSelection, computerSelection))

function game() {
// run the game 5 times
// prompt player for input for each round
// keep a tally of wins and losses
// return overall winner after 5 rounds

    let playerTally = 0;
    let computerTally = 0;
    let roundScore; //string

    // one instance of rock paper scissors
    // run game 5 times while keeping score
    for (let i = 0; i < 5; i++) {
        // get input
        let playerSelection = prompt("Enter rock, paper, or scissors", "")
        // get computerChoice
        let roundChoice = getComputerChoice()
        // run game
        let roundResult = playRound(playerSelection, roundChoice)

        // trying to create a score counter. detect "win" or "lose" from string given by playRound()?        
    } 
}

// function that capitalizes the first letter of computer input for print statement