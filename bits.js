import React, { Component } from "react";
import { render } from "react-dom";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class PersonDetails extends Component {
  @observable state = {
    name: "Michael",
    address: {
      city: "Hyderabad",
      country: "India",
    },
  };

  prevCityState = this.state.address.city;
  nextCityState = this.state.address.city;

  updateAddress = () => {
    this.prevCityState = this.state.address.city;
    this.state.address.city = "Delhi";
  };

  render() {
    this.nextCityState = this.state.address.city;
    console.log(this.nextCityState === this.prevCityState);

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
