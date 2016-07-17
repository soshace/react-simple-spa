import React, { Component } from 'react'

import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'
// import assign from 'object-assign'

class App extends Component {
  state = {
    navIsOpen: false,
    fetching: false,
    error: '',
    fetched: false,
    token: ''
  }

  toggleNav = (ev) => {
    this.setState({
      navIsOpen: !this.state.navIsOpen
    })
  }

  componentDidMount() {
    this.setState({
      fetching: true,
      error: '',
      fetched: false
    })

    const http = new XMLHttpRequest()
    const url = 'http://test.easybook.ie/api/login'
    const params = 'user=info@thepearlsband.ie&password=27e877c3d7c5c939fb3b995a366f52d9'

    http.open('POST', url, true);

    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

    http.onreadystatechange = () => {
    	if (http.readyState == 4 && http.status == 200) {
    		const res = JSON.parse(http.responseText)

        this.setState({
          fetching: false,
          error: res.error,
          fetched: res.success,
          token: res.response.token
        })
    	}
    }
    http.send(params);
  }

  render() {
    return (
      <div>
        <Sidebar navIsOpen={this.state.navIsOpen} toggleNav={this.toggleNav} />
        <Header navIsOpen={this.state.navIsOpen} toggleNav={this.toggleNav} />
        <Content token={this.state.token} children={this.props.children} navIsOpen={this.state.navIsOpen}/>
      </div>
    )
  }
}

export default App
