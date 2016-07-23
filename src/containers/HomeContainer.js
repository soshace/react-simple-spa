import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'
import store from '../store'

class HomeContainer extends Component {
  render() {
    return(
      <Home user={this.props.user} />
    )
  }
}

export default connect(
  (store) => ({user: store.userState})
)(HomeContainer)
