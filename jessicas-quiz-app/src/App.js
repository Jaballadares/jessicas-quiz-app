import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Jess's Quiz</h1>
        </header>
        <p className="App-intro">
          <Quiz />
        </p>
      </div>
    );
  }
}

export default App;
