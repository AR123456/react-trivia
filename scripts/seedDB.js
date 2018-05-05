const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

//This file will empty the collection and insert below

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost/reacttrivia"
    // {
    //   useMongoClient: true
    // }
  )
  .then(() => {
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
  });

const quizSeed = [
  {
    category: "Mine",
    type: "multiple",
    difficulty: "medium",
    question:
      "During muscular contraction, which section of the sarcomere does not move?",
    correct_answer: "H-zone",
    incorrect_answers: [" A-band", "M-line", "I-band"],
    date: new Date(Date.now())
  },
  {
    category: "Mine",
    type: "multiple",
    difficulty: "medium",
    question:
      "What does the sarcoplasmic reticulum store that is significant for muscular contraction?",
    correct_answer: "ATP",
    incorrect_answers: ["Sodium/potassium", "Calcium ions", "Glycogen"],
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
      "Where in a muscle are essential elements of muscular contraction (i.e., glycogen, fat, mitochondria) located?",
    correct_answer: "Sarcoplasm",
    incorrect_answers: ["Sarcoplasm", "Sarcolemma", "Sarcoplasmic reticulum"],
    date: new Date(Date.now())
  },
  {
    category: "Mine",
    type: "multiple",
    difficulty: "medium",
    question:
      "What substance is involved in muscular contraction at the neuromuscular junction?",
    correct_answer: "Acetylcholine",
    incorrect_answers: ["Epinephrine", "Serotonin", "Creatine phosphate"],
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
      "Which of the following components of mechanical load is the LEAST important for stimulating new bone formation?",
    correct_answer: "rest period",
    incorrect_answers: ["magnitude", "rate of loading", "nutrition"],
    date: new Date(Date.now())
  },
  {
    category: "Mine",
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
    category: "Mine",
    type: "multiple",
    difficulty: "medium",
    question:
      " What is the MINIMUM amount of carbohydrates that a 132-lb (60-kg) competitive Olympic triathlete should consume on a daily basis?",
    correct_answer: "480 g",
    incorrect_answers: ["120 g", "960 g", "60 g"],
    date: new Date(Date.now())
  },
  {
    category: "Mine",
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
    category: "Mine",
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
