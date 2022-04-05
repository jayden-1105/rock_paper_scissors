function computerPlay() {
    const choices = ["rock", "paper", "scissor"];
    let computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice;
}

let computerSelection = computerPlay();
let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {
    gameResult.style.color = "blue";
    gameResult.style.fontSize = "24px";

    if (playerSelection === computerSelection) {
        gameResult.textContent = "It's a tie!";
    }
    if (playerSelection == "rock" && computerSelection == 'paper') {
        gameResult.textContent = "Computer wins. Paper beats rock.";
        computerWins += 1;
    }
    if (playerSelection == "rock" && computerSelection == "scissor") {
        gameResult.textContent = "You win. Rock beats scissor.";
        playerWins += 1;
    }
    if (playerSelection == "paper" && computerSelection == "scissor") {
        gameResult.textContent = "Computer wins. Scissor beats paper.";
        computerWins += 1;
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        gameResult.textContent = "You win. Paper beats rock.";
        playerWins += 1;
    }
    if (playerSelection == "scissor" && computerSelection == "rock") {
        gameResult.textContent = "Computer wins. Rock beats scissor.";
        computerWins += 1;
    }
    if (playerSelection == "scissor" && computerSelection == "paper") {
        gameResult.textContent = "You win. Scissor beats paper.";
        playerWins += 1;
    }
    playerScore.textContent = `Player score: ${playerWins}`;
    computerScore.textContent = `Computer score: ${computerWins}`;
    checkScore(computerWins, playerWins);
    if (checkScore(computerWins, playerWins)) {
        playerWins = 0;
        computerWins = 0;
    }
}

const rock = document.querySelector('.rock');
rock.addEventListener('click', function() {
    playRound('rock', computerSelection);
    computerSelection = computerPlay();
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', function() {
    playRound('paper', computerSelection);
    computerSelection = computerPlay();

});
const scissor = document.querySelector('.scissor');
scissor.addEventListener('click', function() {
    playRound('scissor', computerSelection);
    computerSelection = computerPlay();
});

const computerScore = document.querySelector('.computerScore');
const playerScore = document.querySelector('.playerScore');
const gameResult = document.querySelector('.result');

function checkScore(computerScore, playerScore) {
    if (playerScore >= 5) {
        gameResult.style.color = "red";
        gameResult.style.fontSize = "40px";
        gameResult.textContent = "You won! Computers still haven't taken over yet.";
        return true;
    }
    if (computerScore >= 5) {
        gameResult.style.color = "red";
        gameResult.style.fontSize = "40px";
        gameResult.textContent = "Computer won. The human species has been surpassed.";
        return true;
    }
}