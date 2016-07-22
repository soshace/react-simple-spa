import React from 'react'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function MainLayout(props) {
  return(
    <div>
      <Sidebar />
      <Header  />
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default MainLayout
