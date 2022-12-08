var player = 0;
var computer = 0;

function computerPlay() {
    const hands = ["rock", "paper", "scissors"];

    const random = Math.floor(Math.random() * hands.length);
    return (random, hands[random]);
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        player++;
        return "You win! Rock beats Scissors";

    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        player++;
        return "You win! Scissors beats paper";

    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        player++;
        return "You win! Paper beats rock";

    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computer++;
        return "You lose! Rock beats scissors";

    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computer++;
        return "You lose! Scissors beats paper";

    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computer++;
        return "You lose! Paper beats rock";

    }
    else {
        return "Tie game! You both selected " + playerSelection;
    }
}


//asdlkflasjdlkfjlaksjdf
function game() {

    for (i = 0; i < 5; i++) {
        const userInput = prompt("rock, paper, or scissors?");
        const playerSelection = userInput.toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (player > computer) {
        console.log("You won!");
    }
    else if (player < computer) {
        console.log("LOSER!");
    }
    else {
        console.log("You tied!");
    }
    console.log("Score");
    console.log("You: " + player);
    console.log("Computer: " + computer);
}
game();