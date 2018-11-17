import React from 'react'

const FeedbackLink = ({feedback_link}) => (
  <div className="float">
    <a href={feedback_link} 
        className="btn-event-float"
        rel="noopener noreferrer"
        target="_blank">Give Feedback</a>
  </div>
)
export default FeedbackLink


