import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import AOS from 'aos';

import Header from '../components/header';
import '../sass/index.scss';


class Layout extends React.Component {

	constructor(props){
    super(props);
  }
  componentDidMount(){
    AOS.init({
			duration: 1000,
    })
	}
	
	render() {
		return(
			<div>
				<Helmet
					title={this.props.data.site.siteMetadata.title}
					meta={[
						{ name: 'description', content: 'Sample' },
						{ name: 'keywords', content: 'sample, something' },
					]}
				/>
				<Header siteTitle={this.props.data.site.siteMetadata.title} />
				<div style={{
					display: 'flex',
					flexDirection: 'column',
				}}>
					{this.props.children()}
				</div>
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
