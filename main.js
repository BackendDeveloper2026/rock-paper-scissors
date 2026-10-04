//Variabili globali
let humanScore = 0;
let computerScore = 0;

console.log("Hello World");

/*
questa funziona fa in modo che l'avversario
possa inviare alla console un valore
randomico tra rock, paper o scissors
*/
function getComputerChoice(){
    const pcChoice = Math.random();

    if (pcChoice < 0.33) {
        return "Rock!";
    } else if (pcChoice < 0.66) {
        return "Paper!";
    } else {
        return "Scissors!";
    }
}

/*
questa funzione permette all'utente di scegliere
tra rock, paper e scissors
*/
function getHumanChoice(){
    const humanChoice = prompt("rock, paper or scissors");
    if (humanChoice === "rock" ||
        humanChoice === "paper" ||
        humanChoice === "scissors") {
        return humanChoice;
    } else {
            return "Invalid parameter.";
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock"
    ){
        humanScore++;
        return "Human win round!";
    } else if (humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock"){
            computerScore++;
            return "Computer win round";
    } else {
        return "Tie!"
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound("rock", "scissors"));
console.log(humanScore);
console.log(computerScore);