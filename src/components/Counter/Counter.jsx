import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/counter/counterSlice";

export default function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  console.log(increment(1));
  return (
    <div>
      <button
        onClick={() => dispatch({ type: "counter/increment", payload: 1 })}
        type="button"
      >
        INCREMENT
      </button>
      <button onClick={() => dispatch(decrement(1))} type="button">
        DECREMENT
      </button>
      <p>{counter}</p>
    </div>
  );
}
