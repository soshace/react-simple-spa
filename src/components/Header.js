import React, { Component }  from 'react'
import onWindowResize from '../decorators/onWindowResize'

import { AppBar, IconButton, IconMenu, MenuItem } from 'material-ui'
import SearchIcon from 'material-ui/svg-icons/action/search'
import BurgerIcon from 'material-ui/svg-icons/navigation/menu'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import NotificationIcon from 'material-ui/svg-icons/social/notifications'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

class Header extends Component {

  render() {
    const { navIsOpen, toggleNav, isMobile } = this.props

    const navIcon = navIsOpen ? <CloseIcon /> : <BurgerIcon />

    const titleValue = navIsOpen ? null : "Title?"
    const titleStyle = { display: "none" }

    let searchBtnStyle = isMobile ? null : { display: "none" }

    let headerStyle = { backgroundColor: "#2979ff", boxShadow: "none"}
    if (navIsOpen && !isMobile) {
      headerStyle.marginLeft = "20%"
      headerStyle.width = "80%"
    }
    if (!isMobile) headerStyle.boxShadow = "rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px"

    return (
      <AppBar className="header" title={null} titleStyle={titleStyle} iconElementLeft={<IconButton onTouchTap={toggleNav}>{navIcon}</IconButton>} style={headerStyle}>
        <div className="header__title">
          <h1>{titleValue}</h1>
        </div>
        <div className="header__search">
          <IconButton style={searchBtnStyle}><SearchIcon color="white" /></IconButton>
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

export default onWindowResize(Header)
