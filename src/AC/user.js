import { SAVE_TOKEN } from '../constants'

export function saveToken(token) {
  return {
    type: SAVE_TOKEN,
    payload: { token }
  }
}
