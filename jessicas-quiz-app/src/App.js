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
          <h1 className="App-title">Welcome to Ms. Yee's Classroom</h1>
          <Sketchpad name="student" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DrawArea />
        <div id="canvasDiv" />
      </div>
    );
  }
}

export default App;
