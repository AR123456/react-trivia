const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  category: { type: String, required: true },
  type: { type: String, required: true },
  difficulty: { type: String, required: true },
  question: { type: String, required: true },
  correct_answer: { type: String, required: true },
  incorrect_answers: [{ type: String, required: true }],
  date: { type: Date, default: Date.now }
});

const Quiz = mongoose.model("Quizes", quizSchema);

module.exports = Quiz;
