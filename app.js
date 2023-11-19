const computerChoiceDisplay = document.querySelector('#computer-choice')
const userChoiceDisplay = document.querySelector('#user-choice')
const result = document.querySelector('#result')

let userInput
let computerInput
let buttonValues = []
const inputOptions = document.querySelectorAll('button')

inputOptions.forEach(inputOption => {
    buttonValues.push(inputOption.id)
    inputOption.addEventListener('click', (e) => {
        userInput = e.target.id 
        userChoiceDisplay.textContent = userInput
        computerInput = getComputerGenerateChoice()
    })
})


function getComputerGenerateChoice() {
    const randomSelection = buttonValues[Math.floor(Math.random() * buttonValues.length)]
    computerChoiceDisplay.textContent = randomSelection   
}
