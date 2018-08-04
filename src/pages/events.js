import React from 'react'
import Card from '../components/event_card';

const imgUrl = 'https://zocada.com/wp-content/uploads/2018/07/HLS_EXO-740x370.png';


function getEvents(data) {
  let events = [];
  let eventList = data.allMarkdownRemark.edges;

  eventList.map(({node}) => {
    events.push(
      <Card 
        slug={node.frontmatter.slug}
        imgUrl={node.frontmatter.cover.publicURL} 
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
