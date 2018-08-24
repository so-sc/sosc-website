import React from 'react'
import Link from 'gatsby-link'
import soscLogo from '../images/logo_grad.svg';
import heroImage from '../images/hero_main.svg';
import clubImage from '../images/hero_clubs.svg';
import gceImage from '../images/hero_github.svg';
import connectImage from '../images/hero_connect_.png';

const logoStyle = {
  
};
const IndexPage = () => (
  <div className="page">
    <div className="container">
      <section className="hero-section">
        <div className="hero-texts">
          <img src={soscLogo} className="sosc-logo" alt="sosc logo"/>
          <p className="sosc-header">
            Sahyadri<br/>Open Source Community
          </p>
          <p>
            A community driven by tech enthusiasts and
            open-source contributors, to help young students
            to be part of the open-source ecosystem by providing
            training and skill development.
          </p>
          <a href="https://goo.gl/forms/XH41TwlMxOeRwmdQ2" className="btn-hero-green">Become a member</a>
        </div>
        <div>
          <img src={heroImage} className="hero-image" alt="hero image"/>
        </div>
      </section>
    </div>
    <div className="container">
      <section className="hero-section2 ">
        <div>
          <img src={clubImage} className="hero-image" alt="hero image"/>
        </div>
        <div className="hero-texts">
          <p className="hero-header">Explore clubs and Activities</p>
          <div className="dash"/>
          <p>
            SOSC is a conglomeration of clubs and individuals who
            contribute to the community by helping us conduct events and activities.
            there are numerous clubs and experts who help shape the community
            to be pro-active. Mozilla Campus Clubs, Developer Students clubs,
            and the GitHub Campus Expert are to name a few.
          </p>
        </div>
      </section>
    </div>

    <div className="container">
      <section className="hero-section3">
        <div className="hero-texts">
          <p className="hero-header">Get Trained by Experts</p>
          <div className="dash"/>
          <p>
            SOSC is all about helping each other to learn and improve, we conduct 
            workshops and trainings led by speakers from other technical communities,
            and student experts. Keeping up to date with latest technologies and learning
            new things is what most of love. Here is your chance to attend workshops, training
            and even host non-profit events to help others.
          </p>
        </div>
        <div>
          <img src={gceImage} className="hero-image" alt="hero image"/>
        </div>
      </section>
    </div>
    <div className="container">
      <section className="hero-section4">
      <div>
          <img src={connectImage} className="hero-image" alt="hero image"/>
        </div>
        <div className="hero-texts">
          <p className="hero-header">Get Connected !</p>
          <div className="dash"/>
          <p>
            Meet people with similar interest to work together on projects
            and host events to build a better collaborative environment. We are
            more than 100 members with interests on various fields of technology
            here to know each other and get connected. Meet our members to know
            more about us and build something cool!
          </p>
          <Link to="/team" className="btn-hero-green">Learn More</Link>
        </div>
      </section>
    </div>
  </div>
)

export default IndexPage
