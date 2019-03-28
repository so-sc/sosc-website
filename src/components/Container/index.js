import React from 'react';
import Styles from './styles.module.scss';

const Container = (props) => {
    return(
        <div className={Styles.container}>
            { props.children }
        </div>
    )
}

export default Container;