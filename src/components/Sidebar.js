import React from 'react'
import ReactRouter, { Link } from 'react-router'
import onWindowResize from '../decorators/onWindowResize'

import { Drawer, Avatar, MenuItem, IconButton, FlatButton } from 'material-ui'
import SettingsIcon from 'material-ui/svg-icons/action/settings'
import InboxIcon from 'material-ui/svg-icons/content/inbox'
import QuotesIcon from 'material-ui/svg-icons/action/description'
import BookingIcon from 'material-ui/svg-icons/action/book'
import CalendarIcon from 'material-ui/svg-icons/action/event'
import FinanceIcon from 'material-ui/svg-icons/action/account-balance'

function Sidebar(props) {
  const { navIsOpen, toggleNav, user, isMobile } = props

  const userName = props.user.first_name + ' ' + props.user.last_name
  const userType = props.user.musician_type
  const sidebarClass = navIsOpen ? 'sidebar sidebar--nav-open' : 'sidebar'
  
  const dockedProp = isMobile ? false : true

  return (
    <Drawer className={sidebarClass} docked={dockedProp} open={navIsOpen} onRequestChange={toggleNav}>
      <div className="sidebar__top">
        <div className="sidebar__top-user">
          <div className="sidebar__top-img">
            <Avatar src="https://pp.vk.me/c10408/u4172580/-6/x_ee97448e.jpg" size={50}/>
          </div>
          <div className="sidebar__top-name">
            <p>{userName}</p>
            <small>{userType}</small>
          </div>
        </div>
        <div className="sidebar__top-btn">
          <FlatButton className="sidebar__top-btn-acc" label="My Account" labelStyle={ {color: "white"} } hoverColor="none" rippleColor="rgba(0, 0, 0, 0.5)" />
          <IconButton className="sidebar__top-btn-set"><SettingsIcon color="white" /></IconButton>
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

export default onWindowResize(Sidebar)
