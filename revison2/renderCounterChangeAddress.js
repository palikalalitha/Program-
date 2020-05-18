import React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class Person extends React.Component {
  @observable address = {
    city: "New Delhi",
    state: "Delhi",
  };

  onChangeAddress = () => {
    this.address.city = "New Delhi";
  };

  render() {
    console.log("render Person");

    return (
      <div>
        <h2>Person Details</h2>
        <p>City: {this.address.city}</p>
        <p>State: {this.address.state}</p>
        <button onClick={this.onChangeAddress}>Change address</button>
      </div>
    );
  }
}

render(<Person />, document.getElementById("root"));
  
