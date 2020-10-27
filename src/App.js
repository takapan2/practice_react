import { Component } from "react";
import Rect from "./Rect";
import "./App.css";
import * as React from "react";

let theme = {
  light: {
    backgroundColor: "#eef",
    color: "#006",
    padding: "10px",
  },
  dark: {
    backgroundColor: "#006",
    color: "#eef",
    padding: "10px",
  },
};

const ThemeContext = React.createContext(theme.light);

class App extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <div style={this.context}>
        <h1>Context</h1>
        <Title title="Content page" />
        <Message value="this is Contet sample." />
        <Message value="※これはテーマのサンプルです。" />
      </div>
    );
  }
}

class Title extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <div>
        <h2 style={this.context}>{this.props.title}</h2>
      </div>
    );
  }
}

class Message extends Component {
  static contextType = ThemeContext;
  render() {
    return <p style={this.context}>{this.props.value}</p>;
  }
}

export default App;
