import { showModal, updateComputerChoice, updateScoreDisplay } from "./ui.js";
import { getComputerChoice, determineRoundWinner, formatResult } from "./gameLogic.js"
import { GameHistory } from "./gameHistory.js";


document.addEventListener('DOMContentLoaded', () => {

    // get DOM elements
    const dom = {
        rockBtn: document.getElementById('rock-btn'),
        paperBtn: document.getElementById('paper-btn'),
        scissorsBtn: document.getElementById('scissors-btn'),
        playerChoiceDisplay: document.getElementById('player-choice'),
        computerChoiceDisplay: document.getElementById('computer-choice'),
        computerChoiceIcon: document.getElementById('computer-choice-icon'),
        resetGameBtn: document.getElementById('reset-game-btn'),
        roundResultDisplay: document.getElementById('round-result'),
        playerScoreDisplay: document.getElementById('player-score'),
        computerScoreDisplay: document.getElementById('computer-score')

    };

    const gameHistory = new GameHistory();

    setupEventListeners(dom, gameHistory);

});

function setupEventListeners(dom, gameHistory) {

    let humanScore = 0;
    let computerScore = 0;

    let humanChoice = '';

    // Cache DOM elements
    const {
        rockBtn,
        paperBtn,
        scissorsBtn,
        resetGameBtn,
        playerScoreDisplay,
        computerScoreDisplay,
        computerChoiceIcon,
        playerChoiceDisplay,
        computerChoiceDisplay,
        roundResultDisplay
    } = dom;



    const handleWeaponClick = (weapon) => {
        resetWeaponButtons();
        humanChoice = weapon;
        dom[`${weapon}Btn`].classList.add('active');
        playerChoiceDisplay.textContent = weapon.charAt(0).toUpperCase() + weapon.slice(1);
        PlayRound();
    };

    rockBtn.addEventListener('click', () => handleWeaponClick('rock'));
    paperBtn.addEventListener('click', () => handleWeaponClick('paper'));
    scissorsBtn.addEventListener('click', () => handleWeaponClick('scissors'));

    const resetWeaponButtons = () => {
        ['rock', 'paper', 'scissors'].forEach(weapon => {
            dom[`${weapon}Btn`].classList.remove('active');
        });
    };

    const PlayRound = () => {
        if (!humanChoice) {
            roundResultDisplay.textContent = "Choose your weapon first!";
            return;
        }

        const computerChoice = getComputerChoice();
        updateComputerChoice(computerChoice, computerChoiceDisplay, computerChoiceIcon);
        const result = determineRoundWinner(humanChoice, computerChoice);
        const formatedResult = formatResult(result, humanChoice, computerChoice);

        if (result === 'win') {
            humanScore++;
            playerScoreDisplay.textContent = humanScore;
            updateScoreDisplay(playerScoreDisplay);
            if (humanScore === 5) {
                showModal('victory');
            }
        } else if (result === 'lose') {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            updateScoreDisplay(computerScoreDisplay);

            if (computerScore === 5) {
                showModal('defeat');
            }
        }
        roundResultDisplay.textContent = formatedResult;
        gameHistory.addRound(humanChoice, computerChoice, formatedResult);
    };


    const resetGame = () => {
        humanScore = 0;
        computerScore = 0;
        playerChoiceDisplay.textContent = '-';
        computerChoiceDisplay.textContent = '-';
        computerChoiceIcon.removeAttribute('class');
        computerChoiceIcon.setAttribute('class', 'fas fa-question');
        playerScoreDisplay.textContent = '0';
        computerScoreDisplay.textContent = '0';
        roundResultDisplay.textContent = 'Choose your weapon!';
        resetWeaponButtons();
        humanChoice = '';
        gameHistory.cleanHistory();
    };

    resetGameBtn.addEventListener('click', resetGame);

    document.addEventListener('keydown', (e) => {
        switch (e.key.toLowerCase()) {
            case 'r':
                dom.rockBtn.click();
                breaks;
            case 'p':
                dom.paperBtn.click();
                break;
            case 's':
                dom.scissorsBtn.click();
                break;
            case 'escape':
                dom.resetGameBtn.click();
                break;
        }
    });


}





// playGame();

