click the button 
=>how many times autorun and rende profileview

import React from "react";
import { render } from "react-dom";
import { observable, computed, autorun, action } from "mobx";
import { observer } from "mobx-react";

class Person {
  @observable firstName = "Ramu";
  @observable lastName = "Ratnam";

  @computed get fullName() {
    return this.firstName + " " + this.lastName;
  }

  @action.bound
  changeFirstNameAndLastName() {
    this.firstName = "Mark";
    this.lastName = "Wayne";
  }
}

const newPerson = new Person();

// Reaction: log the profile info whenever it changes
autorun(() => {
  console.log("Autorun called");
  console.log(newPerson.fullName);
});

// Example React component that observes state
const ProfileView = observer((props) => {
  console.log("render ProfileView");

  return (
    <div>
      <p>{props.person.fullName}</p>
      <button onClick={props.person.changeFirstNameAndLastName}>
        Change first name and last name
      </button>
    </div>
  );
});

render(<ProfileView person={newPerson} />, document.getElementById("root"));
