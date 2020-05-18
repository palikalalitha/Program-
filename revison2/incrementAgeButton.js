class Name extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { name } = this.props;
    return <p>Name: {name}</p>;
  }
}

class Age extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { age } = this.props;
    return <p>Age: {age}</p>;
  }
}

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Ramu", age: 24 };
  }

  onIncrementAge = () => {
    this.setState(prevState => ({ age: prevState.age + 1 }));
  };

  render() {
    const { name, age } = this.state;
    return (
      <div>
        <h2>Person:</h2>
        <Name name={name} />
        <Age age={age} />
        <button onClick={this.onIncrementAge}>Increment age</button>
      </div>
    );
  }
}

ReactDOM.render(<Person />, document.getElementById("root"));
