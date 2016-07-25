import { TOGGLE_NAV, DATA_FETCHING } from '../constants'

const initialState = {
  navIsOpen: false,
  dataReady: false
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case TOGGLE_NAV:
      return Object.assign({}, state, {navIsOpen: !state.navIsOpen})
    case DATA_FETCHING:
      return Object.assign({}, state, {dataReady: payload.status})
  }

  return state
}
