import React, { createContext, useReducer } from 'react'
export const Store = createContext({})
export const CHANGE_TYPE = 'CHANGE_TYPE'
function reducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case CHANGE_TYPE:
      return payload
    default:
      return state
  }
}
export function Provider(props) {
  return (
    <Store.Provider
      value={useReducer(reducer, [
        { checked: false, title: '学习hooks' },
        { checked: true, title: '吃饭' }
      ])}
    >
      {props.children}
    </Store.Provider>
  )
}
