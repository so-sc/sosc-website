import React from 'react'
import Helmet from 'react-helmet'

export default function EventTemplate ({data}) {
    const {markdownRemark: post} = data;
    
    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
        </div>
    );
}

export const postQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        markdownRemark( frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
            }
        }
    }
`