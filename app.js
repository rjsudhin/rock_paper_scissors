const computerChoiceDisplay = document.querySelector('#computer-choice')
const userChoiceDisplay = document.querySelector('#user-choice')
const result = document.querySelector('#result')
console.log(result)

let userInput
let computerInput
let gameWinner 
let buttonValues = []
const inputOptions = document.querySelectorAll('button')

inputOptions.forEach(inputOption => {
    buttonValues.push(inputOption.id)
    inputOption.addEventListener('click', (e) => {
        userInput = e.target.id 
        userChoiceDisplay.textContent = userInput
        computerInput = getComputerGenerateChoice()
        computerChoiceDisplay.textContent = computerInput
        checkingWinner()
    })
})


function getComputerGenerateChoice() {
    const randomSelection = buttonValues[Math.floor(Math.random() * buttonValues.length)]
    return randomSelection
}

function checkingWinner() {
    if (userInput == computerInput) {
        gameWinner = 'game will be draw'
    } else if (
        (userInput == 'rock' && computerInput == 'scissors') || 
        (userInput == 'paper' && computerInput == 'rock') ||
        (userInput == 'scissors' && computerInput == 'paper')
    ) {
        gameWinner = 'You Win..!'
    } else {
        gameWinner = 'You Lose..!'
    }

    result.textContent = gameWinner
}