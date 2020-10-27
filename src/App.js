import { Component } from "react";
import Rect from "./Rect";
import "./App.css";

class App extends Component {
  input = "";
  msgStyle = {
    fontSize: "20px",
    color: "#900",
    margin: "20px 0",
    padding: "5px",
  };
  constructor(props) {
    super(props);
    this.state = {
      message: "type your name:",
    };
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }
  doChange(event) {
    this.input = event.target.value;
  }
  doSubmit(event) {
    this.setState({ message: "Hello, " + this.input + "!!" });
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <h1>React</h1>
        <Message title="Children!">
          これはコンポーネンと内のコンテンツです。
          マルでテキストを分割し、リストにして表示します。
          改行は必要ありません。
        </Message>
      </div>
    );
  }
}

class Message extends Component {
  li = {
    fontSize: "16pt",
    color: "#06",
    margin: "0",
    padding: "0",
  };
  render() {
    let content = this.props.children;
    let arr = content.split("。");
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].trim() != "") {
        arr2.push(arr[i]);
      }
    }
    let list = arr2.map((value, key) => (
      <li style={this.li} key={key}>
        {value}.
      </li>
    ));
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ol>{list}</ol>
      </div>
    );
  }
}

export default App;
