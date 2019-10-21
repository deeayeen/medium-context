import React from "react";
import "./App.css";
import Counter from "./Counter";
import { StateProvider } from "./state";

const App = () => {
  const initialState = {
    counter: 0
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increaseCounter":
        return {
          ...state,
          counter: state.counter + 1
        };
      case "decreaseCounter":
        return {
          ...state,
          counter: state.counter - 1
        };
      default:
        return state;
    }
  };
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Counter />
    </StateProvider>
  );
};

export default App;
