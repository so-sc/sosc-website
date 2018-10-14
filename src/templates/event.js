import React from 'react'
import Helmet from 'react-helmet'
import RegistrationLink from '../components/btn_event_link'
/**
 * Event TEMPLATE
 * @param {data} param0 
 */
export default function EventTemplate ({data}) {
    const {markdownRemark: post} = data;
    
    function getLinkButton() {
        console.log(post.frontmatter.link);
        if (post.frontmatter.link !== undefined && post.frontmatter.link !== null) {
            if(post.frontmatter.link.length > 0) {
                return <RegistrationLink link={post.frontmatter.link}/>
            }
        }
    }

    return (
        <div className="page">
            <div className="container">
                <div className="event-wrapper">
                    <div className="event-page">
                        <img className="cover" src={post.frontmatter.cover.publicURL}/>
                        <div className="event-data">
                            <div className="event-details">
                                <span className="text-details">{post.frontmatter.date}</span>
                                <span className="text-details">{post.frontmatter.location}</span>
                            </div>
                            <div className="event-contents" dangerouslySetInnerHTML={{__html: post.html}}></div>
                        </div>
                    </div>
                </div>
                { getLinkButton() }
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
                link
                cover {
                    publicURL
                }
            }
        }
    }
`