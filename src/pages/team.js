import React from 'react'
import Link from 'gatsby-link'
import MemberCard from '../components/member_card';
import PrakhyathImage from '../images/prakhyath_rai.jpg'

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
    <div className="container">
    <h2>Co-ordinators</h2>
      <div className="team-section">
        { /* Card for coordinators */}
        <div className="member-card white-bg elevate">
          <img className="profile-pic" src={PrakhyathImage}/>
          <div className="member-details">
              <h3 className="name">Prakhyath Rai</h3>
              <p className="designation">Faculty Coordinator</p>
          </div>
        </div>

          <MemberCard 
            username="manjesh1"
            full_name="Manjesh P Shetty"
            designation="Mozilla Regional Coordinator"/>
      </div>
      <h2>Core Members</h2>
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