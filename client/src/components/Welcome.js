import React from "react";
import logo from "./bananadance.gif";

// handleUserDetails = event => {
//   if (event.target.name === "name") {
//     this.setState({ username: event.target.value });
//   }
//   if (event.target.name === "email") {
//     this.setState({ useremail: event.target.value });
//   }
//   if (event.target.name === "password") {
//     this.setState({ userpassword: event.target.value });
//   }
// };

const Welcome = props => {
  return (
    <form data-toggle="validator" role="form">
      <div className="CenterScreen">
        <Welcome />
        <div className="form-group">
          <label for="inputName" className="control-label">
            User Name
          </label>
          <input
            className="form-control"
            id="inputName"
            required
            placeholder="User Name"
            type="text"
            name="username"
            onChange={this.handleUserDetails}
          />
        </div>
        <br />
        <div className="form-group">
          <label for="inputEmail" className="control-label">
            Email
          </label>
          <input
            className="form-control"
            id="inputEmail"
            placeholder="Email"
            data-error="Bruh, that email address is invalid"
            required
            type="text"
            name="email"
            onChange={this.handleUserDetails}
          />
          <div className="help-block with-errors" />
        </div>
        <br />
        <div class="form-group">
          <label for="inputPassword" className="control-label" />
          <div className="form-inline row">
            Password
            <div className="form-group col-sm-6">
              <input
                placeholder="Password"
                data-minlength="6"
                className="form-control"
                id="inputPassword"
                type="password"
                name="password"
                required
                onChange={this.handleUserDetails}
              />
              <div className="help-block">Minimum of 6 characters</div>
            </div>
            <div className="form-group col-sm-6">
              <input
                placeholder="Confirm"
                className="form-control"
                id="inputPasswordConfirm"
                type="password"
                data-match="#inputPassword"
                data-match-error="Whoops, these don't match"
                required
                onChange={this.handleUserDetails}
              />
              <div className="help-block with-errors" />
            </div>
          </div>
        </div>
      </div>
    </form>
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
            {/* You have <strong>60</strong> seconds to answer <strong>20</strong>{" "}
            questions. */}
          </small>
        </p>
      </div>
    );
  }
};
export default Welcome;

//bootstrap validator
// http://1000hz.github.io/bootstrap-validator/#validator-overview
// ******************************************************************
//  look at this instead https://www.npmjs.com/package/react-bootstrap-validation