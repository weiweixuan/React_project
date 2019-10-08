import React, { useContext, useRef } from 'react'
import lodash from 'lodash'
import { Store } from './store'
import { Card, Popover, Button } from 'antd'
import { CHANGE_TYPE } from './store'
export default function List() {
  const [list, dispatch] = useContext(Store)
  const IndexRef = useRef()
  const node = (
    <>
      <Button
        type="primary"
        shape="circle"
        icon="edit"
        style={{ marginRight: 10 }}
        onClick={() => {
          let index = IndexRef.current
          let list_ = lodash.cloneDeep(list)
          list_[index].checked = !list[index].checked
          dispatch({ type: CHANGE_TYPE, payload: list_ })
        }}
      ></Button>
      <Button
        type="danger"
        shape="circle"
        icon="delete"
        onClick={() => {
          let index = IndexRef.current
          let list_ = lodash.cloneDeep(list)
          list_.splice(index, 1)
          dispatch({ type: CHANGE_TYPE, payload: list_ })
        }}
      ></Button>
    </>
  )
  return (
    <>
      <Card style={{ width: 500 }}>
        {list.map((item, key) => (
          <div
            key={item.title}
            style={{ marginTop: 10 }}
            onMouseEnter={() => {
              IndexRef.current = key
            }}
          >
            <Popover placement="right" content={node} title="请编辑">
              <span
                style={{
                  marginRight: 10,
                  background: item.checked ? 'green' : 'red',
                  color: '#fff',
                  padding: '2px 5px',
                  borderRadius: 50,
                  fontSize: 12
                }}
              >
                {item.checked ? '已完成' : '未完成'}
              </span>
              <span style={{ color: item.checked ? 'green' : 'red' }}>
                {item.title}
              </span>
            </Popover>
          </div>
        ))}
      </Card>
    </>
  )
}
