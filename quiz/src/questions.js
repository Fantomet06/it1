// Henter elementer
let quizEl = document.querySelector("#quiz");
let resultatEl = document.querySelector("#resultat");
let mainEl = document.querySelector("#main");

let currentQuestion = 0;
let quiz = [];

export function initialize(quizData) {
  quiz = quizData;
  console.log(quiz);
  addQuestion();
}

function checkAnswer() {
  let radios = document.querySelectorAll("input[type='radio']");

  let correct = 0;

  for (let x = 0; x < radios.length; x++) {
    if (radios[x].checked) {
      if (radios[x].value === quiz[radios[x].name].fasit) {
        correct++;
        radios[x].parentNode.style.color = "green";
      } else {
        radios[x].parentNode.style.color = "red";
      }
    }
    radios[x].disabled = true;
  }
  
  resultatEl.innerHTML = `Du fikk ${correct} av ${quiz.length} riktig!`;
  let new_quiz = document.createElement("button");
  new_quiz.textContent = "Ny quiz";
  new_quiz.onclick = function() {
    window.location.reload();
  }
  mainEl.appendChild(new_quiz);
  document.getElementById("checkAnswer").remove();
}

function newQuestion(changedQuestion) {
  if (currentQuestion > changedQuestion) {
    return
  }

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
  let sporsmaal = document.createElement("div");

  sporsmaal.innerHTML = `
    <h3 class='sporsmaal'>${quiz[currentQuestion].sporsmaal}</h3>
  `

  sporsmaal.innerHTML += `<form action="/action_page.php">`

  //legg til svaraldernativene
  for (let x = 0; x < quiz[currentQuestion]["alternativer"].length; x++) {
    sporsmaal.innerHTML += `
      <input type="radio" name="${currentQuestion}" value="${quiz[currentQuestion].alternativer[x]}">${quiz[currentQuestion].alternativer[x]}<br>
    `
  }

  sporsmaal.innerHTML += `
    </form>
  `

  quizEl.appendChild(sporsmaal);
}

quizEl.addEventListener("change", function(event) {
  if (event.target.type === "radio") {
    newQuestion(event.target.name);
  }
});

