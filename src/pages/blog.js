import React from 'react'
import Link from 'gatsby-link'
import BlogCard from '../components/blog_card';


function getBlogs() {
  let blogs = [];
  for(let i = 0; i < 9; i++) {
    blogs.push(<BlogCard/>)
  }
  return blogs;
}

const BlogsPage = () => (

<div className="page">
	<div className="container">
		<section className="blog-section">
			<div className="blog-posts">

      { getBlogs() }

			</div>
			<div className="blog-newsletter">
				<div className="news-card">
					<img src="http://www.osuinternationalhouse.com/wp-content/uploads/2011/10/logo_house_small.png"></img>
				</div>
			</div>
		</section>
	</div>
</div>
)

export default BlogsPage
