import App from './components/App'
import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

render(<MuiThemeProvider>
          {routes}
       </MuiThemeProvider>, document.getElementById('container'))
