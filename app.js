const computerChoiceDisplay = document.querySelector('#computer-choice')
const userChoiceDisplay = document.querySelector('#user-choice')
const result = document.querySelector('#result')

let userInput
let computerInput
const inputOptions = document.querySelectorAll('button')

inputOptions.forEach(inputOption => {
    inputOption.addEventListener('click', (e) => {
        userInput = e.target.id 
        console.log(userInput)
    })
})
