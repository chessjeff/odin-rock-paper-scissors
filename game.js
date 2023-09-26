const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});

let playerScore = 0;
let computerScore = 0;

const scoreContainer = document.querySelector('#scoreContainer');
const score = document.createElement('div');

const resultList = document.querySelector('#result');
const content = document.createElement('div');

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
function playRound(playerSelection) {
    let result;
    let computerSelection = getComputerChoice();
    
    //resultList.removeChild(content);
    //scoreContainer.removeChild(score);

    switch(playerSelection) {
        case "rock":
            if(computerSelection === "paper") {
                computerScore++;
                result = `You lose! ${computerSelection} beats Rock!`
            } else if (computerSelection === "scissors") {
                playerScore++;
                result = `You win!! Rock beats ${computerSelection}`
            } else {
                result = "It's a draw!"
            }
            break;
        case "paper":
            if(computerSelection === "scissors") {
                computerScore++;
                result = `You lose! ${computerSelection} beats Paper!`
            } else if (computerSelection === "rock") {
                playerScore++;
                result = `You win!! Paper beats ${computerSelection}!`
            } else {
                result = "It's a draw!"
            }
            break;
        case "scissors":
            if(computerSelection === "rock") {
                computerScore++
                result = `You lose! ${computerSelection} beats Scissors!`
            } else if (computerSelection === "paper") {
                playerScore++;
                result = `You win!! Scissors beats ${computerSelection}!`
            } else {
                result = "It's a draw!"
            }
            break;
    }

    printGameResult(result);
    printScore(playerScore, computerScore);
}

function printGameResult(playRoundResult) {
    content.textContent = playRoundResult;
    resultList.appendChild(content);
} 

function printScore(player, computer) {
    score.textContent = `Human ${player} Computer ${computer}`;
    scoreContainer.appendChild(score);
}


