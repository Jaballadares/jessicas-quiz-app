import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sketchpad from './Sketchpad';
import DrawArea from './DrawArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Ms. Yee's Math Class</h1>
          <p>Use the box below to draw. This is especially useful for word problems.</p>
          <Sketchpad name="student" />
        </header>
        <p className="App-intro">
          To get started, find your quiz and get started. If you're in dev mode,edit <code>src/App.js</code> and save.
        </p>
        <DrawArea />

      </div>
    );
  }
}

export default App;
