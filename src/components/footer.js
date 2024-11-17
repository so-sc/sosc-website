import React from 'react'

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="container">
      <div className="info-area">
        <div className="column">
          <a href="https://github.com/so-sc">GitHub</a>
          <a href="https://instagram.com/sosc.sahyadri">Instagram</a>
          <a href="https://linkedin.com/company/sosc-sahyadri">LinkedIn</a>
          <a href="https://twitter.com/sahyadri_osc">Twitter</a>
          <a href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w">
            YouTube
          </a>
        </div>
        <div className="column">
          <a href="https://www.sosc.org.in/guidelines">Community Guidelines</a>
          <a href="https://github.com/so-sc/code-of-conduct">Code of Conduct</a>
          <a href="https://www.sosc.org.in/reports">Annual Reports</a>
          <a href="#">Donate Us</a>
        </div>
        <div className="column">
          <p>
            <strong>Sahyadri Open-Source Community</strong>
            <br />
            Sahyadri College of Engineering and Management, Adyar, Mangalore -
            575007 IN
            <br />
            <br />
            sosc@sahyadri.edu.in
            <br />
            +91 87624 58575
          </p>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <p>SOSC © {new Date().getFullYear()}</p>
    </div>
  </footer>
)

export default Footer
