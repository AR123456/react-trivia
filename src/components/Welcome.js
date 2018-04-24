import React from "react";
import logo from "./bananadance.gif";
const Welcome = props => {
  return (
    <div className="CenterScreen">
      <Welcome />
      <input
        placeholder="User Name"
        type="text"
        name="name"
        onChange={this.handleUserDetails}
      />
      <br />
      <input
        placeholder="email"
        type="text"
        name="email"
        onChange={this.handleUserDetails}
      />
      <br />
      <input
        placeholder="password"
        type="text"
        name="password"
        onChange={this.handleUserDetails}
      />
    </div>
  );
  function Welcome() {
    return (
      <div>
        <header>
          <img src={logo} className="StartLogo" alt="logo" />
        </header>
        <h1>Trivia Time!</h1>
        <p>Log in, pick your category and difficulty.</p>
        <p>
          <small>
            You have <strong>60</strong> seconds to answer <strong>20</strong>{" "}
            questions.
          </small>
        </p>
      </div>
    );
  }
};
export default Welcome;
