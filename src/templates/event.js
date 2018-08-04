import React from 'react'
import Helmet from 'react-helmet'
import dateIcon from '../images/date.svg';
import locationIcon from '../images/location.svg';
/**
 * Event TEMPLATE
 * @param {data} param0 
 */
export default function EventTemplate ({data}) {
    const {markdownRemark: post} = data;
    
    return (
        <div className="page">
            <div className="container">
                <div className="event-wrapper">
                    <div className="event-page">
                        <img className="cover" src={post.frontmatter.cover.publicURL}/>
                        <h2 className="title">{post.frontmatter.name}</h2>
                        <div className="event-details">
                            <img className="icon" src={dateIcon}/>
                            {post.frontmatter.date}
                            <img className="icon" src={locationIcon}/>
                            {post.frontmatter.location}
                        </div>
                        <div dangerouslySetInnerHTML={{__html: post.html}}></div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export const postQuery = graphql`
    query BlogPostBySlug($path: String!) {
        markdownRemark( frontmatter: {slug: {eq: $path}}) {
            html
            frontmatter {
                slug
                name
                date(formatString: "DD-MMM-YYYY")
                location
                cover {
                    publicURL
                }
            }
        }
    }
`