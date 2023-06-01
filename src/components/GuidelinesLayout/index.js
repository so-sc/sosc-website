import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../footer'
import NavBar from '../NavBar'

import '../../sass/index.scss'

const Layout = ({ children }) => (
  <div id="flexContainer">
    <NavBar />
    <div
      style={{
        marginTop: '65px',
      }}
    >
      {children}
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
