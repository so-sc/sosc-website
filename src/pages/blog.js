import React from 'react'
import BlogCard from '../components/blog_card'
import Layout from '../components/indexLayout'
import { graphql } from 'gatsby'

function getBlogs(data) {
  let blogs = []
  let blogList = data.allMarkdownRemark.edges

  blogList.forEach(element => {
    blogs.push(<BlogCard data={element.node.frontmatter} />)
  })

  return blogs
}

const BlogsPage = ({ data }) => (
  <Layout>
    <div className="page">
      <div className="container">
        <section className="blog-section">
          <div className="blog-posts">{getBlogs(data)}</div>
          {/*
          
            <div className="blog-newsletter">
              <div className="news-card">
                <img alt="" src="" />
              </div>
            </div>
            */}
        </section>
      </div>
    </div>
  </Layout>
)

export default BlogsPage

export const blogsQuery = graphql`
  query blogsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/blogs/.*md$/" } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            slug
            cover {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1000) {
                  srcSet
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            tags
            title
            description
            author
            date(formatString: "DD-MMM-YYYY")
          }
        }
      }
    }
  }
`
