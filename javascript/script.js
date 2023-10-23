console.log("Hello World")

let option = ['rock', 'paper', 'scissors']

// computer getting random choice each time
const getComputerChoice = () => {
    const choice = option[Math.floor(Math.random() * option.length)]
    return choice
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie"
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ) {
        return "player"
    } else {
        return "computer"
    }
}

function checkingWinner(playerSelection, computerSelection) {
    const result = playRound(playerSelection, computerSelection) 

    if (result == "tie") {
        return "The game will be draw"
    } else if (result == "player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = "rock"
        const computerSelection = getComputerChoice()
        console.log(checkingWinner(playerSelection, computerSelection))
    }

}

game()