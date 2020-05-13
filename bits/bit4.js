click butoon whats the ouput 
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

  updateAddress = () => {
    this.state.address.city = "Delhi";
  };

  render() {
    console.log("render PersonDetails");
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
