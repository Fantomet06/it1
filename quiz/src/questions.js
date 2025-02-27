// Henter elementer
let quizEl = document.querySelector("#quiz");
let resultatEl = document.querySelector("#resultat");

let currentQuestion = 0;

//let game_running = true;

let quiz = [
  { sporsmaal: "Jesper og Ola skal dele 1/2 liter brus likt. Hvor mange liter blir det på hver?",
    alternativer: ["1", "1/2", "1/3", "1/4", "1/5", "1/6"],
    fasit: "1/4"},
  { sporsmaal: "Iben var 27 år i 2011. Hvor gammel var hun i 2003? ",
    alternativer: ["17", "37", "20", "19"],
    fasit: "19"},
  { sporsmaal: "Hva er kvadratroten av 169?",
    alternativer: ["1", "13", "169", "338"],
    fasit: "13"}
];

function newQuestion() {
  let sporsmaal = document.createElement("div");

  sporsmaal.innerHTML = `
    <h3 class='sporsmaal'>${quiz[currentQuestion].sporsmaal}</h3>
  `

  sporsmaal.innerHTML += `<form action="/action_page.php">`

  //legg til svaraldernativene
  for (let x = 0; x < quiz[currentQuestion]["alternativer"].length; x++) {
    sporsmaal.innerHTML += `
      <input type="radio" name="question${currentQuestion}" value="${quiz[currentQuestion].alternativer[x]}">${quiz[currentQuestion].alternativer[x]}<br>
    `
  }

  sporsmaal.innerHTML += `
    <br><button onclick="checkAnswer()">Sjekk svar</button>
    </form>
  `

  quizEl.appendChild(sporsmaal);
}

newQuestion();
currentQuestion++;
newQuestion();