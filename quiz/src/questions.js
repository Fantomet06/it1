// Henter elementer
let quizEl = document.querySelector("#quiz");
let resultatEl = document.querySelector("#resultat");
let mainEl = document.querySelector("#main");

let currentQuestion = 0;

let quiz = [];

async function getQuizData(url) {
  /*
  const response = await fetch(url);
  if (response.status != 200) {
    //gi tilbakemelding til bruker
    alert("Feil når jeg hentet spørsmålene");
    return [];
  }

  const data = await response.json();
  const quizData = [];

  for (let result of data["results"]) {
    quizData.push({
      sporsmaal: result.question,
      alternativer: [...result.incorrect_answers, result.correct_answer].sort(() => Math.random() - 0.5),
      fasit: result.correct_answer
    });
  }
    */
  const quizData = [
    {
      sporsmaal: "Hva er hovedstaden i Norge?",
      alternativer: ["Oslo", "Bergen", "Trondheim", "Stavanger"],
      fasit: "Oslo"
    },
    {
      sporsmaal: "Hva er hovedstaden i Sverige?",
      alternativer: ["Oslo", "Stockholm", "København", "Helsingfors"],
      fasit: "Stockholm"
    },
    {
      sporsmaal: "Hva er hovedstaden i Danmark?",
      alternativer: ["Oslo", "Stockholm", "København", "Helsingfors"],
      fasit: "København"
    },
    {
      sporsmaal: "Hva er hovedstaden i Finland?",
      alternativer: ["Oslo", "Stockholm", "København", "Helsingfors"],
      fasit: "Helsingfors"
    },
    {
      sporsmaal: "Hva er hovedstaden i Island?",
      alternativer: ["Oslo", "Stockholm", "København", "Reykjavik"],
      fasit: "Reykjavik"
    }
  ];
  
  return quizData;
}

//Henter spørsmålene fra Quiz-database-API
async function startQuiz() {
  quiz = await getQuizData(
    `https://opentdb.com/api.php?amount=5&category=16&difficulty=easy`
  );

  if (quiz.length > 0) {
    currentQuestion = 0;
    alert("Quiz lastet inn");
    console.log(quiz[0].sporsmaal);
    addQuestion(quiz);
  }
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
  }
  
  resultatEl.innerHTML = `Du fikk ${correct} av ${quiz.length} riktig!`;
  let new_quiz = document.createElement("button");
  new_quiz.textContent = "Ny quiz";
  new_quiz.onclick = function() {
    window.location.reload();
  }
  mainEl.appendChild(new_quiz);
}

function newQuestion(changedQuestion) {
  if (currentQuestion > changedQuestion) {
    return
  }

  if (quiz.length === currentQuestion + 1) {
    let buttonEl = document.querySelector("button");

    if (buttonEl) {
      return
    }

    let button = document.createElement("button");
    button.textContent = "Sjekk svar";
    button.onclick = checkAnswer;
    mainEl.appendChild(button);
  }

  currentQuestion++;
  addQuestion();
}

function addQuestion() {
  let sporsmaal = document.createElement("div");

  console.log(quiz[0].sporsmaal);
  sporsmaal.innerHTML = `
    <h3 class='sporsmaal'>${quiz[0].sporsmaal}</h3>
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

startQuiz();