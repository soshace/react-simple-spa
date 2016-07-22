import { USER_LOGIN_SUCCESS } from '../constants'

export default (userData = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case USER_LOGIN_SUCCESS:
     return {...payload.userData}
  }

  return userData
}
