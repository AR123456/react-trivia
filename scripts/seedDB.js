const mongoose = require("mongoose");
const db = require("../modles");
mongoose.Promise = global.Promise;

//This file will empty the collection and insert below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb:// localhost/reacttrivia",
  {
    useMongoClient: true
  }
);
const quizSeed = [
  {
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In a standard game of Monopoly, what colour are the two cheapest properties?",
    correct_answer: "Brown",
    incorrect_answers: ["Green", "Yellow", "Blue"],
    date: new Date(Date.now())
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "What was William Frederick Cody better known as?",
    correct_answer: "Buffalo Bill",
    incorrect_answers: ["Billy the Kid", "Wild Bill Hickok", "Pawnee Bill"],
    date: new Date(Date.now())
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question:
      "&quot;Some people call me the space cowboy&quot; is the first line from what song?",
    correct_answer: "The Joker",
    incorrect_answers: [
      "Fandango",
      "Take The Money and Run",
      "Fly Like an Eagle"
    ],
    date: new Date(Date.now())
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Area 51 is located in which US state?",
    correct_answer: "Nevada",
    incorrect_answers: ["Arizona", "New Mexico", "Utah"],
    date: new Date(Date.now())
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What video game sparked controversy because of its hidden &quot;Hot Coffee&quot; minigame?",
    correct_answer: "Grand Theft Auto: San Andreas",
    incorrect_answers: [
      "Grand Theft Auto: Vice City",
      "Hitman: Blood Money",
      "Cooking Mama"
    ],
    date: new Date(Date.now())
  },
  {
    category: "CSCS",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following components of mechanical load is the LEAST important for stimulating new bone formation?",
    correct_answer: "rest period",
    incorrect_answers: ["magnitude", "rate of loading", "nutrition"],
    date: new Date(Date.now())
  },
  {
    category: "CSCS",
    type: "multiple",
    difficulty: "medium",
    question:
      "When running, which of the following contributes the MOST to minimizing the braking effect of a heel foot strike?",
    correct_answer: "concentric hip extension",
    incorrect_answers: [
      "eccentric hip flexion",
      "eccentric knee extension",
      "hamstring contraction"
    ],
    date: new Date(Date.now())
  },
  {
    category: "CSCS",
    type: "multiple",
    difficulty: "medium",
    question:
      " What is the MINIMUM amount of carbohydrates that a 132-lb (60-kg) competitive Olympic triathlete should consume on a daily basis?",
    correct_answer: "480 g",
    incorrect_answers: ["120 g", "960 g", "60 g"],
    date: new Date(Date.now())
  },
  {
    category: "CSCS",
    type: "multiple",
    difficulty: "medium",
    question:
      "An untrained college-aged athlete begins a resistance training program. After training for three weeks, her strength increases dramatically. Which of the following is the most influential factor responsible for this improvement?",
    correct_answer: "improved neuromuscular efficiency",
    incorrect_answers: [
      " decreased cross-sectional area of Type I fibers",
      " increased number of muscle fibers",
      "imporved VO2 max"
    ],
    date: new Date(Date.now())
  },
  {
    category: "CSCS",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following shoulder movements and planes of motion are associated with the upward movement phase of the side lateral shoulder raise exercise?",
    correct_answer: "abduction/frontal",
    incorrect_answers: [
      "abduction/sagittal",
      "flexion/transverse",
      "flexion/sagittal"
    ],
    date: new Date(Date.now())
  }
];
db.Quiz.remove({})
  .then(() => db.Quiz.collection.insertMany(quizSeed))
  .then(data => {
    console.log(data.insertedIds.length + "records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
