import React, { Component } from "react";
import { render } from "react-dom";

class Counter extends Component {
  state = {
    count: 2,
  };
  updateCount = () => {
    this.setState({ count: 2 });
    this.setState({ count: 2 });
    this.setState((prevState) => ({ count: prevState.count }));
  };

  render() {
    console.log("render Counter");
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.updateCount}>Update count</button>
      </div>
    );
  }
}
render(<Counter />, document.getElementById("root"));
