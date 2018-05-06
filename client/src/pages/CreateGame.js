import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
const CreateGame = () => (
  <Container style={{ marginTop: 30 }}>
    <Row>
      <Col size="md-6">
        <Jumbotron>
          <h2>Add new questions</h2>
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
            placeholder="Incorrect Answer One   (required)"
          />
          <Input
            onChange={this.handleInputChange}
            name="incorrect_2"
            placeholder="Incorrect Answer Two(required)"
          />
          <Input
            onChange={this.handleInputChange}
            name="incorrect_3"
            placeholder="Incorrect Answer Three (required)"
          />
          <FormBtn onClick={this.handleFormSubmit}>Submit Question </FormBtn>
        </form>
      </Col>
      <Col size="md-6 sm-12">
        <Jumbotron>
          <h2>My Game Questions</h2>
        </Jumbotron>
        <h3>No Results to Display</h3>
        {/* {this.state.questions.length ? (
          <List>
            {this.state.questions.data.map(question => (
              <ListItem key={question._id}>
                <Link to={"/questions/" + question._id}>
                  <strong>{question}</strong>
                </Link>
                <DeleteBtn onClick={() => this.deleteQuestion(question._id)} />
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )} */}
      </Col>
    </Row>
  </Container>
);

export default CreateGame;
// code from work with ben use this for the create user entry form
// class CreateForm extends Component {
//   constructor() {}

//   onChange = e => {
//     const { name, value } = e.target;

//     this.setState({
//       [name]: value
//     });
//   };

//   formatQuestion = e => {
//     e.preventDefault();
//     const {
//       category,
//       difficulty,
//       question,
//       correct_answer,
//       incorrect_1,
//       incorrect_2,
//       incorrect_3
//     } = this.state;

//     const question = {
//       category: "Mine",
//       type: "multiple",
//       difficulty: "medium",
//       question,
//       correct_answer,
//       incorrect_answers: [incorrect_1, incorrect_2, incorrect_3],
//       date: new Date(Date.now())
//     };

//     // send me to the db
//     // this.props.createNewQuestion(question);
//   };

//   render() {
//     return (
//       <div>
//         {/* <div className="form text-center">{props.children}</div> */}

//         <form>
//           <input name="category" placeholder="Category  (required)" />
//           <input name="difficulty" placeholder="Difficulty  (required)" />
//           <input name="question" placeholder="Question  (required)" />
//           <input
//             name="correct_answer"
//             placeholder="Correct answer (required)"
//           />
//           <input
//             name="incorrect_1"
//             placeholder="incorrect answer one  (required)"
//           />
//           <input
//             name="incorrect_2"
//             placeholder="incorrect answer two  (required)"
//           />
//           <input
//             name="incorrect_3"
//             placeholder="incorrect answer three (required)"
//           />
//           {/* <TextArea name="synopsis" placeholder="Synopsis (Optional)" /> */}

//           {/* this button need to have this or this type of on click in it onClick={formatQuestion} */}
//           <button>Add this question to the database</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default CreateForm;
