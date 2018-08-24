import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/footer';

import '../sass/index.scss';



class Layout extends React.Component {

	constructor(props){
    super(props);
  }
	
	
	render() {
		return(
			<div>
				<Helmet
					title={this.props.data.site.siteMetadata.title}
					meta={[
						{ name: 'description', content: 'Sahyadri Open-Source Community' },
						{ name: 'keywords', content: 'Community, OpenSource, SOSC, sahyadri, student' },
					]}
				/>
				<Header siteTitle={this.props.data.site.siteMetadata.title} />
				<div style={{
					display: 'flex',
					flexDirection: 'column',
				}}>
					{this.props.children()}
				</div>
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
