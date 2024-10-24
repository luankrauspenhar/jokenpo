const result = document.querySelector('.result')
const yourScoreText = document.getElementById('your-score')
const machineScoreText = document.getElementById('machine-score')



let humanScoreNumber = 0
let machineScoreNumber = 0



const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}



const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']

    const randomNumber = Math.floor(Math.random() * 3)

    return choices [randomNumber]
}



const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' Maquina: ' + machine )

    if(human === machine) {
        result.innerHTML = 'Empate!'

    } else if (
      (human === 'paper' && machine === 'rock') ||
      (human === 'rock' && machine === 'scissors') ||
      (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        yourScoreText.innerHTML = humanScoreNumber
        result.innerHTML = 'Você Ganhou!'
    } else {
        machineScoreNumber++
        machineScoreText.innerHTML = machineScoreNumber
        result.innerHTML = 'Você Perdeu!'
    }
    
}