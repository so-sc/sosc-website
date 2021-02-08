import React from 'react';
import Link from 'gatsby-link';
import Styles from './styles.module.scss';
import Container from '../Container';
import GitHubLogo from '../../images/github-logo.svg';

const NavBar = ({ data }) => {
    return (
        <div className={Styles.navBar}>
            <Container>
                <div className={Styles.navItems}>
                    <Link to="/" className={Styles.brand}><span >SOSC</span></Link>
                    <a className={Styles.githubLogo} href="https://github.com/so-sc">
                        <img src={GitHubLogo} alt="GitHub"/>
                    </a>
                </div>
            </Container>
        </div>
    )
}

export default NavBar;