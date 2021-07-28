function computerPlay() {
    let moves = ['rock', 'paper', 'scissors'];
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

function updateResult(str) {
    result.textContent = str;
}

function updateScore(winner) {
    if (winner == "player") {
        pScore++;
        updateResult("Player wins!");
    } else if (winner == "computer") {
        cScore++;
        updateResult("Computer wins!");
    } else {
        updateResult("Tie!");
    }

    pScoreDiv.textContent = `${pScore}`;
    cScoreDiv.textContent = `${cScore}`;

    checkWinner();
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

function updatePlayerCPUImage(imgID, move) {
    let img = document.getElementById(imgID);
    img.style.display = "block";
    if (move == "paper") {
        img.src = "images/paper-white.png";
    } else if (move == "rock") {
        img.src = "images/rock-white.png";
    } else {
        img.src = "images/scissors-white.png";
    }
}

function playRound(e) {
    let pMove = this.textContent.toLowerCase();
    let cMove = computerPlay().toLowerCase();
    updatePlayerCPUImage("pMove", pMove);
    updatePlayerCPUImage("cMove", cMove);
    let winner = getWinner(pMove, cMove);
    updateScore(winner);
}

function reset(e) {
    pScore = cScore = 0;
    winner.textContent = "";
    pScoreDiv.textContent = "0";
    cScoreDiv.textContent = "0";
    let imgs = document.querySelectorAll('img');
    imgs.forEach(img => img.style.display = 'none');
    buttons.forEach(button => button.disabled = false);
    result.textContent = "";
}

let pScore = cScore = 0;
const pScoreDiv = document.getElementById("pScore");
const cScoreDiv = document.getElementById("cScore");
const winner = document.getElementById("winner");
const moves = document.getElementById("moves");
const prompt = document.getElementById("prompt");
let result = document.getElementById("result");
prompt.textContent = "Choose a move:";
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));

