import { GET_BOOKING_LIST_SUCCESS } from '../constants'

export function getBookingListSuccess(bookingList) {
  return {
    type: GET_BOOKING_LIST_SUCCESS,
    payload: { bookingList }
  }
}
