import React from 'react'
import RegistrationLink from '../components/btn_event_link'
import FeedbackLink from '../components/btn_event_feedback_link'
import moment from 'moment' 
import Layout from '../components/indexLayout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import GatsbyConfig from '../../gatsby-config'
import CustomHelmet from '../components/CustomHelmet';

/**
 * Event TEMPLATE
 * @param {data} param0
 */
export default function EventTemplate({ data }) {
  const { markdownRemark: post } = data;

  /**
   * Function to return Feedback link or Registration link based on the Date
   */
  function getLinkButton() {
    let eventDate = moment(post.frontmatter.date, 'DD-MMM-YYYY')
    let week=moment(post.frontmatter.date, 'DD-MMM-YYYY').add(7,'days');
    console.log(week._d);

    let today = new Date();
    today.setHours(0, 0, 0, 0);
    

    function registration_link(){
      if(post.frontmatter.link !== undefined && post.frontmatter.link !== null) {
        if (post.frontmatter.link.length > 0) {
          return <RegistrationLink link={post.frontmatter.link} />
        }
      }
    }

    function feedback_link(){
      if(post.frontmatter.feedback_link !== undefined && post.frontmatter.feedback_link !== null) {
        if (post.frontmatter.feedback_link.length > 0) {
          return <FeedbackLink feedback_link={post.frontmatter.feedback_link} />
        }
      }
    }

    if(today < eventDate._d){
      return registration_link();  
    } else if(today < week){
      return feedback_link();
    }
  }

  return (
    <Layout>
    <CustomHelmet page={{
            title: `${post.frontmatter.name}`,
            siteUrl: `${GatsbyConfig.siteMetadata.link}${post.frontmatter.slug}`
          }}
          image={post.frontmatter.cover.publicURL}/>
      <div className="page">
        <div className="container">
          <div className="event-wrapper">
            <div className="event-page">
              <Img fluid={post.frontmatter.cover.childImageSharp.fluid} />
              <div className="event-data">
                <div className="event-details">
                  <span className="text-details">{post.frontmatter.date}</span>
                  <span className="text-details">
                    {post.frontmatter.location}
                  </span>
                </div>
                <div
                  className="event-contents"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
              </div>
            </div>
          </div>
          {getLinkButton()}
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostBySlug($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        slug
        name
        date(formatString: "DD-MMM-YYYY")
        location
        link
        feedback_link
        cover {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
