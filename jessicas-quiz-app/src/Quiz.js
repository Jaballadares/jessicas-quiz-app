import React, { Component } from 'react';
import Answers from './Answers'
import quiz from './quiz.json';
import './Quiz.css';

class Quiz extends Component {
  constructor(props){
    super(props);

    this.state ={
      quiz: quiz,
      currentPosition: 0,
      selectedAnswers:{}
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.setAnswer = this.setAnswer.bind(this);
  }

  nextQuestion() {
    if(this.state.currentPosition < this.state.quiz.length -1){
    this.setState({currentPosition: this.state.currentPosition +1})
  } else {
    alert("you are finished with the quiz!! YaY!!")
  }
};

setAnswer(pickedAnswer) {
  const selectedAnswers = {...this.selectedAnswers};
  selectedAnswers[`${this.state.quiz[this.state.currentPosition].question}`] = pickedAnswer;

  this.setState({selectedAnswers})
}

  render(){
    return(
      <div className="grid">
        <h1>Question: {this.state.quiz[this.state.currentPosition].question}</h1>
        <Answers options={this.state.quiz[this.state.currentPosition].options} answer={this.state.quiz[this.state.currentPosition].answer} setAnswer={this.setAnswer}/>

        <button onClick={this.nextQuestion}>Click to Answer</button>

      </div>

    )
  }
}

export default Quiz;
