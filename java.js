function computerPlay() {
    const choices = ["rock", "paper", "scissor"];
    let computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice;
}

let computerSelection = computerPlay();
let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {
    console.log(computerSelection);
    console.log(playerSelection);
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        console.log(`Player wins: ${playerWins}`);
        console.log(`Computer wins: ${computerWins}`);
        //scoreboard.textContent = `Player wins: ${playerWins}, Computer wins: ${computerWins}`);
    }
    if (playerSelection == "rock" && computerSelection == 'paper') {
        console.log("Computer wins. Paper beats rock.");
        computerWins += 1;
        console.log(`Player wins: ${playerWins}`);
        console.log(`Computer wins: ${computerWins}`);
        
    }
    if (playerSelection == "rock" && computerSelection == "scissor") {
        console.log("You win. Rock beats scissor.");
        playerWins += 1;
        console.log(`Player wins: ${playerWins}`);
        console.log(`Computer wins: ${computerWins}`);
    }
    if (playerSelection == "paper" && computerSelection == "scissor") {
        console.log("Computer wins. Scissor beats paper.");
        computerWins += 1;
        console.log(`Player wins: ${playerWins}`);
        console.log(`Computer wins: ${computerWins}`);
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win. Paper beats rock.");
        playerWins += 1;
        console.log(`Player wins: ${playerWins}`);
        console.log(`Computer wins: ${computerWins}`);
    }
    if (playerSelection == "scissor" && computerSelection == "rock") {
        console.log("Computer wins. Rock beats scissor.");
        computerWins += 1;
        console.log(`Player wins: ${playerWins}`);
        console.log(`Computer wins: ${computerWins}`);
    }
    if (playerSelection == "scissor" && computerSelection == "paper") {
        console.log("You win. Scissor beats paper.");
        playerWins += 1;
        console.log(`Player wins: ${playerWins}`);
        console.log(`Computer wins: ${computerWins}`);
    }
    scoreboard.textContent = `Player wins: ${playerWins} \nComputer wins: ${computerWins}`;
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

const scoreboard = document.querySelector('.scoreboard');
const gameResult = document.querySelector('.result');