// Henter elementer
let quizEl = document.querySelector("#quiz");
let resultatEl = document.querySelector("#resultat");
let mainEl = document.querySelector("#main");

let currentQuestion = 0;
let quiz = [];

//Initialiserer quiz - lagrer quizData i global quiz variabel
export function initialize(quizData) {
  quiz = quizData;
  addQuestion();
}

function checkAnswer() {
  let radios = document.querySelectorAll("input[type='radio']");

  let correct = 0;

  // looper gjennom alle radio knappene
  for (let x = 0; x < radios.length; x++) {
    if (radios[x].checked) { // er den valgt, sjekk om riktig
      if (radios[x].value === quiz[radios[x].name].fasit) {
        correct++;
        radios[x].parentNode.style.color = "green";
      } else {
        radios[x].parentNode.style.color = "red";
      }
    }
    // deaktiverer ALLE radio knapper
    radios[x].disabled = true;
  }
  
  resultatEl.innerHTML = `Du fikk ${correct} av ${quiz.length} riktig!`;

  let new_quiz = document.createElement("button");
  new_quiz.textContent = "Ny quiz";
  new_quiz.onclick = function() {
    window.location.reload();
  }
  mainEl.appendChild(new_quiz); //legger til ny quiz knapp
  document.getElementById("checkAnswer").remove(); //fjerner sjekk svar
}

function newQuestion() {
  //hvis jeg prøver å gå tilbake til et spørsmål som allerede er besvart
  

  // hvis jeg er på siste spørsmål, legg til sjekk svar knapp
  if (quiz.length === currentQuestion + 1) {
    if (document.getElementById("checkAnswer")) {
      return
    }

    let button = document.createElement("button");
    button.textContent = "Sjekk svar";
    button.id = "checkAnswer";
    button.onclick = checkAnswer;
    return mainEl.appendChild(button);
  }

  currentQuestion++;
  addQuestion();
}

function addQuestion() {
  // lager div for spørsmål
  let sporsmaal = document.createElement("div");
  sporsmaal.className = "grid-container";

  // legg til spørsmålet
  sporsmaal.innerHTML = `
    <h3 style="grid-area: 1 / 1 / 2 / 3;" class='sporsmaal'>${quiz[currentQuestion].sporsmaal}</h3>
  `
  //legg til svaralternativene
  for (let x = 0; x < quiz[currentQuestion]["alternativer"].length; x++) {
    sporsmaal.innerHTML += `
    <div class="grid-${x}">
      <input id="${currentQuestion}${x}" type="radio" name="${currentQuestion}" value="${quiz[currentQuestion].alternativer[x]}">
      <label for="${currentQuestion}${x}">${quiz[currentQuestion].alternativer[x]}</label>
    </div>
    `
  }

  quizEl.appendChild(sporsmaal);
}

//hvis en radio knapp endres så kall newQuestion
quizEl.addEventListener("change", function(event) {
  if (currentQuestion > event.target.name) {
    return
  }

  if (event.target.type === "radio") {
    newQuestion();
  }
});

