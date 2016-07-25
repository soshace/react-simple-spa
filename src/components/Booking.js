import React, { Component }  from 'react'
import ReactRouter, { Link } from 'react-router'
import onWindowResize from '../decorators/onWindowResize'
import Loading from './Loading'

import { IconButton, Avatar, List, ListItem, TextField } from 'material-ui'

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
import SendIcon from 'material-ui/svg-icons/content/send'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import MoreHorizIcon from 'material-ui/svg-icons/navigation/more-horiz'

// for form more
import SmileIcon from 'material-ui/svg-icons/editor/insert-emoticon'
import TemplatesIcon from 'material-ui/svg-icons/action/speaker-notes'
import AttachIcon from 'material-ui/svg-icons/editor/attach-file'
import ListBulletedIcon from 'material-ui/svg-icons/editor/format-list-bulleted'
import TimerIcon from 'material-ui/svg-icons/av/av-timer'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import AddIcon from 'material-ui/svg-icons/content/add'
import EditIcon from 'material-ui/svg-icons/editor/mode-edit'


class Booking extends Component {

  showMessages = () => {
    if (this.props.isMobile) {
      const messagesBlock = document.querySelector('.messages')
      const bookingBlock = document.querySelector('.booking')

      bookingBlock.classList.toggle('invisible')
      messagesBlock.classList.toggle('messages--active')
    }
  }

  showMessageTemplates = () => {
    const templates = document.querySelector('.messages__submit-templates')
    templates.classList.toggle('invisible')
  }

  render() {
    const { booking } = this.props

    if (!booking.id) {
      return <Loading />
    }

    const name = booking.contacts[0].first_name + ' ' + booking.contacts[0].last_name
    const role = booking.contacts[0].role || 'No Info'
    const date = new Date(booking.event_date).toUTCString().slice(0, 16) || 'No Info'
    const place = booking.venue || 'No Info'
    const eventType = booking.event_type || 'No Info'
    const workPackage = 'Band & DJ Package'
    const paid = 'Paid ' + booking.deposit + ' of ' + booking.total  || 'No Info'
    const daysLeft = Math.round((new Date(date) - new Date()) / 1000 / 60 / 60 / 24) + ' Days Left'  || 'No Info'
    let notesPart = 'No info'
    if (booking.notes.length > 0) {
      notesPart = booking.notes[booking.notes.length - 1].note
    }
    const inputStyles = {
      underlineStyle: {
        borderColor: '#2074fe',
      },
      floatingLabelStyle: {
        color: '#4286fe',
      },
      floatingLabelFocusStyle: {
        color: '#4286fe',
      },
    }

    const listOfMessages = booking.notes.map((message, i) => {
      const imgSrc = message.type === 'system' ? 'https://pp.vk.me/c10408/u4172580/-6/x_ee97448e.jpg' : 'https://placehold.it/50x50'
      const text = message.note
      const date = new Date(message.date_created.replace(' ', 'T'))
      const dayOfTheWeek = date.toUTCString().slice(0, 3)
      const time = dayOfTheWeek + ' ' + message.date_created.split(' ')[1].slice(0, 5)
      const messageClass = message.type === 'system' ? 'messages__item' : 'messages__item messages__item--reverse'

      return (
        <li key={message.note_id} className={messageClass}>
          <div className="messages__ava">
            <Avatar src={imgSrc} />
          </div>
          <div className="messages__content">
            <p className="messages__text">{text}</p>
            <p className="messages__time">{time}</p>
            <div className="messages__actions">
              <CheckIcon color="green"/>
            </div>
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
            <div className="booking__contacts">
              <div className="booking__contacts-item">
                <Avatar src="https://placehold.it/40x40" />
              </div>
              <div className="booking__contacts-item">
                <Avatar src="https://placehold.it/40x40" />
              </div>
              <div className="booking__contacts-more">
                <IconButton style={{ borderRadius: "50%", backgroundColor: "#2979ff", width: 40, height: 40, padding: 10 }} iconStyle={{ width: 20, height: 20 }}>
                  <MoreHorizIcon color="white" />
                </IconButton>
              </div>
            </div>
            <div className="booking__user">
              <div className="booking__user-ava">
                <Avatar src="https://placehold.it/60x60" />
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
              <ListItem primaryText={workPackage} leftIcon={<WorkIcon />} />
              <ListItem primaryText="???" leftIcon={<ContactIcon />} />
              <ListItem primaryText={paid} leftIcon={<PayIcon />} />
              <ListItem primaryText={daysLeft} leftIcon={<DaysLeftIcon />} />
              <ListItem primaryText={notesPart} leftIcon={<NoteIcon />} />
              <ListItem primaryText="Team" leftIcon={<TeamIcon />} />
              <ListItem primaryText="Timeline" leftIcon={<TimeIcon />} />
              <ListItem primaryText="???" leftIcon={<RefIcon />} />
            </List>
          </div>
        </div>

        <div className="messages">
          <div className="messages__inner">
            <div className="messages__header">
              <IconButton onTouchTap={this.showMessages}>
                <BackIcon color="white" />
              </IconButton>
              <IconButton>
                <CloseIcon color="white" />
              </IconButton>
            </div>
            <ul className="messages__list">
              {listOfMessages}
            </ul>
            <form className="messages__form">
              <div className="messages__more">
                <IconButton style={{ borderRadius: "50%", backgroundColor: "#9babb3" }}>
                  <MoreVertIcon color="white" />
                </IconButton>
              </div>
              <div className="messages__input">
                <TextField className="messages__input-desktop"
                  floatingLabelText="Write Message"
                  underlineStyle={inputStyles.underlineStyle}
                  underlineFocusStyle={inputStyles.underlineStyle}
                  floatingLabelStyle={inputStyles.floatingLabelStyle}
                  floatingLabelFocusStyle={inputStyles.floatingLabelFocusStyle}
                  style={{
                    width: '100%'
                  }}
                />
              <input className="messages__input-mobile" type="text" placeholder="Write Message"/>
              </div>
              <div className="messages__submit">
                <div className="messages__submit-templates invisible">
                  <div className="messages__submit-templates-input">
                    <IconButton onTouchTap={this.showMessageTemplates}>
                      <TemplatesIcon />
                    </IconButton>
                    <p>Message Templates</p>
                    <IconButton>
                      <AddIcon />
                    </IconButton>

                  </div>
                  <ul className="messages__submit-templates-items">
                    <li>
                      <span>Hello</span>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </li>
                    <li>
                      <span>Goodbye</span>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </li>
                    <li>
                      <span>Thank you</span>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </li>
                    <li>
                      <span>How are you?</span>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </li>
                    <li>
                      <span>I have sent you a message</span>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </li>
                  </ul>
                </div>
                <div className="messages__submit-more">
                  <IconButton>
                    <SmileIcon />
                  </IconButton>
                  <IconButton onTouchTap={this.showMessageTemplates}>
                    <TemplatesIcon />
                  </IconButton>
                  <IconButton>
                    <AttachIcon />
                  </IconButton>
                  <IconButton>
                    <ListBulletedIcon />
                  </IconButton>
                  <IconButton>
                    <TimerIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </div>
                <div className="messages__submit-btn">
                  <IconButton>
                    <SendIcon />
                  </IconButton>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default onWindowResize(Booking)
