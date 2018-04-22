import React from "react";

// QuestionList renders a bootstrap list item
export const QuestionList = props => (
  <ul className="list-group">{props.children}</ul>
);
