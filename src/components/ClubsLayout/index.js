import React from 'react';
import Styles from './styles.module.scss';
import NavBar from '../NavBar';


const ClubsLayout = ({ children }) => {
    return(
        <div id="flexContainer">
            <NavBar/>
            <div style={{
                marginTop: "65px"
            }}>
                { children }
            </div>
        </div>
    )
}

export default ClubsLayout;