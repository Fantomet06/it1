import { getQuizData } from "./api.js";
import { initialize } from "./questions.js";

let quizEl = document.querySelector("#quiz");
let resultatEl = document.querySelector("#resultat");
let mainEl = document.querySelector("#main");

let quiz = [];
//Henter quiz data from API
async function startQuiz() {
    quiz = await getQuizData(
      `https://opentdb.com/api.php?amount=5&category=16&difficulty=easy`
    );
  
    if (quiz.length > 0) {
        quizEl.innerHTML = "";
        initialize(quiz);
    }
}

quizEl.innerHTML = `
    <form action="/action_page.php">
        <label for="cars">Choose a car:</label>
        <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
        </select>
        <br><br>
        <input type="submit" value="Submit">
    </form>

    <button id="start">Start quiz</button>
`
document.getElementById("start").addEventListener("click", startQuiz);
