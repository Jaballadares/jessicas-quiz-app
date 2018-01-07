import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class Sketchpad extends Component {
//   render() {
//     return (
//       <div>Ms. Yee's Quiz App
//       <h1 className="testing">Welcome to {this.props.name} classroom</h1></div>
//     )
//   }
// };
const Sketchpad = (props) => (
  <div>
    <div>Hello {props.name} you have no idea what you're in for.</div>
  </div>
);

export default Sketchpad;
