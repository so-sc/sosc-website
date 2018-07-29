import React from 'react'
import Link from 'gatsby-link'


const Footer = ({ siteTitle }) => (
  <div style={{
    display: 'block',
    backgroundColor: '#ffffff',
    zIndex: '10 !important',
    boxShadow:"0px 9px 30px -8px rgba(46, 46, 46, 0.24)"
  }}>
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

export default Footer
