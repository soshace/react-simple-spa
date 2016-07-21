import { SAVE_TOKEN } from '../constants'

export default (token = '', action) => {
  const { type, payload } = action

  switch (type) {
    case SAVE_TOKEN:
     return payload.token
  }
}
