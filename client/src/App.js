import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { QuestionList, QuestionListItem } from "./components/QuestionList";
import { Container, Row, Col } from "./components/Grid";
import PortfolioContainer from "./components/PortfolioContainer";
import Form from "./components/Form";

class App extends Component {
  state = {
    questions: [],
    questionSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get questions s update the questions  state
    event.preventDefault();
    API.getQuestions(this.state.questionSearch)
      .then(res => this.setState({ questions: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Form />
        <PortfolioContainer />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="questionSearch"
                        value={this.state.questionSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Question"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.questions.length ? (
                <h1 className="text-center">No questions</h1>
              ) : (
                <QuestionList>
                  {this.state.questions.map(question => {
                    return (
                      <QuestionListItem
                        key={question.title}
                        title={question.title}
                        href={question.href}
                        ingredients={question.ingredients}
                        thumbnail={question.thumbnail}
                      />
                    );
                  })}
                </QuestionList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
