import React from 'react'
import Link from 'gatsby-link'
import moment from 'moment'
import DateIcon from '../images/date_icon.svg'
import { GatsbyImage } from 'gatsby-plugin-image'

function isUpcoming(date) {
  let eventDate = moment(date, 'DD-MMM-YYYY')
  let today = new Date()
  today.setHours(0, 0, 0, 0)
  if (today < eventDate._d) {
    return `(Upcoming)`
  } else {
    return ``
  }
}

const Card = (props) => (
  <div className="card elevate white-bg">
    <Link className="card-container" to={props.slug}>
      {props.isNotMarkdown ? (
        <img
          src={props.cover}
          alt={props.title}
          className="card-header-img"
          style={{ overflow: 'hidden' }}
        />
      ) : (
        <GatsbyImage
          image={props.cover.childImageSharp.gatsbyImageData}
          className="card-header-img"
          alt="Card Image Text"
        />
      )}
      <div className="card-text">
        <h2 className="card-header-text">{props.title}</h2>
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
    </Link>
  </div>
)

export default Card
