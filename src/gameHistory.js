export class GameHistory {

    constructor() {
        this.history = [];
    }

    addRound(playerChoice, computerChoice, result) {
        this.history.unshift({
            playerChoice,
            computerChoice,
            result,
            timestamp: new Date()
        });

        this.updateUI(this.history[0]);
    }

    updateUI(newHistory) {
        const historyContainer = document.getElementById('history-list');


        const div = document.createElement('div');
        div.classList.add('history-item');
        div.classList.add('card', 'glass-effect');

        const span_text = document.createElement('p');
        span_text.classList.add('history-item-text');
        span_text.textContent = newHistory.playerChoice + " vs " + newHistory.computerChoice;
        div.appendChild(span_text);

        const span_result = document.createElement('span');
        span_result.textContent = newHistory.result;
        span_result.classList.add(this.getResultClass(newHistory.result));

        div.appendChild(span_result);
        historyContainer.appendChild(div);



    }

    getResultClass(result) {
        if (result.includes('win')) return 'win-history-text';
        if (result.includes('lose')) return 'lose-history-text';
        return 'tie-history-text';
    }

    cleanHistory() {
        this.history = []
        const historyContainer = document.getElementById('history-list');
        historyContainer.innerHTML = '';


    }
}