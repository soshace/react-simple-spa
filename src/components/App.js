import React, { Component } from 'react'

// import Header from './Header'
// import Sidebar from './Sidebar'
// import BookingList from './BookingList'
// import Booking from './Booking'

import assign from 'object-assign'

class App extends Component {

  render() {
    return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li>Booking List</li>
          <li>Inbox</li>
          <li>Contact</li>
        </ul>
        <div className="content">

        </div>
      </div>
    )
  }
}

// <div>
//   <pre>{JSON.stringify(this.state, null, 2)}</pre>
// </div>
export default App
