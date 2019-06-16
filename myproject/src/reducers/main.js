import actionType from '../actionTypes/main'

const state_main = {
  count: 0
}

export default function main(state = state_main, action) {
  switch (action.type) {
    case actionType.ACTIONTYPE_COUNT_INCREASE:
      return {
        ...state,
        count: state.count + 1
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
