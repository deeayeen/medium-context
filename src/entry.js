import React, { Component } from "react";
import { StateContext } from "./state";
import Login from "./login";
import Body from "./body";

export default class Entry extends Component {
  static contextType = StateContext;
  render() {
    const [{ verified }, dispatch] = this.context;
    return (
      <div>
        {verified === "home" ? <Login /> : verified === "body" && <Body />}
      </div>
    );
  }
}
