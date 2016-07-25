import store from '../store'
import { getBookingSuccess } from '../actions/booking'

export function getBooking(id) {
  const http = new XMLHttpRequest()
  const url = 'http://test.easybook.ie/api/get_booking'
  const token = store.getState().userState.token
  const params = 'token=' + token + '&booking_id=' + id

  http.open('POST', url, true)

  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

  http.onreadystatechange = () => {
    if (http.readyState == 4 && http.status == 200) {
      const res = JSON.parse(http.responseText)
      if (!res.error && res.success) {
        store.dispatch(getBookingSuccess(res.response))
      }

    }
  }
  http.send(params)
}
