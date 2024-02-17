import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'

import '../sass/index.scss'

const Layout = ({ children }) => (
  <div id="flexContainer">
    <Header siteTitle="SOSC" />
    <main className="main-things">{children}</main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
