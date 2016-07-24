import { GET_BOOKING_SUCCESS } from '../constants'

export default (bookingData = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_BOOKING_SUCCESS: {
      return Object.assign({}, payload.bookingData)
    }
  }

  return bookingData
}
