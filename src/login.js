import React, { Component } from "react";
import { StateContext } from "./state";

export default class Login extends Component {
  static contextType = StateContext;
  render() {
    const [{ verified }, dispatch] = this.context;
    return (
      <div>
        <input />
        <input />
        <div
          style={{
            border: "1px solid white",
            padding: "10px",
            marginTop: "20px",
            cursor: "pointer"
          }}
          onClick={() =>
            dispatch({
              type: "changeApp",
              newApp: "body"
            })
          }
        >
          submit
        </div>
      </div>
    );
  }
}
