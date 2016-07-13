import React, { Component as ReactComponent} from 'react'

export default (Component) => class OneOpen extends ReactComponent {
  state = {
    vWidth: window.innerWidth,
    vHeight: window.innerHeight
  }

  updateDimensions = () => {
    this.setState({
      vWidth: window.innerWidth,
      vHeight: window.innerHeight
    })
  }

  componentWillMount() {
    this.updateDimensions()
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  isMobile = () => {
    const isMobile = this.state.vWidth < 700 ? true : false
    return isMobile
  }

  render() {
    return <Component {...this.props} isMobile = {this.isMobile()} />
  }
}
