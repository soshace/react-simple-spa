import App from './components/App'
import React from 'react';
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// const Appy = () => (
//   <MuiThemeProvider>
//     <App />
//   </MuiThemeProvider>
// )

render(<App />, document.getElementById('container'))
