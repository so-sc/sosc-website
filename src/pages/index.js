import React from 'react'
import Link from 'gatsby-link'
import soscLogo from '../images/logo_main.png';
import heroImage from '../images/hero_image.png';

const logoStyle = {
  
};
const IndexPage = () => (
  <div>
    <div className="container">
      <section className="hero-section">
        <div className="hero-texts">
          <img src={soscLogo} className="sosc-logo" alt="sosc logo"/>
          <p className="sosc-header">
            Sahyadri<br/>OpenSource Community
          </p>
          <p>
            A community driven by tech enthusiasts and<br/>
            open-source contributors, to help young students<br/>
            to be part of the open-source ecosystem by providing<br/>
            training and skill development.
          </p>
          <a href="#">Become a member</a>
        </div>
        <div>
          <img src={heroImage} className="hero-image" alt="hero image"/>
        </div>
      </section>
    </div>
    <section className="club-logo-section">
    
    </section>
  </div>
)

export default IndexPage
