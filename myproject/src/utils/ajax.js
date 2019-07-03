import axios from 'axios'
export default function({
  url,
  data,
  method = 'GET',
  header,
  callback,
  action
}) {
  return dispatch => {
    axios({
      method,
      url,
      data,
      header
    })
      .then(res => {
        if (res) {
          callback && callback()
          dispatch(action(res))
        }
      })
      .catch(e => console.log(e))
  }
}
// 'https://api.github.com/users/dangdang'
