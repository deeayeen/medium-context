import React, { Component } from "react";
import { StateContext } from "./state";

export default class Counter extends Component {
  static contextType = StateContext;
  render() {
    const [{ counter }, dispatch] = this.context;
    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={() => dispatch({ type: "increaseCounter" })}>
          Increase Counter
        </button>
        <button onClick={() => dispatch({ type: "decreaseCounter" })}>
          Decrease Counter
        </button>
      </div>
    );
  }
}
