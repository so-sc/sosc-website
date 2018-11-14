import React from 'react'
import Card from '../components/event_card'
import Layout from '../components/indexLayout'
import { graphql } from 'gatsby'
import GatsbyConfig from '../../gatsby-config'
import CustomHelmet from '../components/CustomHelmet';

function getEvents(data) {
  let events = []
  let eventList = data.allMarkdownRemark.edges

  eventList.map(({ node }) => {
    return events.push(
      <Card
        slug={node.frontmatter.slug}
        cover={node.frontmatter.cover}
        title={node.frontmatter.name}
        date={node.frontmatter.date}
      />
    )
  })
  return events
}

const EventsPage = ({ data }) => (
  <Layout>
    <CustomHelmet page={GatsbyConfig.siteMetadata.events} />
    <div className="page">
      <div className="container">
        <div className="event-card-container">{getEvents(data)}</div>
      </div>
    </div>
  </Layout>
)

export default EventsPage

export const eventsQuery = graphql`
  query eventsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/events/.*md$/" } }
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
              childImageSharp {
                fluid(maxWidth: 1000) {
                  srcSet
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
