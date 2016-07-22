import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import store from './store'
import router from './router'
import injectTapEventPlugin from 'react-tap-event-plugin'

//import Root from './containers/Root'

injectTapEventPlugin()

render(<MuiThemeProvider>
        <Provider store = {store}>
          {router}
        </Provider>
      </MuiThemeProvider>, document.getElementById('container'))
