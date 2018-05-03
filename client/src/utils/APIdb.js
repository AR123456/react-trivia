// const url =
//   "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple&encode=url3986";
//build API url

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

// export default {
//   getQuizes: (id, difficulty) => {
//     const url =
//       "https://opentdb.com/api.php?amount=10" +
//       "&category=" +
//       id +
//       "&difficulty=" +
//       difficulty +
//       "&type=multiple&encode=url3986";
//     return fetch(url)
//       .then(res => res.json())
//       .then(json => makeQuizObjs(json));
//   }
// };

//This will need to be changed over to   axios  when db is working  here is some example code from the book exercise- back end routing

import axios from "axios";

export default {
  // Gets all quizes
  getQuizes: function() {
    return axios.get("/api/quizes");
  },
  // Gets the quiz  with the given id
  getQuiz: function(id) {
    return axios.get("/api/quizes/" + id);
  },
  // Deletes the quiz with the given id
  deleteQuiz: function(id) {
    return axios.delete("/api/quizes/" + id);
  },
  // Saves a quiz to the database
  saveQuiz: function(quizData) {
    return axios.post("/api/quizes", quizData);
  }
};
