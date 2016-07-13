import React, { Component, Children, cloneElement } from 'react'

class Content extends Component {

  render() {
    const { children, navIsOpen, token } = this.props
    const childrenWithData = Children.map(children, (child) => {
      return cloneElement(child, {
        token: token
      })
    })

    const mainClass = navIsOpen ? 'content content--active' : 'content'
    
    return (
      <main className={mainClass}>
        {childrenWithData}
      </main>
    )
  }
}

export default Content
