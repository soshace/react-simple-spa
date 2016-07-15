import React, { Component }  from 'react'
import { CircularProgress } from 'material-ui'

class Loading extends Component {
  render() {
    return(
      <div className="loading">
        <CircularProgress size={2} color="#2979ff"/>
      </div>
    )
  }
}

// <CircularProgress size={1.5} />
// <CircularProgress size={2} />

export default Loading
