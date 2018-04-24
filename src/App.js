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
      score: 0
    };

    this.handleClickNext = this.handleClickNext.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.getNewQuiz = this.getNewQuiz.bind(this);
  }

  getNewQuiz() {
    quizClient.getQuizes().then(questions => {
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

  render() {
    const nextQuestion =
      this.state.currQuestion < this.state.questions.length - 1;
    const question = this.state.questions[this.state.currQuestion];
    const score = this.state.score;
    const questionNumber = this.state.currQuestion + 1;
    return (
      <div className="App">
        <Welcome />
        <Selection />
        <div className="App-header">
          <h2>
            This on click will start the game , need to put the category and
            difficulty selections above the start game. Start game makes the API
            call{" "}
          </h2>
          <button className="btn btn-default" onClick={this.Quiz}>
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
