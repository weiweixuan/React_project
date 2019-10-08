import React, { createContext, useReducer } from 'react'

export const Context = createContext({})
export const COLOR_TYPE = 'COLOR_TYPE'

function reducer(state, action) {
  // useReducer的返回值是[state,dispatch];
  const { type, color } = action
  switch (type) {
    case COLOR_TYPE:
      return color
    default:
      return state
  }
}
export function Color(props) {
  return (
    <Context.Provider value={useReducer(reducer, 'red')}>
      {props.children}
    </Context.Provider>
  )
}
