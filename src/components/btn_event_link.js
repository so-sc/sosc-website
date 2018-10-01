import React from 'react'
import Link from 'gatsby-link'

const RegistraionLink = ({link}) => (
  <div className="float">
    <a href={link} 
        className="btn-event-float"
        target="_blank">Register Now</a>
  </div>
)

export default RegistraionLink
