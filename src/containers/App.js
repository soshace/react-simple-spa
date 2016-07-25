import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as userApi from '../api/user'
import store from '../store'
import { toggleNav } from '../actions/app'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Loading from '../components/Loading'

class App extends Component {
  componentDidMount() {
    userApi.login()
  }

  render() {
    const { navIsOpen, toggleNav, dataReady, user } = this.props
    const mainClass = navIsOpen ? 'content content--nav-open' : 'content'

    // changing dataReady is not finished
    // need to check action dataFetching() and run it before api call with true
    // and after it will be finished with false
    // in final Loading component must be only in this root component
    // (remove from booking etc.)
    const mainElement = dataReady ? <Loading /> : this.props.children

    return(
      <div>
        <Sidebar user={user} navIsOpen={navIsOpen} toggleNav={toggleNav} />
        <Header navIsOpen={navIsOpen} toggleNav={toggleNav} />
        <main className={mainClass}>
          <div className="content__inner">
            {mainElement}
          </div>
        </main>
      </div>
    )
  }
}

export default connect(
  (store) => ({
    navIsOpen: store.appState.navIsOpen,
    dataReady: store.appState.dataReady,
    user: store.userState}),
    { toggleNav }
)(App)
