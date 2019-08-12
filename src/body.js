import React, { Component } from "react";
import { StateContext } from "./state";
import Dropdown from "./dropdown";

export default class Body extends Component {
  static contextType = StateContext;
  render() {
    const [{ verified }, dispatch] = this.context;
    return (
      <div>
        <Dropdown />
        <Dropdown />
      </div>
    );
  }
}
