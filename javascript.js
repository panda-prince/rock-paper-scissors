/*
Get computer's random choice of either rock, paper, or scissors.
Get player's choice of either rock, paper, or scissors.

Check if player's choice is an accepted input and account of variations.
-----
Grab choices from array then
Compare each entry to the player input in lowercase form.
-----

---
rock beats scissors      0 beats 2
paper beats rock         1 beats 0
scissors beats paper     2 beats 1
---
*/

//Create array of options for selection.
let choices = ["rock", "paper", "scissors"]

//Function to randomly choose option for computer.
let getComputerChoice = () => {
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
};
const computerSelection = getComputerChoice();

//Grabs player input and checks choice or asks again.
function playerInput() {
    let input = String(prompt("Rock, Paper, Scissors! Shoot!").toLowerCase());
    if (choices.includes(input)){
        console.log(input);
        return input;
    } else {
        console.log("That's not an option!!!");
        return  playerInput();
    }

};
const playerSelection = playerInput();

//Function takes two parameters, player and computer, to play a round.
//then compares the two choices according to game rules 
//(If computer chose _  and player chose _, then ? won?) 
//Console logged string to delcare winner.
function playRound(computerSelection, playerSelection){
    if (computerSelection == "rock" && playerSelection == "paper") {
        console.log("You win! Paper beats Rock!");
        return;
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        console.log("You lose! Paper beats Rock!");
        return;
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        console.log("You win! Scissors beats Paper!");
        return;
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        console.log("You lose! Scissors beats Paper!");
        return;
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        console.log("You win! Rock beats Scissors!");
        return;
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        console.log("You lose! Rock beats Scissors!");
        return;
    } else if (computerSelection == playerSelection){
        console.log("Tie!");
        return;
    }
};

console.log(playRound(computerSelection, playerSelection));