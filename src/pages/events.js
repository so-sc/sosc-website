import React from 'react'
import Card from '../components/event_card';

function getEvents(data) {
  let events = [];
  let eventList = data.allMarkdownRemark.edges;

  eventList.map(({node}) => {
    events.push(
      <Card 
        slug={node.frontmatter.slug}
        cover={node.frontmatter.cover} 
        title={node.frontmatter.name} 
        date={node.frontmatter.date}/>
    );
  })

  return events;
}
const EventsPage = ({data}) => (
  <div className="page">
    <div className="container">
      <div className="event-card-container">
        { getEvents(data) }
      </div>
    </div>
  </div>
)

export default EventsPage

export const query = graphql`
query eventsQuery {
  allMarkdownRemark(
		sort: {
			fields: [frontmatter___date],
			order: DESC
		},
		filter: {
			fileAbsolutePath: {
				regex: "/events/.*\\.md$/"
			}
		}
  ) {
    totalCount
    edges {
      node {
        frontmatter {
          slug
          name
          date(formatString: "DD-MMM-YYYY")
          cover {
            publicURL
          }
        }
      }
    }
  }
}
`
