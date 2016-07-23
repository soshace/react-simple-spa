import React from 'react'
import { CircularProgress } from 'material-ui'

function Loading() {
  return(
    <div className="loading">
      <CircularProgress size={2} color="#2979ff"/>
    </div>
  )
}

export default Loading
