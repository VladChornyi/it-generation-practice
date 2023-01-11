import { createStore } from "redux";
import { decrementAction, incrementAction } from "./actions";
import { decrement, increment } from "./actionTypes";
import { reducer } from "./reducer";


export const store = createStore(reducer, { counter: 0, text: 'abcd' });
console.log(store)



