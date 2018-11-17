import React from 'react'

const FeedbackLink = ({link}) => (
  <div className="float">
    <a href={link} 
        className="btn-event-float"
        rel="noopener noreferrer"
        target="_blank">Give Feedback</a>
  </div>
)
export default FeedbackLink


