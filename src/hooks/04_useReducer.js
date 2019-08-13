import React, { useReducer } from 'react'
import { reducer, initialState } from "./reducers"
import { RESET, ADD } from './constant'

export default function Counter () {
  /**
   * useReducer（代替redux）
   * 应用场景：如果页面state复杂（state是一个对象或者state非常多散落在各处）
   * @param {Function} 必选 reducer函数
   * @param {any} 初始化的state
   */
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: RESET })}>Reset</button>
      <button onClick={() => dispatch({ type: ADD })}>+</button>
    </div>
  )
}
