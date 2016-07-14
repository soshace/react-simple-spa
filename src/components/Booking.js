import React, { Component }  from 'react'
import ReactRouter, { Link } from 'react-router'
import onWindowResize from '../decorators/onWindowResize'

import { IconButton, Avatar, List, ListItem } from 'material-ui'

import BackIcon from 'material-ui/svg-icons/hardware/keyboard-backspace'
import CloseIcon from 'material-ui/svg-icons/navigation/close'

import PhoneIcon from 'material-ui/svg-icons/communication/phone'
import NotificationIcon from 'material-ui/svg-icons/social/notifications'
import MessagesIcon from 'material-ui/svg-icons/communication/email'

import CalendarIcon from 'material-ui/svg-icons/action/event'
import PlaceIcon from 'material-ui/svg-icons/maps/place'
import EventIcon from 'material-ui/svg-icons/action/assignment'
import WorkIcon from 'material-ui/svg-icons/action/work'
import ContactIcon from 'material-ui/svg-icons/action/perm-contact-calendar'
import PayIcon from 'material-ui/svg-icons/action/payment'
import DaysLeftIcon from 'material-ui/svg-icons/action/book'
import NoteIcon from 'material-ui/svg-icons/notification/event-note'
import TeamIcon from 'material-ui/svg-icons/social/group'
import TimeIcon from 'material-ui/svg-icons/device/access-time'
import RefIcon from 'material-ui/svg-icons/action/bookmark'

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
        console.log(res.response)

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

  showMessages = () => {

  }

  render() {
    const data  = this.state.data
    const name = data.contacts[0].first_name + ' ' + data.contacts[0].last_name
    const role = data.contacts[0].role
    const date = data.event_date
    const place = data.venue
    const eventType = data.event_type
    // ???
    const paid = 'Paid ' + data.deposit + ' of ' + data.total
    const daysLeft = Math.round((new Date(date) - new Date()) / 1000 / 60 / 60 / 24) + ' Days Left'

    return (
      <div>
        <div className="booking">
          <div className="booking__top">
            <div className="booking__nav">
              <IconButton onTouchTap={this.showMessages}><BackIcon color="white" /></IconButton>
              <IconButton><CloseIcon color="white" /></IconButton>
            </div>
            <div className="booking__user">
              <div className="booking__user-ava">
                <Avatar src="https://placehold.it/50x50" size={50}/>
              </div>
              <div className="booking__user-name">
                <p>{name}</p>
                <small>{role}</small>
              </div>
            </div>
            <div className="booking__actions">
              <IconButton><PhoneIcon color="white" /></IconButton>
              <IconButton><MessagesIcon color="white" /></IconButton>
              <IconButton><NotificationIcon color="white" /></IconButton>
            </div>
          </div>
          <div className="booking__info">
            <List>
              <ListItem primaryText={date} leftIcon={<CalendarIcon />} />
              <ListItem primaryText={place} leftIcon={<PlaceIcon />} />
              <ListItem primaryText={eventType} leftIcon={<EventIcon />} />
              <ListItem primaryText="???" leftIcon={<WorkIcon />} />
              <ListItem primaryText="???" leftIcon={<ContactIcon />} />
              <ListItem primaryText={paid} leftIcon={<PayIcon />} />
              <ListItem primaryText={daysLeft} leftIcon={<DaysLeftIcon />} />
              <ListItem primaryText="Notes???" leftIcon={<NoteIcon />} />
              <ListItem primaryText="Team???" leftIcon={<TeamIcon />} />
              <ListItem primaryText="Timeline???" leftIcon={<TimeIcon />} />
              <ListItem primaryText="Ref???" leftIcon={<RefIcon />} />
            </List>
          </div>
        </div>

        <div className="messages">
          CHAT
        </div>
      </div>
    )
  }
}

export default onWindowResize(Booking)
