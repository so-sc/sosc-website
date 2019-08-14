import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const BlogCard = ({ data }) => (
  <div className="blog-card elevate white-bg">
    <div className="cover">
      <Img style={{height: '100%'}} fluid={data.cover.childImageSharp.fluid} />
    </div>
    <div className="card-content">
      <div className="tags">{data.tags}</div>
      <div className="title">
        <Link to={data.slug}>{data.title}</Link>
      </div>
      <div className="description">{data.description}</div>
      <div className="author-box">
        <img
          className="author-img"
          alt=""
          src={`https://avatars1.githubusercontent.com/${data.author}?size=100`}
        />
        <div className="author-details">
          <div className="author-name">{data.author}</div>
          <div className="date">{data.date}</div>
        </div>
      </div>
    </div>
  </div>
)

export default BlogCard
