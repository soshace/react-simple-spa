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

    const inputStyle = {
      display: "inlineBlock",
      marginBottom: 10,
      padding: 10,
      paddingLeft: 50,
      verticalAlign: "middle",
      border: "none",
      borderRadius: 5,
      backgroundColor: "#448aff",
      color: "white"
        // fontFamily: "monospace",
        // fontSize: "32",
    }

    const headerStyle = navIsOpen ? {
      marginLeft: "20%",
      width: "80%",
      backgroundColor: '#2979ff'
    } : null

    return (
        <AppBar
          title="Messages??"
          iconElementLeft={<IconButton onTouchTap={toggleNav}>{navIcon}</IconButton>}
          iconElementRight={
            <div>
              <input style={inputStyle} type="text" value="Search"/>
              <IconButton><NotificationIcon color="white" /></IconButton>
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
          }
          style={headerStyle}
        />
    )
  }
}

export default Header
