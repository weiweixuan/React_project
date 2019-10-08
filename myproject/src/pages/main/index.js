import React, { useState, useEffect, useRef } from 'react'
export default function Main() {
  const [count, setCount] = useState(0)
  const [obj, setObj] = useState({ name: 'ww', age: 23 })
  const myRef = useRef('110')
  useEffect(() => {
    myRef.current = Date.now()
    console.log('页面加载啦', myRef.current)
    return () => {
      console.log('页面卸载啦')
    }
  }, [])
  useEffect(() => {
    console.log('页面更新啦，count', count)
  })
  return (
    <>
      <div>我的值为{count}</div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        点我加一
      </button>
      <div>
        我是对象，我的名字为{obj.name}，我的年龄是{obj.age}
      </div>
      <button
        onClick={() => {
          let obj_ = {
            name: Math.random()
              .toString(36)
              .substr(2),
            age: obj.age + 1
          }
          setObj(obj_)
          console.log(myRef.current, '获取值，存新值')
          myRef.current = 'abc'
        }}
      >
        我来修改
      </button>
    </>
  )
}
