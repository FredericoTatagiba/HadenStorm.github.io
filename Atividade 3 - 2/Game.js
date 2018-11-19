alert ("Want to start the game? Press Ok.")

var userChoice = prompt("Do you want rock, paper or scissors?");

var computerChoice = Math.random();

if (computerChoice < 0.34) {

computerChoice = "rock";

} else if(computerChoice <= 0.67) {

computerChoice = "paper";

} else {

computerChoice = "scissors";

} 

console.log("Computer: " + computerChoice);

var compare = function(choice1,choice2) {
    if (choice1 == choice2) {
        alert("It's a draw!");
    }

    else if(choice1 === "rock"){

        if(choice2 === "scissors") {
            alert("Player Win");
        } else {
                alert("Computer Wins");
            }
        }
    else if (choice1 === "paper"){
        if(choice2 === "rock") {
            alert("Player Win");
        } 
        else {
              alert("Computer Win");  
            }
    }

    else if (choice1 === "rock"){
        if(choice2 === "scissors"){
            alert("Player Win");
        } 
        else {
            alert("Computer Win");
        }
    }
};
compare(userChoice,computerChoice);