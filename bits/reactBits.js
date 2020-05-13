user clicks on Get user details button how many times rendeer user profile dislayed to the user

import React, { Component } from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class UserProfile extends Component {
  @observable userDetails = null;
  @observable count = 0;
  @observable secondCount = 0;

  @action
  getUserDetails = async () => {
    await null;
    this.count = this.count + 1;
    this.secondCount = this.secondCount + 1;
    let promise = new Promise((resolve, reject) => {
      resolve({
        name: "Tom Preston-Werner",
        company: "Facebook",
      });
    });
    let response = await promise;
    this.setUserDetailsResponse(response);
  };

  @action.bound
  setUserDetailsResponse(response) {
    this.userDetails = response;
  }

  render() {
    console.log("render UserProfile");
    console.log(this.count, this.secondCount);

    if (this.userDetails === null) {
      return <button onClick={this.getUserDetails}>Get user details</button>;
    }
    return (
      <div>
        <p>Name: {this.userDetails.name}</p>
        <p>Company: {this.userDetails.company}</p>
      </div>
    );
  }
}

render(<UserProfile />, document.getElementById("root"));
