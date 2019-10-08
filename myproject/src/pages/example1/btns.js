import React, { useContext, useMemo } from 'react'
import { COLOR_TYPE } from './color'
import { Context } from './color'
export default function Btns() {
  const [color, dispatch] = useContext(Context)
  function change() {
    console.log('change')
  }
  useMemo(change, [])
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: COLOR_TYPE, color: 'blue' })
        }}
      >
        蓝色
      </button>
      <button
        onClick={() => {
          dispatch({ type: COLOR_TYPE, color: 'green' })
        }}
      >
        绿色
      </button>
    </>
  )
}
