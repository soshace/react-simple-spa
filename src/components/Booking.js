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

import CheckIcon from 'material-ui/svg-icons/action/check-circle'

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
    const messagesBlock = document.querySelector('.messages')
    const bookingBlock = document.querySelector('.booking')
    console.log(messagesBlock)
    console.log(bookingBlock)
    bookingBlock.classList.toggle('invisible')
    messagesBlock.classList.toggle('messages--active')
  }

  render() {
    const { isMobile } = this.props
    const data  = this.state.data
    const name = data.contacts[0].first_name + ' ' + data.contacts[0].last_name
    const role = data.contacts[0].role || 'No Info'
    const date = data.event_date || 'No Info'
    const place = data.venue || 'No Info'
    const eventType = data.event_type || 'No Info'
    // ???
    const paid = 'Paid ' + data.deposit + ' of ' + data.total  || 'No Info'
    const daysLeft = Math.round((new Date(date) - new Date()) / 1000 / 60 / 60 / 24) + ' Days Left'  || 'No Info'

    const listOfMessages = data.notes.map((message, i) => {
      const imgSrc = "https://placehold.it/50x50"
      const text = message.note
      const time = message.date_created
      const messageClass = i%2 ? 'messages__item messages__item--reverse' : 'messages__item'

      return (
        <li className={messageClass}>
          <div className="messages__ava">
            <Avatar src="https://placehold.it/50x50" size={50}/>
          </div>
          <div className="messages__text">
            <p>{text}</p>
            <p>{time}</p>
          </div>
          <div className="messages__actions">
            <CheckIcon color="green"/>
          </div>
        </li>
      )
    })

    return (
      <div>
        <div className="booking">
          <div className="booking__top">
            <div className="booking__nav">
              <Link to="/bookings"><IconButton><BackIcon color="white" /></IconButton></Link>
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
              <IconButton onTouchTap={this.showMessages}><MessagesIcon color="white" /></IconButton>
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
          <div className="messages__header">
            Header
          </div>
          <ul className="messages__list">
            {listOfMessages}
          </ul>
          <div className="messages__input">
            INPUT
          </div>
        </div>
      </div>
    )
  }
}

export default onWindowResize(Booking)
