import axios from "axios";
export default {
  // Gets all quizes
  getQuizes: function() {
    return axios.get("/api/quizzes").then(datafromdb => {
      console.log("this is data from the db ", datafromdb);
      var testingMakeQuizObject = makeQuizObjs(datafromdb);
      console.log("testing var make quizqobj", testingMakeQuizObject);
      return testingMakeQuizObject;
    });
  },
  // Gets the quiz  with the given id
  getQuiz: function(id) {
    return axios.get("/api/quizzes/" + id);
  },
  // Deletes the quiz with the given id
  deleteQuiz: function(id) {
    return axios.delete("/api/quizzes/" + id);
  },
  // Saves a quiz to the database
  saveQuiz: function(quizData) {
    return axios.post("/api/quizzes", quizData);
  }
};
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const makeQuizObjs = json => {
  var correctQuestions = json.data.map(question => {
    const q = {
      question: decodeURIComponent(question.question),
      choices: question.incorrect_answers.map(c => decodeURIComponent(c))
    };
    const correct_answer_index = Math.floor(
      Math.random() * (q.choices.length - 1) + 1
    );
    q.choices.splice(
      correct_answer_index,
      0,
      decodeURIComponent(question.correct_answer)
    );
    q.correctChoice = correct_answer_index;
    return q;
  });
  return shuffle(correctQuestions);
};
