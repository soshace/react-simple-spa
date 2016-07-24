import React, { Component } from 'react'
import { connect } from 'react-redux'
import Booking from '../components/Booking'
import * as bookingApi from '../api/booking'
import store from '../store'

class BookingContainer extends Component {

  componentDidMount() {
    bookingApi.getBooking(this.props.params.bookingId)
  }

  render() {
    const { booking } = this.props

    return (
      <Booking booking={booking} />
    )
  }
}

export default connect(
  (store) => ({booking: store.booking})
)(BookingContainer)
