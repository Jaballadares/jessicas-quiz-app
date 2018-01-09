import React, { Component } from 'react';
import Answers from './Answers'
import quiz from './quiz.json';

class Quiz extends Component {
  constructor(props){
    super(props);

    this.state ={
      quiz: quiz,
      currentPosition: 0
    };
  }
  render(){
    console.log(quiz)
    return(
      <div className="quiz">
        <h2>Question: {this.state.quiz[this.state.currentPosition].question}</h2>
        <Answers options={this.state.quiz[this.state.currentPosition].options} answer={this.state.quiz[this.state.currentPosition].answer}/>

      </div>

    )
  }
}

export default Quiz;
