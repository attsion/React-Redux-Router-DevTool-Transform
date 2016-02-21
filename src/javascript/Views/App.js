import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

function App({ push, children }) {
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/counter">counter</Link>
        {' '}
        <Link to="/bar">Bar</Link>
      </header>
      <div>
        <button onClick={() => push('/Home')}>Go to /Home</button>
      </div>
      <div style={{ marginTop: '1.5em' }}>aaa{children}</div>
    </div>
  )
}

export default connect(
  null,
  routeActions
)(App)