import _merge from 'lodash/merge'
import { increment, decrement, reset } from '../actions/counter'

export default (state = 0, action) => {
  switch (action.type) {
    case increment().type:
      return _merge({}, state, { value: state.value + 1 })
    case decrement().type:
      return _merge({}, state, { value: state.value - 1 })
    case reset().type:
      return _merge({}, state, { value: 0 })
    default:
      return state
  }
}
