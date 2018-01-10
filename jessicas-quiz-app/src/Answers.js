import React, { Component } from 'react';

class Answers extends Component {
  constructor(props){
    super(props);

    this.pickAnswer = this.pickAnswer.bind(this);
  }

pickAnswer(e) {
  const pickedAnswer = e.target.value;
  this.props.setAnswer(pickedAnswer)
  console.log(pickedAnswer)
}

  render() {
    const { options } = this.props;
    const listOptions = options.map((option, index) => {
      return (
        <button key={index} value={option} onClick={this.pickAnswer}>{option}</button>
      )
  });

  console.log(listOptions)
    return(
      <div className="">
        <h2>Here are your options</h2>
          {listOptions}
        <hr />
          <h3>The Answer is: {this.props.answer}</h3>
      </div>

    )
  }
}

export default Answers;
