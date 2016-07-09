import React, { Component } from 'react'
import ReactRouter, { Link } from 'react-router'

//import MobileTearSheet from '../../../MobileTearSheet'
import { List, ListItem } from 'material-ui/List'
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar'

import InboxIcon from 'material-ui/svg-icons/content/inbox'
import QuotesIcon from 'material-ui/svg-icons/action/description'
import BookingIcon from 'material-ui/svg-icons/action/book'
import CalendarIcon from 'material-ui/svg-icons/action/event'
import FinanceIcon from 'material-ui/svg-icons/action/account-balance'

class Sidebar extends Component {
  state = {
    open: false
  }

  handleToggle = () => this.setState({open: !this.state.open})

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <div className="sidebar-top">
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
      </div>
    )
  }
}

export default Sidebar
