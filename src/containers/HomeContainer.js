import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'
import * as userApi from '../api/user-api'
import store from '../store'

class HomeContainer extends Component {

  componentDidMount() {
    userApi.login()
  }

  render() {
    return(
      <Home user={this.props.user} />
    )
  }
}

export default connect(
  (store) => ({user: store.userState})
)(HomeContainer)
