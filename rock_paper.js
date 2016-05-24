//Write a game that makes the user guess a number between 1-10. The user has 10 tries to guess the computer's number correctly.

var computerChoice = Math.floor(Math.random() * 11)
var userOutput = prompt("Pick a number between 1 - 10")
var userNumber = parseInt(userOutput)
var i = 1
var numberIsTrue = false
while ((i < 10) && (isNaN(userNumber) === numberIsTrue)) {
	if (userNumber === computerChoice) {
	console.log("you guessed correctly!");
	break;
} else {
	 userOutput = prompt("Pick a number between 1 - 10")
     userNumber = parseInt(userOutput)
}
i++;
}
console.log("The correct number is " + computerChoice)

//Write a "rock paper scissors" game where you play against the computer

//var playAgain = true
var choices = ["rock", "paper", "scissors"]
var userChoice = prompt("Do you choose rock, paper or scissors?");
while (choices.indexOf(userChoice) === -1) {
	userChoice = prompt("Please enter rock, paper scissors").toLowerCase
}
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    if(userChoice === computerChoice) {
        return "The result is a tie!";
    }
else if(userChoice === "rock") {
    if(computerChoice === "scissors") {
        return "rock wins";
    }
    else {
        return "paper wins";
    }
}
else if (userChoice ==="paper") {
    if(computerChoice ==="rock") {
        return "paper wins";
    }
    else {
        return "scissors wins";
    }
}
else if (userChoice === "scissors") {
    if (computerChoice === "paper") {
        return "scissors wins";
    }
    else {
        return "rock wins";
    }
 }
};
console.log (compare(userChoice, computerChoice))

//playAgain = confirm("Do you want to play again")
