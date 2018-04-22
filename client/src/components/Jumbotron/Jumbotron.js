import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron text-center">
    <h1>React Trivia Game </h1>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://opentdb.com/api_config.php"
    >
      Powered by The Open Trivia API
    </a>
  </div>
);

export default Jumbotron;
