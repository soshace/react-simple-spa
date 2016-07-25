import { TOGGLE_NAV, DATA_FETCHING } from '../constants'

export function toggleNav() {
  return {
    type: TOGGLE_NAV
  }
}

export function dataFetching(status) {
  return {
    type: DATA_FETCHING,
    payload: { status }
  }
}
