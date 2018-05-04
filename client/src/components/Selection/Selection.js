// import React from "react";
import React, { Component } from "react";
import "../App.css";

class Selection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: {
        categories: {
          "Any Category": 0,
          "General Knowledge": 9,
          "Entertainment: Books": 10,
          "Entertainment: Film": 11,
          "Entertainment: Music": 12,
          "Entertainment: Musicals & Theatres": 13,
          "Entertainment: Television": 14,
          "Entertainment: Video Games": 15,
          "Entertainment: Board Games": 16,
          "Science & Nature": 17,
          "Science: Computers": 18,
          "Science: Mathematics": 19,
          Mythology: 20,
          Sports: 21,
          Geography: 22,
          History: 23,
          Politics: 24,
          Art: 25,
          Celebrities: 26,
          Animals: 27,
          Vehicles: 28,
          "Entertainment: Comics": 29,
          "Science: Gadgets": 30,
          "Entertainment: Japanese Anime & Manga": 31,
          "Entertainment: Cartoon & Animations": 32
        },
        difficulties: ["any difficulty", "easy", "medium", "hard"],
        quizCategoryID: 0,
        quizDifficulty: "easy"
      }
    };
  }

  render() {
    return (
      <div className="CenterScreen">
        <Select />

        <br />
        <select
          id="category"
          className="text-capitalize m-1 dropdown-toggle btn btn-primary"
          onChange={this.props.handleCategorySelected}
        >
          <option value="" disabled selected>
            select category
          </option>
          {Object.keys(this.state.quiz.categories).map((keyName, keyIdx) => (
            <option key={keyName} value={this.state.quiz.categories[keyName]}>
              {keyName}
            </option>
          ))}
        </select>
        <select
          id="difficulty"
          className="text-capitalize m-1 dropdown-toggle btn btn-primary"
          onChange={this.props.handleDifficultySelected}
        >
          <option value="" disabled selected>
            select difficulty
          </option>
          {this.state.quiz.difficulties.map((el, idx) => (
            <option key={idx} value={el}>
              {el}
            </option>
          ))}
        </select>
        <br />
        <br />
        {/* <button className="UIblocks" onClick={this.startQuiz}>
          Start Quiz
        </button> */}
      </div>
    );
  }
}

function Select() {
  return <div />;
}

export default Selection;
