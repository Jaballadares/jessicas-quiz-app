import React, { Component } from 'react';
import quiz from './quiz.json';

class Answers extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return(
      <div className="">
      <h2>Here are your options</h2>
        <h3>{this.props.options.map((option) => <button>{option}</button>)}</h3>
        <hr />
        <h3>The Answer is: {this.props.answer}</h3>
      </div>

    )
  }
}

export default Answers;
