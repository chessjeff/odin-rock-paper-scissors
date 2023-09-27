const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playGame(button.id);
    });
});

let playerScore = 0;
let computerScore = 0;

const scoreContainer = document.querySelector('#scoreContainer');
const score = document.createElement('div');

const resultList = document.querySelector('#result');
const content = document.createElement('div');

const gameEnd = document.querySelector('#gameOverText')
const endText = document.createElement('div');

const reset = document.querySelector('#reset');
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

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

function playGame(playerSelection) {
    const result = playRound(playerSelection);
    printGameResult(result);
    printScore(playerScore, computerScore);
    checkGameOver();
};
    
function playRound(playerSelection) {
    let result;
    let computerSelection = getComputerChoice();
    
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
    return result;
}

function printGameResult(playRoundResult) {
    content.textContent = playRoundResult;
    resultList.appendChild(content);
} 

function printScore(player, computer) {
    score.textContent = `Human ${player} Computer ${computer}`;
    scoreContainer.appendChild(score);
}

function gameReset() {
    playerScore = 0;
    computerScore = 0;

    scoreContainer.removeChild(score);
    resultList.removeChild(content);
    reset.removeChild(resetButton);
    gameEnd.removeChild(endText);

    toggleButton();
}

function checkGameOver() {
    if (playerScore === 5) {
        endText.textContent = 'The game is over, you won!'
        gameEnd.appendChild(endText);
        reset.appendChild(resetButton);
        resetButton.addEventListener('click', () => {
            gameReset();
        });
        toggleButton();
    } else if (computerScore === 5) {
        endText.textContent = 'The game is over, you lost.'
        gameEnd.appendChild(endText);
        reset.appendChild(resetButton);
        resetButton.addEventListener('click', () => {
            gameReset();
        });
        toggleButton();
    } 
}

function toggleButton() {
    if (playerScore === 5 || computerScore === 5) {
        rockBtn.setAttribute('disabled', 'disabled');
        paperBtn.setAttribute('disabled', 'disabled');
        scissorsBtn.setAttribute('disabled', 'disabled');
    } else {
        rockBtn.removeAttribute('disabled');
        paperBtn.removeAttribute('disabled');
        scissorsBtn.removeAttribute('disabled');
    }
};