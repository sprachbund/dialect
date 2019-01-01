import React from 'react'

import {Navbar, PostDisplay} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <PostDisplay />
      <Routes />
    </div>
  )
}

export default App
