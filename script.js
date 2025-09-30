let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rnd = Math.random();
    if (rnd <= 0.33) {
        return 'rock';
    } else if (rnd <= 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors!");
    if (isValid(choice.trim().toLocaleLowerCase())) {
        return choice.trim().toLocaleLowerCase()
    } else {
        alert('Invalid Item, please try again.')
    }
}

function isValid(str) {
    return str === "rock" || str === "paper" || str === "scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert(`It's a tie! The computer has also chosen ${computerChoice}!`);
        console.log(`It's a tie! The computer has also chosen ${computerChoice}!`);
        return;
    }
    switch (humanChoice) {
        case 'rock':
            if (computerChoice === 'paper') {
                Lose(humanChoice, computerChoice)

            } else {
                Win(humanChoice, computerChoice)
            }
            break;
        case 'paper':
            if (computerChoice === 'scissors') {
                Lose(humanChoice, computerChoice)

            } else {
                Win(humanChoice, computerChoice)
            }
            break;
        case 'scissors':
            if (computerChoice === 'rock') {
                Lose(humanChoice, computerChoice)
            } else {
                Win(humanChoice, computerChoice)
            }
            break;

    }

}

function Lose(humanChoice, computerChoice) {
    alert(`You Lose! The computer chose ${computerChoice} and beats ${humanChoice}!`);
    console.log(`You Lose! The computer chose ${computerChoice} and beats ${humanChoice}!`);
    computerScore++;

}

function Win(humanChoice, computerChoice) {
    alert(`You Win! The computer chose ${computerChoice} and ${humanChoice} beats it!`);
    console.log(`You Win! The computer chose ${computerChoice} and ${humanChoice} beats it!`);
    humanScore++;
}

function playGame() {
    let round = 1;
    while (round < 6) {

        let humanChoice = getHumanChoice();
        while (!humanChoice) {
            humanChoice = getHumanChoice();
        }
        playRound(humanChoice, getComputerChoice());
        round++;

    }
    endGame();

}

function endGame(){
    if(humanScore === computerScore){
        alert(`It's a tie! The final score is ${humanScore} to ${computerScore}`);
        console.log(`It's a tie! The final score is ${humanScore} to ${computerScore}`);
    }else{
        humanScore > computerScore ? alert(`You win! The final score is ${humanScore} to ${computerScore}`) : alert(`You lose! The final score is ${humanScore} to ${computerScore}`);
    }
}

playGame();

