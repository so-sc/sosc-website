import React from 'react'
import Link from 'gatsby-link'


const BlogCard = () => (
    <div className="blog-card">
    
        <img className="blog-img" src="https://githubuniverse.com/assets/img/GitHub-Universe-2018.png"></img>

    <div className="card-content">
        <div className="tags">Git</div>
        <div className="title">My First Blog Post</div>
        <div className="descrition">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis ex eget egestas dapibus. Aliquam posuere in lorem volutpat porttitor. Sed rutrum lacus sed turpis ultricies tristique. Praesent et viverra quam. Donec lorem sapien, aliquam ut enim id, molestie molestie leo.</div>
        <div className="author-box">
                <img className="author-img" src="https://avatars0.githubusercontent.com/u/18684321?s=200&v=4"></img>
            <div className="author-details">
                <div className="author-name">Haxzie</div>
                <div className="date">01-08-2018</div>
            </div>
        </div>
    </div>
</div>
)

export default BlogCard
