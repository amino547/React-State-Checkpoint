import React, { Component } from 'react';

export default class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  toggle = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <>
        <button 
          style={this.state.show ? { color: "red" } : { color: "green" }} 
          onClick={this.toggle}
        >
          {this.state.show ? "Hide" : "Show"}
        </button>
        {this.state.show ? <div>Content to show!</div> : <h1>No element</h1>}
      </>
    );
  }
}
