import React from 'react';

const Choice = (props) => {
	const classStates = {
		'active': "list-group-item-action",
		'correct': "list-group-item-success",
		'incorrect': "list-group-item-danger",
		'inactive': "disabled"
	}
	return (
		<button 
			className={"list-group-item " + classStates[props.activeState]}
			onClick={props.handleClick}
			disabled={props.disabled}>
				{props.choice}
		</button>	 
	)
}

export default Choice;