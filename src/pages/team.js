import React from 'react'
import Link from 'gatsby-link'
import MemberCard from '../components/member_card';

function getMembers(data) {
  let members = [];

  let memberList = data.allMarkdownRemark.edges;

  memberList.map(element => {
    members.push(
      <MemberCard 
            username={element.node.frontmatter.username} 
            full_name={element.node.frontmatter.name}
            designation={element.node.frontmatter.designation}/>
    )
  })

  return members;
}

const TeamsPage = ({data}) => (
  <div className="page">
    <div className="container team">
      <div className="team-section">
        { getMembers(data) }
      </div>
    </div>
  </div>
)

export default TeamsPage

export const query = graphql`
query membersQuery {
	allMarkdownRemark(
		sort: {
			fields: [frontmatter___designation],
			order: ASC
		},
		filter: {
			fileAbsolutePath: {
				regex: "/members/.*\\.md$/"
			}
		}
  ) {
    edges {
      node {
        frontmatter {
          username
          name
          designation
        }
      }
    }
  }
}
`