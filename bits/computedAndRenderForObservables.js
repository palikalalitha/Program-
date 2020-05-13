how many times comoted and render

import React, { Component } from "react";
import { render } from "react-dom";
import { observable, computed } from "mobx";
import { observer } from "mobx-react";

// Example React component that observes state
@observer
class ProfileView extends Component {
  @observable firstName = "Ramu";
  @observable lastName = "Ratnam";
  @observable initial = "K";

  @computed get fullName() {
    console.log("Computed");
    return this.lastName + " " + this.initial;
  }

  changeFirstNameAndLastName = () => {
    this.firstName = "Mark";
  };

  getFullNameFn = () => {
    console.log("getFullNameFn called");
    return this.lastName + " " + this.initial;
  };

  render() {
    return (
      <div>
        <p>FirstName: {this.firstName}</p>
        <p>Fullname: {this.fullName}</p>
        <p>{this.getFullNameFn()}</p>
        <button onClick={this.changeFirstNameAndLastName}>
          Change first name and last name
        </button>
      </div>
    );
  }
}

render(<ProfileView />, document.getElementById("root"));
