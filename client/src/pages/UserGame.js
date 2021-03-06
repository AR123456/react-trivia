import React, { Component } from "react";
import Question from "../components/Question";
import Scoreboard from "../components/ScoreBoard";
import quizClient from "../utils/APIdb";
import ReactCSSTransitionReplace from "react-css-transition-replace";
import "../App.css";

import Selection from "../components/UserSelection";

class UserGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currQuestion: 0,
      secondsLeft: 30,
      score: 0,
      quizCategoryID: 0,
      quizDifficulty: "easy",
      ticker: "",
      gameIsOver: false
    };

    this.handleClickNext = this.handleClickNext.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.getNewQuiz = this.getNewQuiz.bind(this);
    this.handleDifficultySelected = this.handleDifficultySelected.bind(this);
    this.handleCategorySelected = this.handleCategorySelected.bind(this);
    this.setGameOver = this.setGameOver.bind(this);
  }

  tickSeconds = () => {
    if (this.state.secondsLeft === 0) {
      console.log("timer is at 0", this.state.secondsLeft);
      this.handleClickNext();
    } else {
      this.setState({ secondsLeft: this.state.secondsLeft - 1 });
    }
  };

  getNewQuiz() {
    quizClient
      .getQuizes(this.state.quizCategoryID, this.state.quizDifficulty)
      .then(questions => {
        if (this.state.ticker) clearInterval(this.state.ticker);
        let ticker = setInterval(this.tickSeconds, 1000);
        this.setState({
          questions: questions,
          secondsLeft: 30,
          score: 0,
          currQuestion: 0,
          ticker: ticker,
          gameIsOver: false
        });
      });
  }
  componentDidMount() {}

  handleClickNext() {
    console.log("this is the curent number", this.state.currQuestion);
    this.setState({ currQuestion: this.state.currQuestion + 1 });
    this.setState({ secondsLeft: 30 });
  }
  updateScore(correct) {
    this.setState({ secondsLeft: 0 });
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
  setGameOver() {
    this.setState({ gameIsOver: true });
  }
  render() {
    // console.log("this is the state", this.state);
    const nextQuestion =
      this.state.currQuestion < this.state.questions.length - 1;
    const question = this.state.questions[this.state.currQuestion];
    const score = this.state.score;
    const questionNumber = this.state.currQuestion + 1;
    if (questionNumber === 10 && this.state.gameIsOver === false) {
      console.log("restart game now");
      console.log(
        "this is the curentQuestion after 10 is reached",
        this.state.currQuestion
      );
      clearInterval(this.state.ticker);
      this.setGameOver();
    }
    return (
      <div className="App">
        <div className="App-header">
          <Selection
            handleCategorySelected={this.handleCategorySelected}
            handleDifficultySelected={this.handleDifficultySelected}
          />
          <button className="btn btn-primary active" onClick={this.getNewQuiz}>
            New Trivia Game
          </button>
        </div>
        <h2>Countdown {this.state.secondsLeft} </h2>
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
          {this.state.gameIsOver === true ? (
            <div className="gameover">
              <h4>
                <button
                  className="btn btn-primary active"
                  onClick={this.getNewQuiz}
                >
                  Game over, Play again?
                </button>
              </h4>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
    // {
    //   /* <Footer title={footer} />; */
    // }
  }
}
export default UserGame;
