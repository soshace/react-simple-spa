import React, { Component }  from 'react'
import ReactRouter, { Link } from 'react-router'
import onWindowResize from '../decorators/onWindowResize'
import Loading from './Loading'

import { IconButton, Avatar, FloatingActionButton } from 'material-ui'
import AvailableIcon from 'material-ui/svg-icons/notification/event-available'
import UnavailableIcon from 'material-ui/svg-icons/notification/event-busy'
import ArchiveIcon from 'material-ui/svg-icons/content/archive'
import StarIcon from 'material-ui/svg-icons/toggle/star'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import ContentAdd from 'material-ui/svg-icons/content/add'

class BookingList extends Component {
  state = {
    list: [],
    fetching: false,
    error: '',
    fetched: false
  }

  componentDidMount() {
    this.setState({
      fetching: true,
      error: '',
      fetched: false
    })

    const http = new XMLHttpRequest()
    const url = 'http://test.easybook.ie/api/get_list'
    const params = 'band_id=6&type=enquiry&mode=available&token' + this.props.token

    http.open('POST', url, true)
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

    http.onreadystatechange = () => {
    	if (http.readyState == 4 && http.status == 200) {
    		const res = JSON.parse(http.responseText)
        const bookings = res.response
        let dates = []

        bookings.forEach((booking, i) => {
          let bookDate = booking.date.split('/')
          bookDate = bookDate[2] + '-' + bookDate[1] + '-' + bookDate[0]

          if (i === 0) {
            dates.push({
              date: bookDate,
              bookings: []
            })
          } else {
            if (!(
              dates.some((item) => {
                return item.date === bookDate
              })
            )) {
              dates.push({
                date: bookDate,
                bookings: []
              })
            }
          }
        })

        bookings.forEach((booking, i) => {
          let bookDate = booking.date.split('/')
          bookDate = bookDate[2] + '-' + bookDate[1] + '-' + bookDate[0]
          dates.forEach((item, i) => {
            if (item.date === bookDate) {
              dates[i].bookings.push(booking)
            }
          })
        })

        dates.sort((a, b) => new Date(a.date) - new Date(b.date))

        this.setState({
          fetching: false,
          error: res.error,
          fetched: res.success,
          list: dates.slice(1, 21) // take only 20 for now
        })
    	}
    }
    http.send(params)
  }

  render() {
    if (!this.state.fetched || this.state.fetching) {
      return (
        <Loading />
      )
    }

    const { isMobile } = this.props
    const bookingsByDates = this.state.list
    const moreBtn = isMobile ? null : <IconButton><MoreVertIcon color="grey" /></IconButton>
    const tabBtnStyle = isMobile ? null : { display: "none" }
    const avaSize = isMobile ? 50 : 70

    const listItems = bookingsByDates.map((item) => {
      let id = ''
      item.bookings.forEach((booking) => {
        id+=booking.id
      })

      const listOfBookings = item.bookings.map((booking) => {
        const curDate = new Date(booking.enquiry_date.replace(' ', 'T'))
        const time = curDate.getHours() + ':' + curDate.getMinutes()
        const date = curDate.toUTCString().slice(0, 16)

        return (
          <li key={booking.id}>
            <div className="booking-list__img">
              <Link to={'/bookings/' + booking.id}>
                <Avatar src="https://placehold.it/50x50" size={avaSize}/>
              </Link>
            </div>
            <div className="booking-list__main">
              <Link to={'/bookings/' + booking.id}>
                <p><strong>{booking.first_name + ' ' + booking.last_name}</strong></p>
                <p>{date}</p>
                <p>{booking.venue}</p>
              </Link>
            </div>
            <div className="booking-list__more">
              <div className="booking-list__time">
                {time}
              </div>
              <div className="booking-list__star">
                <StarIcon color="#ffca28"/>
              </div>
              <div className="booking-list__more-btn">
                {moreBtn}
              </div>
            </div>
          </li>
        )
      })


      return (
        <li key={id} className="booking-list__item">
          <p>{item.date}</p>
          <ul>
            {listOfBookings}
          </ul>
        </li>
      )
    })

    return (
      <div className="booking-list">
        <ul className="booking-list__tabs">
          <li className="booking-list__tabs-item booking-list__tabs-item--active">
            <span className="booking-list__tabs-text">
              Available
              <span className="booking-list__tabs-badge">144</span>
            </span>
            <AvailableIcon style={tabBtnStyle} />
          </li>
          <li className="booking-list__tabs-item">
            <span className="booking-list__tabs-text">
              Unavailable
              <span className="booking-list__tabs-badge">622</span>
            </span>
            <UnavailableIcon style={tabBtnStyle} />
          </li>
          <li className="booking-list__tabs-item">
            <span className="booking-list__tabs-text">
              Archive
              <span className="booking-list__tabs-badge">3,234</span>
            </span>
            <ArchiveIcon style={tabBtnStyle} />
          </li>
          <li className="booking-list__tabs-item">
            <span className="booking-list__tabs-text">
              Starred
              <span className="booking-list__tabs-badge">525</span>
            </span>
            <StarIcon style={tabBtnStyle} />
          </li>
        </ul>

        <ul className="booking-list__list">
          {listItems}
        </ul>

        <div className="booking-list__floating-btn">
          <FloatingActionButton backgroundColor="#f4511e">
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </div>
    )
  }
}

export default onWindowResize(BookingList)
