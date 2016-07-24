import React, { Component } from 'react'
import { connect } from 'react-redux'
import BookingList from '../components/BookingList'
import * as bookingListApi from '../api/booking-list'
import store from '../store'

class BookingListContainer extends Component {

  componentDidMount() {
    bookingListApi.getBookings()
  }

  render() {
    return(
      <BookingList bookings={this.props.bookings} />
    )
  }
}

export default connect(
  (store) => ({bookings: store.bookingList})
)(BookingListContainer)
