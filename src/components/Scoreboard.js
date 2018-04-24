import React from 'react';

const Scoreboard = (props) => {
	return (
		<div className="scoreboard">
			<p>Score: {props.score}/{props.questionAmount}</p>
			<p>Question: {props.questionNumber}/{props.questionAmount}</p>
		</div>	 
	)
}

export default Scoreboard;