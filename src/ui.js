export function updateComputerChoice(computerChoice, computerChoiceDisplay, computerIcon) {
    const iconMap = {
        rock: 'fas fa-hand-rock',
        paper: 'fas fa-hand-paper',
        scissors: 'fas fa-hand-scissors'
    };
    computerChoiceDisplay.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    computerIcon.removeAttribute('class');
    
    computerIcon.setAttribute('class', iconMap[computerChoice]);
    computerIcon.classList.add('spin-animation');

    setTimeout(() => {
        computerIcon.classList.remove('spin-animation');
    }, 300); 
}

export function updateScoreDisplay(scoreDisplay) {

        scoreDisplay.parentElement.classList.add('pulse-animation', 'updated');
    setTimeout(() => {
        scoreDisplay.parentElement.classList.remove('pulse-animation', 'updated');
    }, 1000);
}


export function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const shapes = ['', 'circle', 'triangle', 'square'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.opacity = Math.random() * 0.8 + 0.2;

        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        if (shape === 'circle') {
            confetti.style.borderRadius = '50%';
        }

        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}

export function showModal(type) {
    const modal = document.getElementById(`${type}-modal`);
    modal.classList.remove('hidden');
    if (type === 'victory') createConfetti();
}