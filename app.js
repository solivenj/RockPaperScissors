function computerPlay() {
    let moves = ['Rock', 'Paper', 'Scissors'];
    return moves[Math.floor(Math.random() * moves.length)];
}

function getWinner(playerSelection, computerSelection) {
    let pSelection = playerSelection.toLowerCase();
    let cSelection = computerSelection.toLowerCase();

    if (pSelection == cSelection) {
        return "tie";
    }
    
    if ((pSelection == "paper" && cSelection == "rock")  || (pSelection == "rock" && cSelection == "scissors") || (pSelection == "scissors" && cSelection == "paper")) {
        return "player"
    } else {
        return "computer";
    }
}

function updateScore(winner) {
    if (winner == "player") {
        pScore++;
    } else if (winner == "computer") {
        cScore++;
    }

    pScoreDiv.textContent = `Player Score: ${pScore}`;
    cScoreDiv.textContent = `Computer Score: ${cScore}`;
}

function addReset() {
    let btn = document.createElement("button");
    btn.textContent = "Play Again";
    winner.appendChild(btn);
    btn.addEventListener('click', reset);
}

function checkWinner() {
    if (pScore == 5 || cScore == 5) {
        winner.textContent = "Winner: ";
        winner.textContent += pScore == 5 ? "Player" : "Computer";
        buttons.forEach(button => button.disabled = true);
        addReset();
    }
}

function playRound(e) {
    let pMove = this.textContent;
    let cMove = computerPlay();
    moves.textContent = `Player Selection: ${pMove}\tComputer Selection: ${cMove}`;
    let winner = getWinner(this.textContent, computerPlay());
    updateScore(winner);
    checkWinner();
}

function reset(e) {
    pScore = cScore = 0;
    winner.textContent = "";
    moves.textContent = "Choose a move:";
    pScoreDiv.textContent = "";
    cScoreDiv.textContent = "";
    buttons.forEach(button => button.disabled = false);
}

let pScore = cScore = 0;
const pScoreDiv = document.getElementById("pScore");
const cScoreDiv = document.getElementById("cScore");
const winner = document.getElementById("winner");
const moves = document.getElementById("moves");
moves.textContent = "Choose a move:";
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));

