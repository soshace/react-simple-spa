import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as userApi from '../api/user'
import store from '../store'
import { toggleNav } from '../AC/app'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

class App extends Component {

  componentDidMount() {
    userApi.login()
  }

  render() {
    const { navIsOpen, toggleNav, user } = this.props
    const mainClass = navIsOpen ? 'content content--nav-open' : 'content'

    return(
      <div>
        <Sidebar user={user} navIsOpen={navIsOpen} toggleNav={toggleNav} />
        <Header navIsOpen={navIsOpen} toggleNav={toggleNav} />
        <main className={mainClass}>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default connect(
  (store) => ({navIsOpen: store.appState.navIsOpen, user: store.userState}), { toggleNav }
)(App)
