import React from 'react';
import ClubsLayout from '../../components/ClubsLayout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Styles from './styles.module.scss';
import Container from '../../components/Container';


const ClubsPage = ({ data }) => {

  /**
   * Function to generate the list of clubs
   */
  const getClubs = ({ clubs }) => {
    let clubList = [];
    clubs.edges.forEach(({ node }) => {
      let { frontmatter } = node;
      clubList.push(
        <div className={Styles.card}>
          <Img className={Styles.clubLogo} fluid={frontmatter.logo.childImageSharp.fluid} alt={ frontmatter.name }/>
          <p>{frontmatter.name}</p>
        </div>
      )
    });
    return clubList;
  }

  /**
   * Function to generate the list of ambassadors and experts
   */
  const getExperts = ({ experts }) => {
    let expertsList = [];
    experts.edges.forEach(({ node }) => {
      let {frontmatter} = node;
      expertsList.push(
        <div className={Styles.profileCard}>
          <img src={ `https://avatars1.githubusercontent.com/${frontmatter.github}?size=200`} alt={ frontmatter.name }/>
          <div className={Styles.details}>
            <p>{ frontmatter.name }</p>
            <p className={Styles.caption}>{ frontmatter.title }</p>
          </div>
        </div>
      );
    });
    return expertsList;
  }

  return (
    <ClubsLayout>

      {
        // Clubs section
      }
      <div style={{
        backgroundColor: "rgb(0, 174, 255)"
      }}>
        <Container>
          <div className={Styles.section}>
            <div className={Styles.sectionHead}>
              <p>
                Clubs and Communities
                        </p>
              <span>We bring people together</span>
            </div>
            <div className={Styles.sectionColumns}>
              {getClubs(data)}
            </div>
          </div>
        </Container>
      </div>

      {
        // Experts and Ambassadors section
      }
      <div style={{
        backgroundColor: "rgb(0, 195, 106)"
      }}>
        <Container>
          <div className={Styles.section}>
            <div className={Styles.sectionHead}>
              <p>
                Experts and Ambassadors
                        </p>
              <span>We help our community grow</span>
            </div>
            <div className={Styles.sectionColumns}>
              { getExperts(data) }
            </div>
          </div>
        </Container>
      </div>
    </ClubsLayout>
  )
}

export default ClubsPage;

export const ClubPageQuery = graphql`
query clubsPageQuery {
  clubs: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { fileAbsolutePath: { regex: "/clubs/.*/.*md$/" } }
  ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          slug
          logo {
            publicURL
            childImageSharp {
              fluid(maxWidth: 300) {
                srcSet
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          name
          members
        }
      }
    }
  }

  experts: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { fileAbsolutePath: { regex: "/experts/.*/.*md$/" } }
  ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          date
          name
          github
          title
        }
      }
    }
  }
}
`;