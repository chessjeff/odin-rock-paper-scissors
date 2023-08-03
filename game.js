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
function playRound(playerSelection, computerSelection) {
    let result;
    let lowerPlayerSelection = playerSelection.toLowerCase()
    
    // compare user input to random: 
    // rock > scissors 
    // paper > rock
    // scissors > paper
    // if user input wins: "You win! ..."
    // if computer wins: "You lose! ..."
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

    return result;
}

// play rock paper scissors 5 times, print playRound() result and score
function game() {

    let playerTally = 0;
    let computerTally = 0;
    let drawCounter = 0;

    // one instance of rock paper scissors
    // run game 5 times while keeping score
    for (let i = 0; i < 5; i++) {
        // get input and computer's choice
        let playerSelection = prompt("Enter rock, paper, or scissors", "");
        let roundChoice = getComputerChoice();
        // run game and print result
        let roundResult = playRound(playerSelection, roundChoice);
        console.log(roundResult);
        
        // check result to update score counter
        if (roundResult.includes("You win")) {
            playerTally++;
        } else if (roundResult.includes("You lose")) {
            computerTally++;
        } else {
            drawCounter++;
        }
        console.log(`The score is ${playerTally} - ${computerTally} - ${drawCounter}`);
        
        console.log(""); // blank line to separate rounds
    }
}

// tiebreaker() would be cool
// game() calls tiebreaker() if playerTally == computerTally at the end of the loop
// or playRound() again and then assign a different string 