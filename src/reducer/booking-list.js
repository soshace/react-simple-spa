import { GET_BOOKING_LIST_SUCCESS } from '../constants'

export default (bookingList = [], action) => {
  const { type, payload } = action

  switch (type) {
    case GET_BOOKING_LIST_SUCCESS: {
      return Object.assign([], payload.bookingList)
    }
  }

  return bookingList
}
