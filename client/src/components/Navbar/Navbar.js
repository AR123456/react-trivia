import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/" />
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/APIGame"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            Trivia Game
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/UserGame"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/UserGame" className="nav-link">
            Custom Game
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/CreateGame"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/CreateGame" className="nav-link">
            Create a game
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
