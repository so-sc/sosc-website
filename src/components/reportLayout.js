import React from 'react';
import PropTypes from 'prop-types';

const Report = ({ children }) => (
    <div>
        {children}
    </div>
);

Report.propTypes = {
	children: PropTypes.node.isRequired,
}
  
export default Report