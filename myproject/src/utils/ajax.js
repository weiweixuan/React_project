import axios from 'axios'
import React from 'react'
export default function({
  url,
  data,
  method = 'GET',
  header,
  callback,
  action
}) {
  React.setLodding(true)
  console.log('%c 请求数据啦', 'color:red;font-size:50px')
  return dispatch => {
    axios({
      method,
      url,
      data,
      header
    })
      .then(res => {
        React.setLodding(false)
        console.log('shujunadaol ma :', res)
        if (res) {
          callback && callback()
          dispatch(action(res))
        }
      })
      .catch(e => {
        console.log(e)
        React.setLodding(false)
      })
  }
}
// 'https://api.github.com/users/dangdang'
