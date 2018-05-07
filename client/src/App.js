import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import APIGame from "./pages/APIGame";
import CreateGame from "./pages/CreateGame";
import UserGame from "./pages/UserGame";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Welcome />
      <Wrapper>
        <Route exact path="/" component={APIGame} />
        <Route exact path="/APIGame" component={APIGame} />
        <Route exact path="/CreateGame" component={CreateGame} />
        <Route exact path="/UserGame" component={UserGame} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
