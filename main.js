console.log("Hello World");

function getComputerChoice(){
    const choiche = Math.random();

    if (choiche < 0.33) {
        return "Rock!";
    } else if (choiche < 0.66) {
        return "Paper!";
    } else {
        return "Scissors!";
    }

    function getHumanChoice(){
        const humanChoice = prompt();

        return humanChoice;
    }
}

return getHumanChoice();
return getComputerChoice();