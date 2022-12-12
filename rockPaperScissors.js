//counters (fields)
var player = 0;
var computer = 0;

//computer decider
function computerPlay() {
    const hands = ["rock", "paper", "scissors"];

    const random = Math.floor(Math.random() * hands.length);
    return (random, hands[random]);
}
//Play a round
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
//rock button
function myRockFunction() {
    const computerSelection = computerPlay();
    console.log(playRound("rock", computerSelection));
    game();
}
//paper button
function myPaperFunction() {
    const computerSelection1 = computerPlay();
    console.log(playRound("paper", computerSelection1));   
    game();     
}
//scissor button
function myScissorsFunction() {
    const computerSelection2 = computerPlay();
    console.log(playRound("scissors", computerSelection2));  
    game();      
}
//update display
function game() {
    //update player total
    document.getElementById("player").innerHTML = player;
    //update computer total
    document.getElementById("computer").innerHTML = computer;

        
    //declare the winner
    if (player == 5) {
        document.getElementById("winner").innerHTML = "player";
    }
    else if (computer == 5) {
        document.getElementById("winner").innerHTML = "computer";
    }
}