import { GET_BOOKING_SUCCESS } from '../constants'

export function getBookingSuccess(bookingData) {
  return {
    type: GET_BOOKING_SUCCESS,
    payload: { bookingData }
  }
}
