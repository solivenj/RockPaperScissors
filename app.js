function computerPlay() {
    let moves = ['Rock', 'Paper', 'Scissors'];
    return moves[Math.floor(Math.random() * moves.length)];
}

function playRound(playerSelection, computerSelection) {
    let pSelection = playerSelection.toLowerCase();
    let cSelection = computerSelection.toLowerCase();

    if (pSelection == cSelection) {
        return "Tie!";
    }
    
    if ((pSelection == "paper" && cSelection == "rock")  || (pSelection == "rock" && cSelection == "scissors") || (pSelection == "scissors" && cSelection == "paper")) {
        return "You win";
    } else {
        return "You lose!";
    }
}

function game() {
    let pScore = cScore = 0;
    for (let i = 0; i < 5; i++) {
        let pMove = prompt("Enter a move (Rock, Paper, or Scissors): ");
        let cMove = computerPlay()
        let result = playRound(pMove, cMove);
        console.log(`Player: ${pMove}\tComputer: ${cMove}`);
        console.log(`${result}`);
        if (result[4] == 'w') {
            pScore++;
        } else if (result[4] == 'l') {
            cScore++;
        }
        console.log(`Player Score: ${pScore}\tComputer Score: ${cScore}`);

    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

