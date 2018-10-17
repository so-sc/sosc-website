import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/footer';
import BottomNavbar from '../components/bottom_navbar';

import '../sass/index.scss';
import favicon from '../images/favicon.ico';


class Layout extends React.Component {

	constructor(props){
    super(props);
  }
	
	
	render() {
		return(
			<div id="flexContainer">
				<Helmet
					title={this.props.data.site.siteMetadata.title}
					meta={[
						{ name: 'description', content: 'Sahyadri Open-Source Community' },
						{ name: 'keywords', content: 'Community, OpenSource, SOSC, sahyadri, student' },
					]}
					link={[
						{ rel: 'shortcut icon', type: 'image/ico', href: `${favicon}` }
				]}
				/>
				<Header siteTitle={this.props.data.site.siteMetadata.title} />
				<BottomNavbar />
				<main>
					{this.props.children()}
				</main>
				<Footer/>
			</div>
		);
	}
}


Layout.propTypes = {
	children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
