import React from 'react'
import ReactRouter, { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/App'
import HomeContainer from './containers/HomeContainer'
import BookingListContainer from './containers/BookingListContainer'
import BookingContainer from './containers/BookingContainer'
// messages?

export default (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={HomeContainer} />

      <Route path="bookings">
        <IndexRoute component={BookingListContainer} />
        <Route path=":bookingId" component={BookingContainer} />
      </Route>
    </Route>
  </Router>
)
