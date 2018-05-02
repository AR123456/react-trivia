import React, { Component } from "react";
import Question from "./components/Question";
import Scoreboard from "./components/Scoreboard";
import quizClient from "./utils/API";
import ReactCSSTransitionReplace from "react-css-transition-replace";
import "./App.css";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Selection from "./components/Selection";
// import ModalPage from "./components/Modal";

class App extends Component {
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

      // this.handleEndQuiz();
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

  componentDidMount() {
    this.getNewQuiz();
  }

  handleClickNext() {
    console.log("this is the curent number", this.state.currQuestion);

    //start the timer
    // this.setState({ interval: setInterval(this.tickSeconds, 1000) });
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
    // console.log("question", question);
    // console.log("question number", questionNumber);
    if (questionNumber === 10 && this.state.gameIsOver === false) {
      console.log("restart game now");
      // this.setState({ currQuestion: 0 });
      console.log(
        "this is the curentQuestion after 10 is reached",
        this.state.currQuestion
      );

      clearInterval(this.state.ticker);
      this.setGameOver();
    }
    return (
      <div className="App">
        {/* <ModalPage>
          <h1>This is some modal text </h1>
        </ModalPage> */}
        <Welcome />
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
            <h4>
              Game over, Play again?{" "}
              {/* <Selection
                handleCategorySelected={this.handleCategorySelected}
                handleDifficultySelected={this.handleDifficultySelected}
              />
              <button
                className="btn btn-primary active"
                onClick={this.getNewQuiz}
              >
                New Trivia Game
              </button> */}
            </h4>
          ) : (
            ""
          )}
        </div>

        <Footer />
      </div>
    );
    // {
    //   /* <Footer title={footer} />; */
    // }
  }
}

export default App;
