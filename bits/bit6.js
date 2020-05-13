change title

import React, { Component } from "react";
import { render } from "react-dom";
import { inject, Provider, observer } from "mobx-react";
import { observable, action } from "mobx";

@inject("appStore")
@observer
class Message extends Component {
  message;
  constructor(props) {
    super(props);
    this.message = this.props.appStore.message;
  }

  onChangeTitle = () => {
    const { onChangeTitle } = this.props.appStore;
    onChangeTitle("Hi");
  };

  render() {
    return (
      <div>
        <p>Message title: {this.message.title}</p>
        <button onClick={this.onChangeTitle}>Change title</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Provider appStore={appStore}>
        <Message />
      </Provider>
    );
  }
}

class AppStore {
  @observable message = {
    title: "Hello",
  };

  @action.bound
  onChangeTitle(title) {
    this.message.title = title;
  }
}

const appStore = new AppStore();

render(<App />, document.getElementById("root"));
