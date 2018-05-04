// import React from "react";
import React, { Component } from "react";
import "../App.css";

class UserSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: {
        categories: {
          "Any Category": 0,
          CSCS: 99
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

export default UserSelection;
