import React from 'react'
let Lazy = () => {
  return (
    <div>
      {Array.from({ length: 100000 }, (item, index) => (
        <span key={index}>{index + '---组件'}</span>
      ))}
    </div>
  )
}

export default Lazy
