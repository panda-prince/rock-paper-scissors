/*
Get computer's random choice of either rock, paper, or scissors.
Get player's choice of either rock, paper, or scissors.

Check if player's choice is an accepted input and account of variations.
-----
Grab choices from array then
Compare each entry to the player input in lowercase form.
-----

*/


let choices = ["rock", "paper", "scissors"]
let button = document.getElementById("play-again");
function playAgain() {
    playerInput();
    getComputerChoice();
}

/*let getPlayerChoice = () => {
    let newPlayerInput = String(prompt("Rock, Paper, Scissors! Shoot!"));
    console.log(newPlayerInput);
    return newPlayerInput;
}
getPlayerChoice();*/

//Grabs player input and checks choice or asks again.
function playerInput() {
    let input = String(prompt("Rock, Paper, Scissors! Shoot!").toLowerCase());
    if (choices.includes(input)){
        console.log(input);
        return input;
    } else {
        console.log("That's not an option!!!");
        playerInput();
    }

};
playerInput();


/*
Alternative to checking player choice
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
*/

//Computer makes its own choice
let getComputerChoice = () => {
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    return computerChoice;
};

const computerSelection = getComputerChoice();