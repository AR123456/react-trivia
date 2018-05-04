import axios from "axios";

export default {
  // Gets all quizes
  getQuizes: function() {
    return axios.get("/api/quizzes");
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
// const makeQuizObjs = json => {
//   return json.results.map(question => {
//     const q = {
//       question: decodeURIComponent(question.question),
//       choices: question.incorrect_answers.map(c => decodeURIComponent(c))
//     };
//     const correct_answer_index = Math.floor(
//       Math.random() * (q.choices.length - 1) + 1
//     );
//     q.choices.splice(
//       correct_answer_index,
//       0,
//       decodeURIComponent(question.correct_answer)
//     );
//     q.correctChoice = correct_answer_index;
//     return q;
//   });
// };
