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
    
    switch(playerSelection) {
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
    printGameResult(result);

}

function printGameResult(playRoundResult) {
    const container = document.querySelector('#container')
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = playRoundResult;
    container.appendChild(content);
} 

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id); //this is where a function call is made
        // calls playRound()
    });
});


//playRound needs to take just one parameter (the button press)
//playRound calls getComputerChoice
//playRound compares these two and returns result

//printGameResult() takes playRound Return 
//creates a div for the result of the game

//printScore() tracks how many result divs there are
//deduce winner info and print score