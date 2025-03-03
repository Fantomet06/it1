export async function getQuizData(url) {
    
    const response = await fetch(url);
    if (response.response_code === 1) {
      //gi tilbakemelding til bruker
      return alert("Ikke nok spørsmål i denne kategorien");
    }
    if (response.status != 200) {
      //gi tilbakemelding til bruker
      return alert("Feil når jeg hentet spørsmålene");
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
    /*
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
    */
    
    return quizData;
  }