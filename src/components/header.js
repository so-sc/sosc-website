import React from 'react'
import Link from 'gatsby-link'
import favicon from '../images/favicon.ico'
import Helmet from 'react-helmet'
import GatsbyConfig from '../../gatsby-config'

const Header = ({ siteTitle }) => (
  <div className="nav-bar">
    <Helmet
      title={GatsbyConfig.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sahyadri Open-Source Community' },
        {
          name: 'keywords',
          content: 'Community, OpenSource, SOSC, sahyadri, student',
        },
      ]}
      link={[{ rel: 'shortcut icon', type: 'image/ico', href: `${favicon}` }]}
    />

    <div className="container">
      <div className="nav-items">
        <span className="brand">{siteTitle}</span>
        <ul>
          <li>
            <Link to="/" exact={true} activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/events" exact={true} activeClassName="active">
              Events
            </Link>
          </li>
          <li>
            <Link to="/blog" exact={true} activeClassName="active">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/team" exact={true} activeClassName="active">
              Team
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Header
