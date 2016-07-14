import React, { Component }  from 'react'
import onWindowResize from '../decorators/onWindowResize'

import { IconButton, Avatar, FloatingActionButton, MenuItem, FlatButton } from 'material-ui'

class Booking extends Component {
  state = {
    data: [],
    fetching: false,
    error: '',
    fetched: false
  }

  componentDidMount() {
    this.setState({
      fetching: true,
      error: null,
      fetched: false
    })

    const http = new XMLHttpRequest()
    const url = 'http://test.easybook.ie/api/get_booking'
    const params = 'token=' + this.props.token + '&booking_id=' + this.props.params.id

    http.open('POST', url, true)
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

    http.onreadystatechange = () => {
    	if (http.readyState == 4 && http.status == 200) {
    		const res = JSON.parse(http.responseText)
        console.log(res)

        this.setState({
          fetching: false,
          error: res.error,
          fetched: res.success,
          data: res.response
        })
    	}
    }
    http.send(params)
  }

  render() {
    const data  = this.state.data
    const name = data.contacts[0].first_name + ' ' + data.contacts[0].last_name

    return (
      <div>
        <div className="booking__summary">
          <div className="booking__summary-top">
            <div className="">
              <div className="">
                <Avatar src="https://placehold.it/50x50" size={50}/>
              </div>
              <div className="">
                <p>{name}</p>
                <small>Admin</small>
              </div>
            </div>
            <div className="">
              <FlatButton  label="My Account" labelStyle={ {color: "white"} } hoverColor="none" rippleColor="rgba(0, 0, 0, 0.5)" />
              <IconButton ><SettingsIcon color="white" /></IconButton>
            </div>
          </div>
          <div className="booking__summary-info">

          </div>
        </div>
        <div className="booking__messages">

        </div>
      </div>
    )
  }
}

export default onWindowResize(Booking)
