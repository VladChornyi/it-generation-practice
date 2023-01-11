import { decrement, increment } from "./actionTypes"

export const incrementAction = (payload) => {
    return {type: increment, payload}
}

export const decrementAction = (payload) => {
    return {type: decrement, payload}
}

