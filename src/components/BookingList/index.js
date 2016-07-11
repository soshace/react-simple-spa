import React, { Component }  from 'react'
import ReactRouter, { Link } from 'react-router'

class BookingList extends Component {
  render() {
    return (
      <ul>
        <li><Link to="booking">1 booking</Link></li>
        <li>2 booking</li>
        <li>3 booking</li>
      </ul>
    )
  }
}

export default BookingList
