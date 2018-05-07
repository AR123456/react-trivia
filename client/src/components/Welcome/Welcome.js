import React from "react";
const Welcome = props => {
  return (
    <form data-toggle="validator" role="form">
      <div className="CenterScreen">
        <Welcome />
        {/* <div className="form-group">
          <label for="inputName" className="control-label" />
          <input
            className="form-control"
            id="inputName"
            required
            placeholder="User Name"
            type="text"
            name="username"
            onChange={this.handleUserDetails}
          />
        </div> */}
        {/* <br /> */}
        {/* <div className="form-group">
          <label for="inputEmail" className="control-label" />
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
        </div> */}
        {/* <br /> */}
        {/* <div class="form-group">
          <label for="inputPassword" className="control-label" />
          <div className="form-inline row">
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
        </div> */}
      </div>
    </form>
  );
  function Welcome() {
    return (
      <div>
        <header>
          {/* <img src={logo} className="StartLogo" alt="logo" /> */}
        </header>
        <h1>Trivia Time!</h1>
        <h2> </h2>
      </div>
    );
  }
};
export default Welcome;

//bootstrap validator
// http://1000hz.github.io/bootstrap-validator/#validator-overview
// ******************************************************************
//  look at this instead https://www.npmjs.com/package/react-bootstrap-validation
