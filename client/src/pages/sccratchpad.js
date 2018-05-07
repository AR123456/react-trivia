// code from work with ben use this for the create user entry form
class CreateForm extends Component {
  constructor() {}

  onChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  formatQuestion = e => {
    e.preventDefault();
    const {
      category,
      difficulty,
      question,
      correct_answer,
      incorrect_1,
      incorrect_2,
      incorrect_3
    } = this.state;

    const question = {
      category: "Mine",
      type: "multiple",
      difficulty: "medium",
      question,
      correct_answer,
      incorrect_answers: [incorrect_1, incorrect_2, incorrect_3],
      date: new Date(Date.now())
    };

    // send me to the db
    // this.props.createNewQuestion(question);
  };

  render() {
    return (
      <div>
        {/* <div className="form text-center">{props.children}</div> */}

        <form>
          <input name="category" placeholder="Category  (required)" />
          <input name="difficulty" placeholder="Difficulty  (required)" />
          <input name="question" placeholder="Question  (required)" />
          <input
            name="correct_answer"
            placeholder="Correct answer (required)"
          />
          <input
            name="incorrect_1"
            placeholder="incorrect answer one  (required)"
          />
          <input
            name="incorrect_2"
            placeholder="incorrect answer two  (required)"
          />
          <input
            name="incorrect_3"
            placeholder="incorrect answer three (required)"
          />
          {/* <TextArea name="synopsis" placeholder="Synopsis (Optional)" /> */}

          {/* this button need to have this or this type of on click in it onClick={formatQuestion} */}
          <button>Add this question to the database</button>
        </form>
      </div>
    );
  }
}
