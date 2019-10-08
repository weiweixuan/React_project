import React, { useState } from 'react'
import ShowText from './show'
import Btns from './btns'
import { Color } from './color'
function Ex1() {
  const [count, setCount] = useState(0)
  return (
    <Color>
      <div>{count}次数</div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        点击++
      </button>
      <button
        onClick={() => {
          setCount(count - 1)
        }}
      >
        点击--
      </button>
      <ShowText></ShowText>
      <Btns></Btns>
    </Color>
  )
}

export default Ex1
