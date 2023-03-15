import React from 'react';
import styles from './header.module.css';
const Header=(props)=>{
   const heading=props.heading;
   
 return(
        <div className={styles.topnav}>{heading}</div>
    );

}
export default Header;