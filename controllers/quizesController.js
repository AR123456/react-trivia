const db = require("../models");

// Defining methods for the Controller
module.exports = {
  findAll: function(req, res) {
    db.Quiz.find(req.query)
      .sort({ date: -1 })
      .then(dbQuiz => res.json(dbQuiz))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Quiz.findById(req.params.id)
      .then(dbQuiz => res.json(dbQuiz))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Quiz.create(req.body)
      .then(dbQuiz => res.json(dbQuiz))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Quiz.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbQuiz => res.json(dbQuiz))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Quiz.findById({ _id: req.params.id })
      .then(dbQuiz => dbQuiz.remove())
      .then(dbQuiz => res.json(dbQuiz))
      .catch(err => res.status(422).json(err));
  }
};
