import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementAction, incrementAction } from '../../redux/actions';

export default function Counter() {

    const dispatch = useDispatch()
const counter = useSelector(state => state.counter)
const text = useSelector(state => state.text)
  return (
    <div>
      <button onClick={() => dispatch(incrementAction(1))} type="button">INCREMENT</button>
      <button onClick={() => dispatch(decrementAction(1))} type="button">DECREMENT</button>
      <p>{counter}</p>
    </div>
  )
}
