import { getRandomNumber } from './randomNum.js';

// -- ELEMENTS --
const scoreElements = document.querySelectorAll('#score');
const playerDivs = document.querySelectorAll('#player');
const turnElement = document.querySelector('#turn');


let activePlayer = 0;
let playerCount = 2;


// -- BTNS --
const diceBtn = document.querySelector('#dice');
const restartBtn = document.querySelector('#restart');



diceBtn.addEventListener('click', () => {
    let newScore = parseInt(scoreElements[activePlayer].textContent) + getRandomNumber();

    if (newScore > 50) { 
        newScore = 50 - (newScore - 50); 
    }

    scoreElements[activePlayer].textContent = newScore;

    if (newScore === 50) {
        turnElement.textContent = `Spiller ${activePlayer + 1} vant!`;
        return diceBtn.disabled = true;
    }

    activePlayer = parseInt((activePlayer + 1) % playerCount);
    playerDivs.forEach((div, i) => { div.classList.toggle('active', i === activePlayer) })

    turnElement.textContent = `Spiller ${activePlayer + 1} sin tur`;    
});


restartBtn.addEventListener('click', () => {
    scoreElements.forEach((element) => { element.textContent = 0 });
    activePlayer = 0;
    playerDivs.forEach((div, i) => { div.classList.toggle('active', i === activePlayer) });
    turnElement.textContent = `Spiller ${activePlayer + 1} sin tur`;
    diceBtn.disabled = false;
});