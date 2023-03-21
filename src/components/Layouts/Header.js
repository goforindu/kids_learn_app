import React, { useEffect } from 'react';
import styles from './header.module.css';
const Header=(props)=>{
   const heading=props.heading;
   //const base_url="http://localhost:3000";
   const  base_url="https://kidsappdata.netlify.app";
   const background_music_url=base_url+"/assets/media/backgroundmusic.mp3";
   useEffect(()=>{
      document.getElementById("backgroundSound").volume=0.1;
   },[])
 return(
  <div> 
        <audio src={background_music_url} id="backgroundSound" autoPlay loop></audio>
         
        <div className={styles.topnav}>{heading}</div>
  </div>
    );

}
export default Header;