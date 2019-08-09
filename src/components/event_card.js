import React from 'react'
import Link from 'gatsby-link'
import moment from 'moment'
import DateIcon from '../images/date_icon.svg'
import Img from 'gatsby-image'

function isUpcoming(date) {
  let eventDate = moment(date, 'DD-MMM-YYYY')
  let today = new Date()
  console.log(eventDate)
  today.setHours(0, 0, 0, 0)
  if (today < eventDate._d) {
    return `(Upcoming)`
  } else {
    return ``
  }
}

const Card = props => (
  <div className="card elevate white-bg">
    <div className="card-container">
      <Img
        className="card-header-img"
        alt="Card Image Text"
        fluid={props.cover.childImageSharp.fluid}
      />
      <div className="card-text">
        <h2 className="card-header-text">
          <Link to={props.slug}>{props.title}</Link>
        </h2>
        <div className="card-date">
          <img src={DateIcon} className="card-date-icon" alt="date icon" />
          <p
            className="card-date-text"
            dangerouslySetInnerHTML={{
              __html: `${props.date}`,
            }}
          />
         <p className="card-upcoming">{isUpcoming(props.date)}</p>
        </div>
      </div>
    </div>
  </div>
)

export default Card
