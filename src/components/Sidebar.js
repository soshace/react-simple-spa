import React, { Component }  from 'react'
import ReactRouter, { Link } from 'react-router'
import onWindowResize from '../decorators/onWindowResize'

//import MobileTearSheet from '../../../MobileTearSheet'
import { Drawer, Avatar, MenuItem, IconButton, FlatButton } from 'material-ui'
import SettingsIcon from 'material-ui/svg-icons/action/settings'
import InboxIcon from 'material-ui/svg-icons/content/inbox'
import QuotesIcon from 'material-ui/svg-icons/action/description'
import BookingIcon from 'material-ui/svg-icons/action/book'
import CalendarIcon from 'material-ui/svg-icons/action/event'
import FinanceIcon from 'material-ui/svg-icons/action/account-balance'

class Sidebar extends Component {

  render() {
    const { navIsOpen, toggleNav, isMobile } = this.props

    let accountBtnColor = isMobile ? null : "#2979ff"
    let settingsBtnStyle = isMobile ? null : {
      backgroundColor: "#2979ff",
      width: 38,
      height: 36,
      padding: 0,
      borderRadius: 2
    }
    let sidebarStyle = !isMobile && navIsOpen ? { width: "20%" } : null
    let dockedProp = isMobile ? false : true

    return (
      <Drawer className="sidebar" docked={dockedProp} open={navIsOpen} containerStyle={sidebarStyle} onRequestChange={toggleNav}>
        <div className="sidebar__top">
          <div className="sidebar__top-user">
            <div className="sidebar__top-img">
              <Avatar src="https://placehold.it/50x50" size={50}/>
            </div>
            <div className="sidebar__top-name">
              <p>Name Surname</p>
              <small>Admin</small>
            </div>
          </div>
          <div className="sidebar__top-btn">
            <FlatButton backgroundColor={accountBtnColor} label="My Account" labelStyle={ {color: "white"} } hoverColor="none" rippleColor="rgba(0, 0, 0, 0.5)" />
            <IconButton style={settingsBtnStyle}><SettingsIcon color="white" /></IconButton>
          </div>
        </div>
        <div className="sidebar__nav">
          <MenuItem primaryText="Inbox" onTouchTap={toggleNav} containerElement={<Link to="/bookings" />} leftIcon={<InboxIcon />} />
          <MenuItem primaryText="Quotes" onTouchTap={toggleNav} leftIcon={<QuotesIcon />} />
          <MenuItem primaryText="Bookings" onTouchTap={toggleNav} leftIcon={<BookingIcon />} />
          <MenuItem primaryText="Calendar" onTouchTap={toggleNav} leftIcon={<CalendarIcon />} />
          <MenuItem primaryText="Finance" onTouchTap={toggleNav} leftIcon={<FinanceIcon />} />
        </div>
      </Drawer>
    )
  }
}

export default onWindowResize(Sidebar)
