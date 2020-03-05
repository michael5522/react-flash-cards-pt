import React from 'react';


class CreateCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      question: '',
      answer: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
      this.setState({
        [name]: value
      });
  }

  handleSubmit(event){
    event.preventDefault();
    let id = this.props.lengthOfCards;
    console.log("id", id);
    this.props.addCardToCreateCard({id, ...this.state});
    this.reset();
  }

  reset(){
    this.setState({
      question: '',
      answer: ''
    });
  }

  render() {
    const { question, answer } = this.state;
    // console.log("question---", this.state.question);
    // console.log("answer---",this.state.answer);
    return (
      <div className="container">
        <h1 className="text-center my-4">Create New Card</h1>
          <form onSubmit={this.handleSubmit}>
          <div className="text-center">
            <label htmlFor="question" >Question:</label>
            <input value={question} name="question" onChange={this.handleChange} type="text" id="question" />
            </div>

          <div className="text-center">
              <label htmlFor="answer" >Answer:</label>
              <input value={answer} name="answer" onChange={this.handleChange} type="text" id="answer" />
            </div>

            <div className="text-center">
              <button onClick={this.reset} type="button"> Cancel</button>
              <button type="submit" >Save Card</button>
            </div>

          </form>
      </div>
    );
  }
}

export default CreateCard;
