import actionType from '../actionTypes/main'

const state_main = {
  count: 0,
  avatar_url: ''
}

export default function main(state = state_main, action) {
  const { payload } = action
  switch (action.type) {
    case actionType.ACTIONTYPE_COUNT_INCREASE:
      console.log(payload.data, '参数')
      return {
        ...state,
        count: state.count + 1,
        avatar_url: payload.data.avatar_url
      }
    case actionType.ACTIONTYPE_COUNT_REDUCE:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}
