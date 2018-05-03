import React, { Component } from "react";
import Choice from "./Choice";
import Selection from "./Selection";
const defaultState = {
  answered: false,
  selectedIndex: null
};

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.handleClick = this.handleClick.bind(this);
    this.calcChoiceState = this.calcChoiceState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // console.log("inside will recive props ");
    // console.log("nextprops.question", nextProps.question);
    // console.log("this.props.question", this.props.question);

    if (nextProps.question === this.props.question) {
      return null;
    } else {
      console.log("reset new quiz");

      this.setState(defaultState);
    }
  }

  handleClick(index) {
    this.setState({ answered: true, selectedIndex: index });
    this.props.updateScore(index === this.props.correctChoice);
  }

  calcChoiceState(index) {
    const correct = index === this.props.correctChoice;
    if (!this.state.answered) return "active";
    if (index === this.state.selectedIndex) {
      return correct ? "correct" : "incorrect";
    } else {
      return correct ? "correct" : "disabled";
    }
  }

  render() {
    return (
      <div>
        <h3>{this.props.question}</h3>
        <div className="list-group">
          {this.props.choices.map((choice, index) => (
            <Choice
              activeState={this.calcChoiceState(index)}
              key={index}
              choice={choice}
              disabled={this.state.answered}
              handleClick={this.handleClick.bind(null, index)}
            />
          ))}
        </div>
        {/* {this.state.answered && this.props.nextQuestion ? (
          <button
            className="btn btn-primary active"
            onClick={this.props.handleClickNext}
          >
            Next
          </button>
        ) : null} */}
      </div>
    );
  }
}

export default Question;
