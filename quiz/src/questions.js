// Henter elementer
let quizEl = document.querySelector("#quiz");
let resultatEl = document.querySelector("#resultat");

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

for (let i = 0; i < quiz.length; i++) {
  let sporsmaal = document.createElement("div");

  sporsmaal.innerHTML = `
    <h3 class='sporsmaal'>${quiz[i].sporsmaal}</h3>
  `

  //legg til svaraldernativene
  for (let x = 0; x < quiz[i]["alternativer"].length; x++) {

    sporsmaal.innerHTML += `
      <p>${quiz[i].alternativer[x]}</p>
    `

  }
  quizEl.appendChild(sporsmaal);
}

