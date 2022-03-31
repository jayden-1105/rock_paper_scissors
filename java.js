function computerPlay() {
    const choices = ["rock", "paper", "scissor"];
    let computerChoice = choices[Math.floor(Math.random()*3)];
    console.log(computerChoice);
    return computerChoice;
}