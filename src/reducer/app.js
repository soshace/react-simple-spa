import { TOGGLE_NAV } from '../constants'

const initialState = {
    navIsOpen: false
}

export default (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case TOGGLE_NAV:
      return {...state, navIsOpen: !state.navIsOpen}
  }

  return state
}
