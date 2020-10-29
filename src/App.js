import { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
// import Memo from "./memo/Memo";
// import AddForm from "./memo/AddForm";
// import FindForm from "./memo/FindForm";
// import DelForm from "./memo/DelForm";
import * as React from "react";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Redux</h1>
        <Message />
        <Button />
      </div>
    );
  }
}
App = connect()(App);

class Message extends Component {
  style = {
    fontSize: "20pt",
    padding: "20px 5px",
  };
  render() {
    return (
      <p style={this.style}>
        {this.props.message}: {this.props.counter}
      </p>
    );
  }
}
Message = connect((state) => state)(Message);

class Button extends Component {
  style = {
    fontSize: "16pt",
    padding: "5px 10px",
  };
  constructor(props) {
    super(props);
    this.doAction = this.doAction.bind(this);
  }
  doAction(e) {
    if (e.shiftKey) {
      this.props.dispatch({ type: "DECREMENT" });
    } else if (e.ctrlKey) {
      this.props.dispatch({ type: "RESET" });
    } else {
      this.props.dispatch({ type: "INCREMENT" });
    }
  }
  render() {
    return (
      <button style={this.style} onClick={this.doAction}>
        click
      </button>
    );
  }
}
Button = connect()(Button);

export default App;
