import React, { Component } from 'react'

import Header from './Header'
import Sidebar from './Sidebar'
// import assign from 'object-assign'

class App extends Component {
  state = {
    navIsOpen: false
  }

  toggleNav = (ev) => {
    ev.preventDefault()
    this.setState({
      navIsOpen: !this.state.navIsOpen
    })
  }

  render() {
    const mainClass = this.state.navIsOpen ? 'content--active' : 'content'
    return (
      <div>
        <Sidebar navIsOpen={this.state.navIsOpen} />
        <Header navIsOpen={this.state.navIsOpen} toggleNav={this.toggleNav} />
        <main className={mainClass}>
          {this.props.children}
        </main>
      </div>
    )
  }
}

// <div>
//   <pre>{JSON.stringify(this.state, null, 2)}</pre>
// </div>
export default App
