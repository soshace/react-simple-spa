import React from 'react'
import { render } from 'react-dom'

//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Root from './containers/Root'

injectTapEventPlugin()

render(<Root />, document.getElementById('container'))
