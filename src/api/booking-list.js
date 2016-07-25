import store from '../store'
import { getBookingListSuccess } from '../AC/booking-list'
import { dataFetching } from '../AC/app'

export function getBookings() {
  const http = new XMLHttpRequest()
  const url = 'http://test.easybook.ie/api/get_list'
  const token = store.getState().userState.token
  const params = 'band_id=6&type=enquiry&mode=available&token' + token

  http.open('POST', url, true)
  // store.dispatch(dataFetching(true))

  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

  http.onreadystatechange = () => {
    if (http.readyState == 4 && http.status == 200) {
      const res = JSON.parse(http.responseText)

      if (!res.error && res.success) {
        const bookings = res.response
        let dates = []

        bookings.forEach((booking, i) => {
          let bookDate = booking.enquiry_date.split(' ')[0]

          if (i === 0) {
            dates.push({
              date: bookDate,
              list: []
            })
          } else {
            if (!(
              dates.some((item) => {
                return item.date === bookDate
              })
            )) {
              dates.push({
                date: bookDate,
                list: []
              })
            }
          }
        })

        bookings.forEach((booking, i) => {
          let bookDate = booking.enquiry_date.split(' ')[0]
          dates.forEach((item, i) => {
            if (item.date === bookDate) {
              dates[i].list.push(booking)
            }
          })
        })

        dates.sort((a, b) => new Date(a.date) - new Date(b.date))
        store.dispatch(getBookingListSuccess(dates.slice(400, 421)))
      }
    }
  }
  http.send(params)
}
