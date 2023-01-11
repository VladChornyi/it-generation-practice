import { decrement, increment } from "./actionTypes";

export const reducer = (state, action) => {

    switch (action.type) {
      case increment:
          return {...state, counter: state.counter + action.payload};
      case decrement:
          return {...state, counter: state.counter - action.payload};
  
      default:
          return state;
    }
  };