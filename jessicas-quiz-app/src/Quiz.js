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
    this.nextQuestion = this.nextQuestion.bind(this)
  }

  nextQuestion() {
    if(this.state.currentPosition < this.state.quiz.length -1){
    this.setState({currentPosition: this.state.currentPosition +1})
  } else {
    alert("you are finished with the quiz!! YaY!!")
  }
};

  render(){
    console.log(quiz)
    return(
      <div className="quiz">
        <h2>Question: {this.state.quiz[this.state.currentPosition].question}</h2>
        <Answers options={this.state.quiz[this.state.currentPosition].options} answer={this.state.quiz[this.state.currentPosition].answer}/>

        <button onClick={this.nextQuestion}>Click to Answer</button>

      </div>

    )
  }
}

export default Quiz;
