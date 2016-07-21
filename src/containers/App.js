import React, { Component } from 'react'

import { saveToken } from '../AC/user'
import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'
import Loading from './Loading'

class App extends Component {
  state = {
    navIsOpen: false,
    fetching: false,
    error: '',
    fetched: false,
    token: '',
    userName:'',
    userType: ''
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
          token: res.response.token,
          userName: res.response.first_name + ' ' + res.response.last_name,
          userType: res.response.musician_type
        })
    	}
    }
    http.send(params);
  }

  render() {
    if (!this.state.fetched || this.state.fetching) {
      return (
        <Loading />
      )
    }

    return (
      <div>
        <Sidebar navIsOpen={this.state.navIsOpen} toggleNav={this.toggleNav} userName={this.state.userName} userType={this.state.userType}/>
        <Header navIsOpen={this.state.navIsOpen} toggleNav={this.toggleNav} />
        <Content token={this.state.token} children={this.props.children} navIsOpen={this.state.navIsOpen}/>
      </div>
    )
  }
}

export default App
