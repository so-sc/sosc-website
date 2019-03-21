import React from 'react';
import NavBar from '../components/NavBar';
import ClubsLayout from '../components/ClubsLayout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Styles from '../sass/pages/clubs.module.scss';
import Container from '../components/Container';
import CampusClubsLogo from '../images/clubs-home.svg';
import DSCLogo from '../images/dsc-logo.png';
import WTMLogo from '../images/wtm-logo.png';
import DGMLogo from '../images/dg-logo.png';
import SOSWCLogo from '../images/soswc-logo.jpg';
import GCELogo from '../images/gce.png';

import Haxzie from '../images/haxzie.png';
import Rumaan from '../images/rumaan.png';

const ClubsPage = ({ data }) => {
  return (
    <ClubsLayout>
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
            <div className={Styles.card}>
              <img src={GCELogo} />
              <p>GitHub Campus Experts</p>
            </div>
            <div className={Styles.card}>
              <img src={CampusClubsLogo} />
              <p>Mozilla Campus Clubs</p>
            </div>
            <div className={Styles.card}>
              <img src={DSCLogo} />
              <p>Developer Students Clubs</p>
            </div>
            <div className={Styles.card}>
              <img src={SOSWCLogo} />
              <p>SOSWC</p>
            </div>
            <div className={Styles.card}>
              <img src={WTMLogo} />
              <p>Women Tech Makers</p>
            </div>
            <div className={Styles.card}>
              <img src={DGMLogo} />
              <p>DjangoGirls Mangaluru</p>
            </div>
          </div>
        </div>
        </Container>
      </div>
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
            <div className={Styles.profileCard}>
              <img src={Haxzie} />
              <div className={Styles.details}>
                <p>Musthaq Ahamad</p>
                <p className={Styles.caption}>GitHub Campus Expert</p>
              </div>
            </div>
            <div className={Styles.profileCard}>
              <img src={Rumaan} />
              <div className={Styles.details}>
                <p>Rumaan Khalandar</p>
                <p className={Styles.caption}>Associate Android Dev.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      </div>
    </ClubsLayout>
  )
}

export default ClubsPage;

export const clubSiteImages = graphql`
  fragment clubSiteImages on File {
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const ClubImageQuery = graphql`
query {
    pageCover: file(relativePath: { eq: "images/club-page-cover.jpg" }) {
      ...clubSiteImages
    }
}
`;