import React, { Component }  from 'react'
import ReactRouter, { Link } from 'react-router'

import { AppBar, IconButton, IconMenu, MenuItem } from 'material-ui'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import NotificationIcon from 'material-ui/svg-icons/social/notifications'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

//import MobileTearSheet from '../../../MobileTearSheet'
import { Drawer, List, ListItem, Avatar } from 'material-ui'
import InboxIcon from 'material-ui/svg-icons/content/inbox'
import QuotesIcon from 'material-ui/svg-icons/action/description'
import BookingIcon from 'material-ui/svg-icons/action/book'
import CalendarIcon from 'material-ui/svg-icons/action/event'
import FinanceIcon from 'material-ui/svg-icons/action/account-balance'

class Header extends Component {
  state = {
    isOpen: false
  }

  handleToggle = (ev) => {
    ev.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <header>
        <AppBar
            title="Messages??"
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementRight={
              <div>
                <input type="text" />
                <IconButton className="whiteColor"
                    ><NotificationIcon /></IconButton>
                <IconMenu
                  iconButtonElement={
                  <IconButton className="whiteColor"><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                  <MenuItem primaryText="Refresh" />
                  <MenuItem primaryText="Help" />
                  <MenuItem primaryText="Sign out" />
                </IconMenu>
              </div>
            }
            style={{
              backgroundColor: '#2979ff'
            }}
        />
      <Drawer open={this.state.isOpen}>
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
      </header>
    )
  }
}

export default Header
