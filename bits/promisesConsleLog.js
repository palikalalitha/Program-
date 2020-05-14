
import React, { Component } from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class Counter extends Component {
  @observable count = 243;
  @observable isCountChanged = false;

  @action.bound
  async onChangeCount() {
    this.isCountChanged = true;
    this.count = this.count + 13;

    const promise = new Promise((resolve, reject) => {
      console.log("Before resolve log");
      resolve("Success");
      console.log("After resolve log");
    });
    console.log("Before await log");
    let response = await promise;
    console.log(response);
    this.isCountChanged = false;
  }

  render() {
    console.log("render Counter");
    return (
      <div>
        <p>Count: {this.count}</p>
        <button onClick={this.onChangeCount}>Change count</button>
        <p>{this.isCountChanged ? "Count Changed" : ""}</p>
      </div>
    );
  }
}

render(<Counter />, document.getElementById("root"));
