
const result = document.getElementById('result')
const humanScore = document.getElementById('human-score')
const machineScore = document.getElementById('machine-score')


let humanScoreNumber = 0
let machineScoreNumber = 0


function playHuman(humanChoice) {
   const machineChoice = playMachine()
   playTheGame(humanChoice, machineChoice)
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

function playTheGame  (human, machine) {
    console.log(`Humano: ${human} | Máquina: ${machine}`);

if (human === machine) {
        result.innerHTML = 'Deu empate'

}else if (
    (human === 'paper' && machine === 'rock') ||
    (human === 'rock' && machine === 'scissors') ||
    (human === 'scissors' && machine === 'paper')
){
    humanScoreNumber++
    humanScore.innerHTML = humanScoreNumber
    result.innerHTML = 'você ganhou'
}else {
    machineScoreNumber++
    machineScore.innerHTML = machineScoreNumber
    result.innerHTML = 'Você perdeu para Gemini'
}
}

