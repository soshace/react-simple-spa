import React, { Component }  from 'react'

import { AppBar, IconButton, IconMenu, MenuItem } from 'material-ui'
import SearchIcon from 'material-ui/svg-icons/action/search'
import BurgerIcon from 'material-ui/svg-icons/navigation/menu'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import NotificationIcon from 'material-ui/svg-icons/social/notifications'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

class Header extends Component {

  render() {
    const { navIsOpen, toggleNav } = this.props
    const navIcon = navIsOpen ? <CloseIcon /> : <BurgerIcon />

    const titleValue = navIsOpen ? null : "Title?"
    const titleStyle = {
      display: "none"
    }

    let searchBtnStyle = null
    let headerStyle = { backgroundColor: "#2979ff" }

    if (window.innerWidth > 699) {
      searchBtnStyle = {
        display: "none"
      }

      headerStyle = navIsOpen ? {
        marginLeft: "30%",
        width: "70%",
        backgroundColor: "#2979ff"
      } : {backgroundColor: "#2979ff"}
    }

    // window.onresize = function() {
    //   console.log(window.innerWidth)
    //
    // }

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

export default Header
