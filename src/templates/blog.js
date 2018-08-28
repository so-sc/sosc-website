import React from 'react'
import Helmet from 'react-helmet'
import { DiscussionEmbed } from "disqus-react";
import MemberCard from '../components/member_card';

export default function BlogTemplate ({data}) {
    const {markdownRemark: post} = data;
    const disqusShortname = "sosc";
    const disqusConfig = {
      identifier: post.frontmatter.title,
      title: post.frontmatter.title,
    };
    
    return (
        <div className="page white-bg">
            <Helmet>
                <title>{post.frontmatter.title}</title>
                <meta name="description" content={post.frontmatter.description} />
            </Helmet>
            <div className="container">
                <div className="blog-page">

                    {
                        /**
                         * Header section of the blog
                         * inspired by Medium
                         * If you have already found that out then hear out the famous quote
                         * 
                         *  " Good Designers copy, Great Designers Steal! "
                         *                          ~ Pablo Picasso
                         */
                    }
                    <div data-aos="fade-up" className="header">
                        <div className="contents">
                            <p className="tags"> { post.frontmatter.tags}</p>
                            <p className="title"> {post.frontmatter.title} </p>
                            <p className="description"> {post.frontmatter.description} </p>
                            <div className="dash"/>

                            <div className="author-section">
                                <img className="author-img" 
                                    src={
                                        `https://avatars1.githubusercontent.com/${post.frontmatter.author}?size=100`
                                        }/>
                                <div className="author-details">
                                    <div className="author-name">
                                        <a href={`https://github.com/${post.frontmatter.author}`}
                                            rel="noopener noreferrer" target="_blank" >{post.frontmatter.name}</a>
                                    </div>
                                    <div className="date">
                                        {post.frontmatter.date}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="cover">
                            <img src={post.frontmatter.cover.publicURL}/>
                        </div>
                    </div>

                    {
                        /**
                         * Blog page section
                         */
                    }
                    <div data-aos="fade-up" 
                        className="blog-contents" 
                        dangerouslySetInnerHTML={{ __html: post.html}}/>
                    <div className="team-section bottom-box">
                        <MemberCard
                            username={post.frontmatter.author}
                            full_name={post.frontmatter.name}
                            designation="" />
                    </div>
                    <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                </div>
            </div>
            
        </div>
    );
}

export const postQuery = graphql`
    query blogPostQuery($path: String!) {
        markdownRemark( frontmatter: {slug: {eq: $path}}) {
            html
            frontmatter {
                cover {
                    publicURL
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