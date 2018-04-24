import React, { Component } from "react";
import Question from "./components/Question";
import Scoreboard from "./components/Scoreboard";
import quizClient from "./utils/quizClient";
import ReactCSSTransitionReplace from "react-css-transition-replace";
import "./App.css";
import Welcome from "./components/Welcome";
import Selection from "./components/Selection";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currQuestion: 0,
      score: 0,
      quizCategoryID: 0,
      quizDifficulty: "easy"
    };

    this.handleClickNext = this.handleClickNext.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.getNewQuiz = this.getNewQuiz.bind(this);
    this.handleDifficultySelected = this.handleDifficultySelected.bind(this);
    this.handleCategorySelected = this.handleCategorySelected.bind(this);
  }

  getNewQuiz() {
    quizClient
      .getQuizes(this.state.quizCategoryID, this.state.quizDifficulty)
      .then(questions => {
        this.setState({ questions: questions, score: 0, currQuestion: 0 });
      });
  }

  componentDidMount() {
    this.getNewQuiz();
  }

  handleClickNext() {
    this.setState({ currQuestion: this.state.currQuestion + 1 });
  }

  updateScore(correct) {
    if (correct) this.setState({ score: this.state.score + 1 });
  }
  handleCategorySelected(e) {
    console.log("picked a cat", e.target.value);
    this.setState({ quizCategoryID: e.target.value });
  }
  handleDifficultySelected(e) {
    console.log("picked a difficulty", e.target.value);
    this.setState({ quizDifficulty: e.target.value });
  }

  render() {
    console.log("this is the state", this.state);

    const nextQuestion =
      this.state.currQuestion < this.state.questions.length - 1;
    const question = this.state.questions[this.state.currQuestion];
    const score = this.state.score;
    const questionNumber = this.state.currQuestion + 1;

    return (
      <div className="App">
        <Welcome />
        <Selection
          handleCategorySelected={this.handleCategorySelected}
          handleDifficultySelected={this.handleDifficultySelected}
        />
        <div className="App-header">
          <h2>
            This on click will start the game , need to put the category and
            difficulty selections above the start game. Start game makes the API
            call{" "}
          </h2>
          <button className="btn btn-default" onClick={this.getNewQuiz}>
            Get New Quiz
          </button>
        </div>
        <div className="App-body">
          <Scoreboard
            score={score}
            questionNumber={questionNumber}
            questionAmount={this.state.questions.length}
          />
          {question ? (
            <ReactCSSTransitionReplace transitionName="carousel-swap">
              <Question
                key={questionNumber}
                question={question.question}
                choices={question.choices}
                correctChoice={question.correctChoice}
                nextQuestion={nextQuestion}
                handleClickNext={this.handleClickNext}
                updateScore={this.updateScore}
              />
            </ReactCSSTransitionReplace>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
