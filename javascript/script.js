console.log("Hello World")

// adding players points
let playerPoint = 0
let computerPoint = 0

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
        playerPoint++
        return "player"
    } else {
        computerPoint++
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

//adding user choice to input
// then checking the thing is existing in options
function getUserInputChoice() {
    let userChoice = false
    while (userChoice == false) {

        // getting the user input with prompt
        const userInput = prompt("rock paper scissors", 'rock')
        if (userInput == null) {
            continue
        }
        
        // checking the user input in existing in options
        // adding any case is working ex: 'rock', 'Rock', 'ROCK'
        const lowerUserInput = userInput.toLowerCase()
        if (option.includes(lowerUserInput)) {
            userChoice = true
            return lowerUserInput
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getUserInputChoice() // getting user Input
        const computerSelection = getComputerChoice()
        console.log(checkingWinner(playerSelection, computerSelection))
    }

    // checking who is the winner at the end with more points
    if (computerPoint == playerPoint) {
        alert("The Points will be Draw")
    } else if (playerPoint > computerPoint) {
        alert(`You Win "${playerPoint}" Points`)
    } else {
        alert(`Computer Win "${computerPoint}" Points`)
    }
}

game()