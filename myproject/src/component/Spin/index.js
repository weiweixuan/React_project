import React, { useState } from 'react'
import { Spin } from 'antd'
import './index.scss'
export default function() {
  const [lodding, setLodding] = useState(false)
  React.setLodding = setLodding
  return (
    lodding && (
      <>
        <div className="lodding">
          <Spin tip="Loading..."></Spin>
        </div>
      </>
    )
  )
}
