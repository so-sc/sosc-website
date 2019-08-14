import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
import MemberCard from '../components/member_card'
import Layout from '../components/indexLayout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import CustomHelmet from '../components/CustomHelmet';
import GatsbyConfig from '../../gatsby-config';

export default function BlogTemplate({ data }) {
  const { markdownRemark: post } = data
  const disqusShortname = 'sosc'
  const disqusConfig = {
    identifier: post.frontmatter.title,
    title: post.frontmatter.title,
  }

  return (
    <Layout>
      <div className="page white-bg">
      <CustomHelmet page={{
            title: `${post.frontmatter.title}`,
            siteUrl: `${GatsbyConfig.siteMetadata.link}${post.frontmatter.slug}`,
            image: `${post.frontmatter.cover.publicURL}`
        }}
        image={post.frontmatter.cover.publicURL}
        />
        <div className="container">
          <div className="blog-page">
            {/**
             * Header section of the blog
             * inspired by Medium
             * If you have already found that out then hear out the famous quote
             *
             *  " Good Designers copy, Great Designers Steal! "
             *                          ~ Pablo Picasso
             */}
            <div data-aos="fade-up" className="header">
              <div className="contents">
                <p className="tags"> {post.frontmatter.tags}</p>
                <p className="title"> {post.frontmatter.title} </p>
                <p className="description"> {post.frontmatter.description} </p>
                <div className="dash" />

                <div className="author-section">
                  <img
                    alt=""
                    className="author-img"
                    src={`https://avatars1.githubusercontent.com/${post.frontmatter.author}?size=100`}
                  />
                  <div className="author-details">
                    <div className="author-name">
                      <a
                        href={`https://github.com/${post.frontmatter.author}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {post.frontmatter.name}
                      </a>
                    </div>
                    <div className="date">{post.frontmatter.date}</div>
                  </div>
                </div>
              </div>
              <div className="cover">
                <Img fluid={post.frontmatter.cover.childImageSharp.fluid} />
              </div>
            </div>

            {/**
             * Blog page section
             */}
            <div
              data-aos="fade-up"
              className="blog-contents"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div className="team-section bottom-box">
              <MemberCard
                username={post.frontmatter.author}
                full_name={post.frontmatter.name}
                designation=""
              />
            </div>
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostQuery($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        cover {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        slug
        tags
        title
        description
        author
        name
        date(formatString: "DD-MMM-YYYY")
        designation
      }
    }
  }
`
