import React from "react";

const ScoreBoard = props => {
  return (
    <div className="scoreboard">
      <p>Score: {props.score}</p>
      <p>Question: {props.questionNumber}</p>
    </div>
  );
};

export default ScoreBoard;
