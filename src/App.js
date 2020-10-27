import { Component } from "react";
import Rect from "./Rect";
import "./App.css";
import * as React from "react";

let data = {
  title: "Title",
  message: "this is sample message.",
};
const SampleContext = React.createContext(data);

class App extends Component {
  render() {
    return (
      <div>
        <h1>Context</h1>
        <Title />
        <Message />
      </div>
    );
  }
}

class Title extends Component {
  static contextType = SampleContext;
  render() {
    return (
      <div>
        <h2>{this.context.title}</h2>
      </div>
    );
  }
}

class Message extends Component {
  static contextType = SampleContext;
  render() {
    return <p>{this.context.message}</p>;
  }
}

export default App;
