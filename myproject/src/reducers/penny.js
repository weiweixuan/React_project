import { getPennyType } from '../actionTypes/penny'
const pennyState = {
  title: 'none'
}

export default function(state = pennyState, action) {
  const { type, payload } = action
  switch (type) {
    case getPennyType:
      console.log('reducer里的值')
      return {
        ...state,
        title: payload
      }
    default:
      return state
  }
}
