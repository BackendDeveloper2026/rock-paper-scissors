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
    const humanChoice = prompt();
    if (humanChoice === "rock" ||
        humanChoice === "paper" ||
        humanChoice === "scissors") {
        return humanChoice;
    } else {
            return "Invalid parameter.";
    }
}

return getHumanChoice();
return getComputerChoice();