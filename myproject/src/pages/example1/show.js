import React, { useContext } from 'react'
import { Context } from './color'
export default function ShowText() {
  const [color] = useContext(Context)
  return (
    <>
      <div style={{ color: color }}>我是现实的文字</div>
    </>
  )
}
