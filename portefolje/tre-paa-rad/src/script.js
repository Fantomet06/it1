const boardEl = document.getElementById("board");
const statusEl = document.getElementById("status");
let currentPlayer = "X";
let cells = ["", "", "", "", "", "", "", "", ""]; // Array for å holde styr på cellene
let gameActive = true;

function createBoard() {
  boardEl.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    cell.addEventListener("click", cellClick);
    boardEl.appendChild(cell);
  }
}

function cellClick(e) {
  const index = e.target.dataset.index;
  
  console.log(`Cell clicked: ${index}, Current Player: ${currentPlayer}`);
  if (!gameActive) return; // hvis spillet er ferdig så gjør ingenting

  cells[index] = currentPlayer; // SETTER DEN CELLEN TIL TATT


  e.target.textContent = currentPlayer;
  e.target.classList.add("taken");
  e.target.removeEventListener("click", cellClick); //fjerner eventlisteren

  let winnerFound = checkWinner();
  if (winnerFound || cells.every(cell => cell)) {
    statusEl.textContent = winnerFound ? `Spiller ${currentPlayer} vinner!` : "Uavgjort!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "Y" : "X";
  statusEl.textContent = `Spiller ${currentPlayer} sin tur`;
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let i = 0; i < winPatterns.length; i++) {
    const [a, b, c] = winPatterns[i];
    if (cells[a] === currentPlayer && cells[b] === currentPlayer && cells[c] === currentPlayer) {
      [a, b, c].forEach(index => {
        document.querySelector(`.cell[data-index="${index}"]`).style.backgroundColor = "green"; // Farge cellene som vant
      });
      return true;
    }
  }
}

function resetGame() {
  currentPlayer = "X";
  for (let i = 0; i < cells.length; i++) { cells[i] = ""; } // RESETTER CELLS
  gameActive = true; 
  statusEl.textContent = `Spiller ${currentPlayer} sin tur`;
  createBoard();
}

createBoard();