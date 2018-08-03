import React from 'react'
import Link from 'gatsby-link'
import BlogCard from '../components/blog_card';


function getBlogs(data) {
	let blogs = [];
	let blogList = data.allMarkdownRemark.edges;

	blogList.map(element => {
		blogs.push( <BlogCard data={ element.node.frontmatter }/> )
	});
  return blogs;
}

const BlogsPage = ({data}) => (

<div className="page">
	<div className="container">
		<section className="blog-section">
			<div className="blog-posts">

      			{ getBlogs(data) }

			</div>
			<div className="blog-newsletter">
				<div className="news-card">
					<img src=""></img>
				</div>
			</div>
		</section>
	</div>
</div>
)

export default BlogsPage

export const query =  graphql`
query blogsQuery {
	allMarkdownRemark(
		sort: {
			fields: [frontmatter___date],
			order: DESC
		},
		filter: {
			fileAbsolutePath: {
				regex: "/blogs/.*\\.md$/"
			}
		}
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
							sizes(maxWidth: 700) {
								srcSet
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