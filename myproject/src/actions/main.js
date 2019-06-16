import actionType from '../actionTypes/main'

export function increaseFun(payload) {
  return {
    type: actionType.ACTIONTYPE_COUNT_INCREASE,
    payload
  }
}

export function reduceFun(payload) {
  return {
    type: actionType.ACTIONTYPE_COUNT_REDUCE,
    payload
  }
}
