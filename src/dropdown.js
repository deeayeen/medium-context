import React, { Component } from "react";
import { StateContext } from "./state";

export default class Dropdown extends Component {
  static contextType = StateContext;
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    const [{ verified }, dispatch] = this.context;
    return (
      <div>
        <h1 onClick={() => this.setState({ open: !this.state.open })}>
          clickme
        </h1>
        {this.state.open && (
          <div>
            <h3>hello</h3>
            <h3 onClick={() => dispatch({ type: "changeApp", newApp: "home" })}>
              hello
            </h3>
            <h3>hello</h3>
          </div>
        )}
      </div>
    );
  }
}
