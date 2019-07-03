import actionType from '../actionTypes/main'
import $axios from '../utils/ajax'
import { API_GETUSERINFO } from '../api/main'
function increaseFun(payload) {
  return {
    type: actionType.ACTIONTYPE_COUNT_INCREASE,
    payload
  }
}

export function increaseAction(payload, callback) {
  return $axios({
    url: API_GETUSERINFO,
    action: increaseFun,
    data: payload,
    callback
  })
}
export function reduceFun(payload) {
  return {
    type: actionType.ACTIONTYPE_COUNT_REDUCE,
    payload
  }
}
