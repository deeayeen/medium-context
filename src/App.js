import React from "react";
import "./App.css";
import Entry from "./entry";
import { StateProvider } from "./state";

const App = () => {
  const initialState = {
    verified: "home"
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "changeApp":
        return {
          ...state,
          verified: action.newApp
        };

      default:
        return state;
    }
  };
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <header className="App-header">
          <Entry />
        </header>
      </div>
    </StateProvider>
  );
};

export default App;
