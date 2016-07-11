import React from 'react'

export default (Component) => class DecoratedComponent extends React.Component {
  render() {
    return <Component {...this.props} />
  }
}
