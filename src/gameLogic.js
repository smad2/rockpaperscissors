export function getComputerChoice() {
    let rnd = Math.random();
    if (rnd <= 0.33) {
        return 'rock';
    } else if (rnd <= 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


export function determineRoundWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) return 'tie';
    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };
    return winConditions[humanChoice] === computerChoice ? 'win' : 'lose';
}

export function formatResult(result, humanChoice, computerChoice) {
    switch (result) {
        case 'tie':
            return `It's a tie! Both chose ${computerChoice}!`;
        case 'win':
            return `You win! ${humanChoice} beats ${computerChoice}!`;
        case 'lose':
            return `You lose! ${computerChoice} beats ${humanChoice}!`;

    }
}

