import React from 'react'
import ReactRouter, { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Layouts
import MainLayout from './layouts/MainLayout'

// Pages
import HomeContainer from './containers/HomeContainer'
//import BookingListContainer from './containers/BookingListContainer'
//import BookingContainer from './components/BookingContainer'
// messages?

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={HomeContainer} />
    </Route>
  </Router>
)
