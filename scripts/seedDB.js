const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

//This file will empty the collection and insert below

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/reacttrivia")
  .then(() => {
    db.Quiz.remove({})
      .then(() => db.Quiz.collection.insertMany(quizSeed))
      .then(data => {
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });
  });

const quizSeed = [
  {
    category: "Mine",
    type: "multiple",
    difficulty: "medium",
    question: "What is the highest mountain in Colorado?",
    correct_answer: "Mt. Elbert",
    incorrect_answers: ["Pikes Peak", "Mt Massive", "Longs Peak"],
    date: new Date(Date.now())
  },
  {
    category: "Mine",
    type: "multiple",
    difficulty: "medium",
    question:
      "What Colorado city was known as 'the richest square mile on Earth'?",
    correct_answer: "Central City",
    incorrect_answers: ["Boulder", "Denver", "Blackhawk"],
    date: new Date(Date.now())
  },
  {
    category: "Mine",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
    correct_answer: "John and Mary",
    incorrect_answers: [
      "William and Elizabeth",
      "Joseph and Catherine",
      "George and Anne"
    ],
    date: new Date(Date.now())
  },
  {
    category: "Mine",
    type: "multiple",
    difficulty: "medium",
    question: "When did the Liberty Bell get its name?",
    correct_answer:
      "in the 19th century, when it became a symbol of the abolition of slavery",
    incorrect_answers: [
      "when it was made, in 1701",
      "when it rang on July 4, 1776",
      "none of the above"
    ],
    date: new Date(Date.now())
  },
  {
    category: "Mine",
    type: "multiple",
    difficulty: "medium",
    question: "What type of candy originated in Golden, Colorado?",
    correct_answer: "Jolly Ranchers",
    incorrect_answers: ["gold rocks bubblegum", "Wax Lips", "Dots"],
    date: new Date(Date.now())
  },
  {
    category: "Mine",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the proper orientation for blood pressure notation, and what is considered normal blood pressure?",
    correct_answer: "Systole/Diastole; 120/80",
    incorrect_answers: [
      "Systole/Diastole; 80/120",
      "Systole/Diastole; 80/120",
      "Diastole/Systole; 120/80"
    ],
    date: new Date(Date.now())
  },
  {
    category: "Mine",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?",
    correct_answer: "Buttermilk",
    incorrect_answers: ["Daisy", "Scout", "Tulip"],
    date: new Date(Date.now())
  },
  {
    category: "Mine",
    type: "multiple",
    difficulty: "medium",
    question:
      "Daniel Boon museum at the home where he died can best be described how?",
    correct_answer: "a four-story Georgian-style home in Missouri",
    incorrect_answers: [
      "a log cabin in Kentucky",
      "a two-story clapboard house in Tennessee",
      "a three story brick house in Arkansas"
    ],
    date: new Date(Date.now())
  },
  {
    category: "Mine",
    type: "multiple",
    difficulty: "medium",
    question: "What connective tissue attaches a muscle to a bone?",
    correct_answer: "tendon",
    incorrect_answers: ["cartilage", "ligament", "myocyte"],
    date: new Date(Date.now())
  },
  {
    category: "Mine",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following items was owned by the fewest U.S. homes in 1990?",
    correct_answer: "compact disk player",
    incorrect_answers: ["home computer", "cordless phone", "dishwasher"],
    date: new Date(Date.now())
  },
  {
    category: "Mine",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who holds the record for the most victories in a row on the professional golf tour?",
    correct_answer: "Byron Nelson",
    incorrect_answers: ["Jack Nicklaus", "Arnold Palmer", "Ben Hogan"],
    date: new Date(Date.now())
  },
  {
    category: "Mine",
    type: "multiple",
    difficulty: "medium",
    question:
      " During the 1980s for six consecutive years what breed of dog was the most popular in the U.S.?",
    correct_answer: "cocker spaniel",
    incorrect_answers: ["German shepherd", "Labrador retriever", "poodle"],
    date: new Date(Date.now())
  },
  {
    category: "Mine",
    type: "multiple",
    difficulty: "medium",
    question:
      "Before becoming George Bush's Secretary of Defense, what was Dick Cheney's position?",
    correct_answer: "congressman from Wyomingy",
    incorrect_answers: [
      "governor of New Hampshire",
      "secretary of defense under Ronald Reagan",
      "hunter safety instructor "
    ],
    date: new Date(Date.now())
  },
  {
    category: "Mine",
    type: "multiple",
    difficulty: "medium",
    question:
      "Florence Nightingale became known as 'the Lady With the Lamp' during which war?",
    correct_answer: "Crimean War",
    incorrect_answers: ["American Civil War", "World War I", "World War II"],
    date: new Date(Date.now())
  }
];
