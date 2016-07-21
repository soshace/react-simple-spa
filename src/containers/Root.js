import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import store from '../store'
import routes from '../router/routes'
//import Counter from './Counter'
//import Articles from './Articles'

class RootContainer extends Component {
  static propTypes = {

  };

  render() {
    return (
      <MuiThemeProvider>
        <Provider store = {store}>
          {routes}
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default RootContainer
