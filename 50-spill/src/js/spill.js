function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

const turn = document.querySelector('#turn')

const button1 = document.querySelector('#player1_button')
const score1 = document.querySelector('#player1_score')

button1.addEventListener('click', () => {
    if (turn.textContent.includes("1")) {
        turn.textContent = "Spiller 2 sin tur"
        score1.textContent = parseInt(score1.textContent) + getRandomNumber();
    } else {
        alert("Det er ikke din tur!")
    }

    if (parseInt(score1.textContent) >= 50) {
        alert("Spiller 1 vant!")
    }
});

const button2 = document.querySelector('#player2_button')
const score2 = document.querySelector('#player2_score')

button2.addEventListener('click', () => {
    if (turn.textContent.includes("2")) {
        turn.textContent = "Spiller 1 sin tur"
        score2.textContent = parseInt(score2.textContent) + getRandomNumber();
    } else {
        alert("Det er ikke din tur!")
    }

    if (parseInt(score2.textContent) >= 50) {
        alert("Spiller 2 vant!")
    }
});