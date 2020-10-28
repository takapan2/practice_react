import { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Memo from "./memo/Memo";
import Memo from ".memo/FindForm";
import Memo from "./memo/DelForm";
import * as React from "react";

class App extends Component {
  td = {
    width: "250px",
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Memo</h1>
        <AddForm />
        <hr />
        <table>
          <tbody>
            <tr>
              <td style={this.td}>
                <FindForm />
              </td>
              <td style={this.td}>
                <DelForm />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect()(App);
