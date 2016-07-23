import React from 'react'
import onWindowResize from '../decorators/onWindowResize'

import { AppBar, IconButton, IconMenu, MenuItem } from 'material-ui'
import SearchIcon from 'material-ui/svg-icons/action/search'
import BurgerIcon from 'material-ui/svg-icons/navigation/menu'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import NotificationIcon from 'material-ui/svg-icons/social/notifications'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

function Header(props) {
  const { navIsOpen, toggleNav } = props

  const navIcon = navIsOpen ? <CloseIcon /> : <BurgerIcon />
  const headerClass = navIsOpen ? 'header header--nav-open' : 'header'
  
  //const titleValue = navIsOpen ? null : 'Title?'
  const titleValue = 'Title?'
  const titleStyle = { display: 'none' }

  return (
    <AppBar className={headerClass} title={null} titleStyle={titleStyle} iconElementLeft={<IconButton onTouchTap={toggleNav}>{navIcon}</IconButton>}>
      <div className="header__title">
        <h1>{titleValue}</h1>
      </div>
      <div className="header__search">
        <IconButton className="header__search-btn">
          <SearchIcon color="white" />
        </IconButton>
        <input className type="text"/>
      </div>
      <div className="header__notification">
        <IconButton>
          <NotificationIcon color="white" />
        </IconButton>
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

export default Header
