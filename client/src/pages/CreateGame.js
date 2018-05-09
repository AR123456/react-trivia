import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import DeleteBtn from "../components/DeleteBtn";
import APIdb from "../utils/APIdb";
import Jumbotron from "../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";

class CreateGame extends Component {
  state = {
    category: "Mine",
    type: "multiple",
    difficulty: "medium",
    question: "",
    questionArray: [],
    correct_answer: "",
    incorrect_answers: ["", "", ""],
    date: new Date(Date.now())
  };
  componentDidMount() {
    this.loadQuestions();
  }
  loadQuestions = () => {
    APIdb.getQuizes()
      .then(res => {
        console.log("This is res", res);

        this.setState({ questionArray: res });
      })

      .catch(err => console.log(err));
  };

  deleteQuiz = id => {
    APIdb.deleteQuiz(id)
      .then(res => this.loadQuestions())
      .catch(err => console.log(err));
    console.log("This is deleteQuiz");
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    console.log("This is the handleInput state change", value);
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.question &&
      this.state.correct_answer &&
      this.state.incorrect_answers
    ) {
      APIdb.saveQuiz({
        category: "Mine",
        type: "multiple",
        difficulty: "medium",
        question: this.state.question,
        correct_answer: this.state.correct_answer,
        incorrect_answers: [
          this.state.incorrect_1,
          this.state.incorrect_2,
          this.state.incorrect_3
        ]
      })
        .then(res => this.loadQuestions())
        .catch(err => console.log(err));
      console.log("This is the handale form submit");
    }
  };

  render() {
    console.log("I was triggered during render");
    return (
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h2>Add New Questions</h2>
            </Jumbotron>
            <form>
              <Input
                onChange={this.handleInputChange}
                name="question"
                placeholder="Question (required)"
              />
              <Input
                onChange={this.handleInputChange}
                name="correct_answer"
                placeholder="Correct answer (required)"
              />
              <Input
                onChange={this.handleInputChange}
                name="incorrect_1"
                placeholder="Incorrect Answer One (required)"
              />
              <Input
                onChange={this.handleInputChange}
                name="incorrect_2"
                placeholder="Incorrect Answer Two (required)"
              />
              <Input
                onChange={this.handleInputChange}
                name="incorrect_3"
                placeholder="Incorrect Answer Three (required)"
              />
              <FormBtn onClick={this.handleFormSubmit}>
                Submit Question{" "}
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h2>Questions In My Database</h2>
            </Jumbotron>
            {this.state.questionArray.length ? (
              <List>
                {this.state.questionArray.map(question => (
                  <ListItem key={question._id}>
                    <Link to={"/questions/" + question._id}>
                      <strong>{question.question}</strong>
                    </Link>
                    <DeleteBtn
                      onClick={() => this.deleteQuiz(question.question._id)}
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default CreateGame;
