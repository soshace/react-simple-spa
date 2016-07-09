import App from './components/App'
import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

injectTapEventPlugin()

render(<MuiThemeProvider>
          {routes}
       </MuiThemeProvider>, document.getElementById('container'))
