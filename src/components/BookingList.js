import React  from 'react'
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

function BookingList(props) {
  const bookings = props.bookings

  const listItems = bookings.map((item) => {
    let id = +new Date()
    const commonDate = new Date(item.date).toUTCString().slice(0, 16)

    item.list.forEach((booking) => {
      id+=booking.id
    })

    const listOfBookings = item.list.map((booking) => {
      const curDate = new Date(booking.enquiry_date.replace(' ', 'T'))
      const date = curDate.toUTCString().slice(0, 16)
      const time = booking.enquiry_date.slice(10, 16)

      return (
        <li key={booking.id} className="booking-list__booking">
          <div className="booking-list__img">
            <Link to={"/bookings/" + booking.id}>
              <Avatar src="https://placehold.it/50x50"/>
            </Link>
          </div>
          <div className="booking-list__main">
            <Link to={"/bookings/" + booking.id}>
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
              <IconButton><MoreVertIcon color="grey" /></IconButton>
            </div>
          </div>
        </li>
      )
    })


    return (
      <li key={id} className="booking-list__item">
        <p className="booking-list__item-date">{commonDate}</p>
        <ul className="booking-list__item-list">
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
          <AvailableIcon />
        </li>
        <li className="booking-list__tabs-item">
          <span className="booking-list__tabs-text">
            Unavailable
            <span className="booking-list__tabs-badge">622</span>
          </span>
          <UnavailableIcon />
        </li>
        <li className="booking-list__tabs-item">
          <span className="booking-list__tabs-text">
            Archive
            <span className="booking-list__tabs-badge">3,234</span>
          </span>
          <ArchiveIcon />
        </li>
        <li className="booking-list__tabs-item">
          <span className="booking-list__tabs-text">
            Starred
            <span className="booking-list__tabs-badge">525</span>
          </span>
          <StarIcon />
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

export default BookingList
