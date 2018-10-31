import React from 'react'
import Link from 'gatsby-link'


const Header = ({ siteTitle }) => (
  <div className="nav-bar top-nav-bar">
    <div className="container">
    <div className="nav-items">
      <span className="brand">
      {siteTitle}
      </span>
      <ul>
        <li><Link to="/" exact={true} activeClassName="active">Home</Link></li>
        <li><Link to="/events" exact={true} activeClassName="active">Events</Link></li>
        <li><Link to="/blog" exact={true} activeClassName="active">Blogs</Link></li>
        <li><Link to="/team" exact={true} activeClassName="active">Team</Link></li>
      </ul>
    </div>
    </div>
  </div>
)

export default Header
