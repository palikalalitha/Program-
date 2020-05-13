render Counter 

import React, { Component } from "react";
import { render } from "react-dom";

class Counter extends Component {
  state = {
    count: 2,
    doubleTheCount: 3,
    tripleTheCount: 4,
  };

  updateCounts = () => {
    this.setState({
      count: this.state.count + 1,
    });
    this.setState({
      doubleTheCount: this.state.doubleTheCount + 1,
    });
    this.setState({
      tripleTheCount: this.state.tripleTheCount + 1,
    });
  };

  render() {
    console.log("render Counter");
    return (
      <div>
        <p>Count: {this.count}</p>
        <p>Double Count: {this.doubleTheCount}</p>
        <p>Triple Count: {this.tripleTheCount}</p>
        <button onClick={this.updateCounts}>Update count</button>
      </div>
    );
  }
}
render(<Counter />, document.getElementById("root"));
