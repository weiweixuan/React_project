import React, { useState, useContext, createContext } from 'react'

const allContext = createContext(100)
function A() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>点击次数{count}</div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        点击加一
      </button>
      <allContext.Provider value={count}>
        <B></B>
      </allContext.Provider>
      <C count={count}></C>
    </>
  )
}

function B() {
  // const context = useContext(allContext)
  return (
    <div>
      {/* 子组件共享的状态{context} */}
      <D></D>
    </div>
  )
}
function C(prop) {
  return <div>直接传值{prop.count}</div>
}
function D() {
  const context = useContext(allContext)
  return <div>跨组件传值{context}</div>
}
export default A
