import React, { useState } from 'react';
import styles from './header.module.css';
const Header=(props)=>{
    const[heading,setHeading]=useState(props.heading);
   
 return(
        <div className={styles.topnav}>{heading}</div>
    );

}
export default Header;