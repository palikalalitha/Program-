import React, { Component } from "react";
import { render } from "react-dom";

class PersonDetails extends Component {
  state = {
    name: "Michael",
    address: {
      city: "Hyderabad",
      country: "India",
    },
  };

  prevState = this.state;
  nextState = this.state;

  updateAddress = () => {
    this.prevState = this.state;
    this.setState({
      ...this.state,
      address: {
        ...this.state.address,
        city: "Delhi",
      },
    });
  };

  render() {
    this.nextState = this.state;
    console.log(this.nextState === this.prevState);
    console.log(this.nextState.name === this.prevState.name);

    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>City: {this.state.address.city}</p>
        <p>Name: {this.state.address.country}</p>
        <button onClick={this.updateAddress}>Update address</button>
      </div>
    );
  }
}
render(<PersonDetails />, document.getElementById("root"));
