import React, { Component }  from 'react'

import { AppBar, IconButton, IconMenu, MenuItem } from 'material-ui'
import BurgerIcon from 'material-ui/svg-icons/navigation/menu'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import NotificationIcon from 'material-ui/svg-icons/social/notifications'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

class Header extends Component {

  render() {
    const { navIsOpen, toggleNav } = this.props
    const navIcon = navIsOpen ? <CloseIcon /> : <BurgerIcon />
    const titleValue = navIsOpen ? null : "Title?"
    const headerStyle = navIsOpen ? {
      marginLeft: "20%",
      width: "80%",
      backgroundColor: "#2979ff"
    } : {backgroundColor: "#2979ff"}

    const titleStyle = {
      display: "none"
    }

    return (
      <AppBar className="header" title={null} titleStyle={titleStyle} iconElementLeft={<IconButton onTouchTap={toggleNav}>{navIcon}</IconButton>} style={headerStyle}>
        <div className="header__title">
          <h1>{titleValue}</h1>
        </div>
        <div className="header__search">
          <button className="header__search-btn">
            <svg className="header__search-icon" fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </button>
          <input className type="text"/>
        </div>
        <div className="header__notification">
          <IconButton><NotificationIcon color="white" /></IconButton>
        </div>
        <div className="header__more">
          <IconMenu
            iconButtonElement={
            <IconButton><MoreVertIcon color="white" /></IconButton>
          }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
        </div>
      </AppBar>
    )
  }
}

export default Header
