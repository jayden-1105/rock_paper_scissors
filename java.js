function computerPlay() {
    const choices = ["rock", "paper", "scissor"];
    let computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice;
}


let computerSelection = computerPlay();
let result = window.prompt("rock, paper or scissor");
let playerSelection = result.toLowerCase();
let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {
    console.log(computerSelection);
    console.log(playerSelection);
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        console.log(`Player wins: ${playerWins}`);
        console.log(`Computer wins: ${computerWins}`);
    }
    else if (playerSelection == "rock" && computerSelection == 'paper') {
        console.log("Computer wins. Paper beats rock.");
        computerWins += 1;
        console.log(`Player wins: ${playerWins}`);
        console.log(`Computer wins: ${computerWins}`);
    }
    else if (playerSelection == "rock" && computerSelection == "scissor") {
        console.log("You win. Rock beats scissor.");
        playerWins += 1;
        console.log(`Player wins: ${playerWins}`);
        console.log(`Computer wins: ${computerWins}`);
    }
    else if (playerSelection == "paper" && computerSelection == "scissor") {
        console.log("Computer wins. Scissor beats paper.");
        computerWins += 1;
        console.log(`Player wins: ${playerWins}`);
        console.log(`Computer wins: ${computerWins}`);
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win. Paper beats rock.");
        playerWins += 1;
        console.log(`Player wins: ${playerWins}`);
        console.log(`Computer wins: ${computerWins}`);
    }
    else if (playerSelection == "scissor" && computerSelection == "rock") {
        console.log("Computer wins. Rock beats scissor.");
        computerWins += 1;
        console.log(`Player wins: ${playerWins}`);
        console.log(`Computer wins: ${computerWins}`);
    }
    else if (playerSelection == "scissor" && computerSelection == "paper") {
        console.log("You win. Scissor beats paper.");
        playerWins += 1;
        console.log(`Player wins: ${playerWins}`);
        console.log(`Computer wins: ${computerWins}`);
    }
    else {
        console.log("You did not choose a valid option. You lose");
        computerWins += 1;
        console.log(`Player wins: ${playerWins}`);
        console.log(`Computer wins: ${computerWins}`);
    }

}

function game() {
    for (let i = 0; i < 5; i++){
        playRound(playerSelection, computerSelection);
        computerSelection = computerPlay();
        result = window.prompt("rock, paper or scissor");
        playerSelection = result.toLowerCase();
    }
}

game();

if (computerWins === playerWins) {
    console.log("it's a draw");
}
else if (computerWins > playerWins) {
    console.log("computer wins");
}
else {
    console.log("you win");
}