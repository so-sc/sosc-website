import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/indexLayout'
import { graphql } from 'gatsby'

const Member = props => (
  <Layout>
    <div className="page">
      <div className="container">
        <div className="profile-container">
          <div className="profile-details">
            <div className="avatar">avatar</div>
            <div className="links">links</div>
            <div className="random-info">random</div>
            <div className="quote">quote</div>
          </div>
          <div className="profile-content">
            <div className="section skills">Skills</div>
            <div className="section about">About</div>
            <div className="section blogs">Blogs</div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Member
