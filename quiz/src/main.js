import { getQuizData } from "./api.js";
import { initialize } from "./questions.js";

let quizEl = document.querySelector("#quiz");
let resultatEl = document.querySelector("#resultat");
let mainEl = document.querySelector("#main");

let quiz = [];
//Henter quiz data from API
async function startQuiz(category, amount) {
    quiz = await getQuizData(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}`
    );
  
    if (quiz.length > 0) {
        quizEl.innerHTML = "";
        initialize(quiz);
    }
}

quizEl.innerHTML = `
    <form id="quizForm">
        <label for="categories">Velg kategori: </label>
        <select name="category" id="categories">
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals & Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science & Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Entertainment: Japanese Anime & Manga</option>
            <option value="32">Entertainment: Cartoon & Animations</option>
        </select>
        <br><br>
        <label for="amount">Antall spørsmål: </label>
        <input type="range" id="amount" name="amount" min="1" max="50" value="5" oninput="this.nextElementSibling.value = this.value">
        <output>5</output>
        <br><br>
        <input type="submit" value="Start quiz">
    </form>
`;

document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const selectedCategory = document.getElementById("categories").value;
    const amount = document.getElementById("amount").value;
    startQuiz(selectedCategory, amount);
});