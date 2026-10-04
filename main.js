//Variabili globali
let humanScore = 0;
let computerScore = 0;
let result = "";
const humanChoiceDisplay = document.querySelector("#human-choice");
const computerChoiceDisplay = document.querySelector("#computer-choice");
const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const resultDisplay = document.querySelector("#result");

console.log("Hello World");

/*
questa funziona fa in modo che l'avversario
possa inviare alla console un valore
randomico tra rock, paper o scissors
*/
function getComputerChoice(){
    const pcChoice = Math.random();

    if (pcChoice < 0.33) {
        return "rock";
    } else if (pcChoice < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

/*
questa funzione permette all'utente di scegliere
tra rock, paper e scissors
*/
function getHumanChoice(){
    const pcChoice = Math.random();

        if (pcChoice < 0.33) {
            return "rock";
        } else if (pcChoice < 0.66) {
            return "paper";
        } else {
            return "scissors";
        }

    /*const humanChoice = prompt("rock, paper or scissors");
    if (humanChoice === "rock" ||
        humanChoice === "paper" ||
        humanChoice === "scissors") {
        return humanChoice;
    } else {
            return "Invalid parameter.";
    }*/
}

/*
Questa funzione fa si che venga giocato un round tra umano e computer
*/
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

/*
questa funzione crea un loop di 5 round per una partita
*/
function playGame(){
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    } if (humanScore > computerScore){
        return result = "Human won the game."
    } else if (humanScore === computerScore){
        return result = "It's a tie."
    } else {
        return result = "Computer won the game."
    }
}

//TEST ZONE START
playGame();
//humanChoiceDisplay.textContent = getHumanChoice();
//computerChoiceDisplay.textContent = getComputerChoice();
humanScoreDisplay.textContent = humanScore;
computerScoreDisplay.textContent = computerScore;
resultDisplay.textContent = result;
//TEST ZONE END