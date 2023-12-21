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


let choices = ["rock", "paper", "scissors"]
let button = document.getElementById("play-again");
function playAgain() {
    playerInput();
}

//Computer makes its own choice
let getComputerChoice = () => {
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    return computerChoice;
};
const computerSelection = getComputerChoice();

//Grabs player input and checks choice or asks again.
/*let getPlayerChoice = () => {
    let newPlayerInput = String(prompt("Rock, Paper, Scissors! Shoot!"));
    console.log(newPlayerInput);
    return newPlayerInput;
}
getPlayerChoice();*/

function playerInput() {
    let input = String(prompt("Rock, Paper, Scissors! Shoot!").toLowerCase());
    if (choices.includes(input)){
        console.log(input);
        return input;
    } else {
        console.log("That's not an option!!!");
        input = null
        playerInput();
    }

};
const playerSelection = playerInput();

//--------------------------------------
/*Alternative to checking player choice
-------------------------------------------
let playerChoice = playerInput().toLowerCase();

if (choice.includes(playerChoice)){
        console.log(playerChoice);
    } else {
        console.log("That's not an option!!!");
        playerInput();
}; 
*/

/*

for (let i=0; i <= choice.length; i++) {
    if (playerChoice == choice[i]){
        console.log(playerChoice);
        break
    } else {
        console.log("That's not an option!!!");
    };
};
--------------------------------------------------------
*/


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