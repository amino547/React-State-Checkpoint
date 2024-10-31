import React, { Component } from 'react';
import ClassComp from './ClassComp';
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to My App</h1>
        <ClassComp />
      </div>
    );
  }
}
