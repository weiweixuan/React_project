import { getPennyType } from '../actionTypes/penny'
import { pennyApi } from '../api/penny'
import axios from 'axios'
export function getChangeAction(payload) {
  return function(dispatch) {
    axios.get(pennyApi).then(res => {
      dispatch(getChangeAction_(res.data.title))
    })
  }
}
function getChangeAction_(payload) {
  return {
    type: getPennyType,
    payload
  }
}
