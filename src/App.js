import React from "react";
import Counter from "./Counter";
import { StateProvider } from "./state";

const App = () => {
  const initialState = {
    counter: 0,
    counter2: 0
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
      case "increaseCounter2": {
        return {
          ...state,
          counter: state.counter + action.increment
        };
      }
      case "decreaseCounter2": {
        return {
          ...state,
          counter: state.counter - action.increment
        };
      }
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
