import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});

console.log(counterSlice);
const { actions, reducer } = counterSlice;
export const { increment, decrement } = actions;
console.log("actions =>", increment());

console.log("counterSlice =>", counterSlice);
export default reducer;
