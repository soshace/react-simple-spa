import React, { Component, Children, cloneElement } from 'react'

function Content(props) {
  const { children, navIsOpen, token } = props
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

export default Content
