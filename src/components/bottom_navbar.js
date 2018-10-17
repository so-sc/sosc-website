import React from 'react'
import Link from 'gatsby-link'
import EventIcon from '../images/event_icon.svg'
import HomeIcon from '../images/home_icon.svg'
import BlogIcon from '../images/blog_icon.svg'
import TeamIcon from '../images/team_icon.svg'


const BottomNavbar = () => (
  <div className="nav-bar bottom-nav-bar">
    <div className="container">
    <div className="nav-items">
      <ul>
        <li><Link to="/" exact={true} activeClassName="active"><img src={HomeIcon} alt="Home"/></Link></li>
        <li><Link to="/events" exact={true} activeClassName="active"><img src={EventIcon} alt="Events"/></Link></li>
        <li><Link to="/blog" exact={true} activeClassName="active"><img src={BlogIcon} alt="Blogs"/></Link></li>
        <li><Link to="/team" exact={true} activeClassName="active"><img src={TeamIcon} alt="Team"/></Link></li>
      </ul>
    </div>
    </div>
  </div>
)

export default BottomNavbar
