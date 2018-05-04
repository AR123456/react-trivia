import React from "react";

const SourceLink = props => {
  /* eslint-disable jsx-a11y/anchor-has-content */
  return (
    <a
      href="https://github.com/AR123456"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
};

export default SourceLink;
