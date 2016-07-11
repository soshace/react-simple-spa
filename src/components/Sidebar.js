import React, { Component }  from 'react'
import ReactRouter, { Link } from 'react-router'

//import MobileTearSheet from '../../../MobileTearSheet'
import { Drawer, List, ListItem, Avatar } from 'material-ui'
import InboxIcon from 'material-ui/svg-icons/content/inbox'
import QuotesIcon from 'material-ui/svg-icons/action/description'
import BookingIcon from 'material-ui/svg-icons/action/book'
import CalendarIcon from 'material-ui/svg-icons/action/event'
import FinanceIcon from 'material-ui/svg-icons/action/account-balance'

class Sidebar extends Component {
  render() {
    const sidebarStyle = navIsOpen ? {width: "20%"} : null

    return (
      <Drawer containerStyle={sidebarStyle} open={navIsOpen}>
        <div>
          <Avatar src="https://placehold.it/50x50" size={50}/>
          <p>Name Surname</p>
          </div>
          <List>
            <ListItem primaryText="Inbox" containerElement={<Link to="booking-list" />} leftIcon={<InboxIcon />} />
            <ListItem primaryText="Quotes" leftIcon={<QuotesIcon />} />
            <ListItem primaryText="Bookings" leftIcon={<BookingIcon />} />
            <ListItem primaryText="Calendar" leftIcon={<CalendarIcon />} />
            <ListItem primaryText="Finance" leftIcon={<FinanceIcon />} />
          </List>
      </Drawer>
    )
  }

export default Header
