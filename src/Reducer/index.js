import Immutable from 'immutable'

const demoDefaultState = Immutable.fromJS({
  bool: true,
  number: 0,
  json: { prop: 'none' }
})

export const demoReducer = (state = demoDefaultState, action = {}) => {
  switch (action.type) {
    case 'UPDATE_DEMO_JSON':
      return state.set('json', action.json)
    default:
      return state
  }
}
