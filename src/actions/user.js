import { USER_LOGIN_SUCCESS } from '../constants'

export function userLoginSuccess(userData) {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: { userData }
  }
}
