import React, { Component }  from 'react'

class Booking extends Component {
  render() {

    return (
      <ul>
        <li>id of booking: {this.props.params.id}</li>
        <li>token: {this.props.token}</li>
        <li>1 message</li>
        <li>2 message</li>
        <li>3 message</li>
      </ul>
    )
  }
}

export default Booking
