import React, { Component } from 'react'
import { AppBar } from 'material-ui'

class Header extends Component {
  render() {
    return (
      <AppBar
          title="Messages??"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          style={{
            backgroundColor: '#2979ff'
          }}
      />
    )
  }
}

export default Header
