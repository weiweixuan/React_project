import React from 'react'
import MyInput from './Input'
import MyList from './List'
import { Provider } from './store'
import './index.scss'
export default function MyTodoList() {
  return (
    <div className="box">
      <Provider>
        <MyInput></MyInput>
        <MyList></MyList>
      </Provider>
    </div>
  )
}
