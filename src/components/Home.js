import React from 'react'

function Home(props) {
  const name = props.user.first_name + ' ' + props.user.last_name
  return (
    <div className="home">
      Hello {name}! Here will be a home page...
    </div>
  )
}

export default Home
