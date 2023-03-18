import React from "react";
import {Link} from "react-router-dom";
import styles from "./home.module.css";
import Header from "./Header";

const Home=()=>{
 // const base_url="http://localhost:3000";
 const  base_url="https://kidsappdata.netlify.app";
    return(
      <>
      <Header heading="Let's Learn App Your Kids First Audio Book"/>
     
        <div className={styles.row}>
  <div className={styles.column}>
    <div className={styles.card}>
    <Link to='/alphabets'>
                <img src={`${base_url}/assets/home/abc.png`} alt="alphabets" width="150" height="150"/>
            </Link>
    </div>
  </div>

  <div className={styles.column}>
    <div className={styles.card}>
    <Link to='/numbers'>
                <img src={`${base_url}/assets/home/numbers.png`} alt="numbers" width="150" height="150"/>
            </Link>
    </div>
  </div>
  
  <div className={styles.column}>
    <div  className={styles.card}>
    <Link to='/shapes'><div><img src={`${base_url}/assets/home/shapes.png`} alt="shapes" width="150" height="150"/></div></Link>
    </div>
  </div>
  
  <div className={styles.column}>
    <div  className={styles.card}>
    <Link to='/fruits'> <div><img src={`${base_url}/assets/home/fruits.png`} alt="fruits" width="150" height="150"/></div></Link>
    </div>
  </div>
  <div className={styles.column}>
    <div  className={styles.card}>
    <Link to='/colours'><div><img src={`${base_url}/assets/home/colours.png`} alt="colours" width="150" height="150"/></div></Link>
    </div>
  </div>
  <div className={styles.column}>
    <div  className={styles.card}>
    <Link to='/transports'> <div><img src={`${base_url}/assets/home/transports.png`} alt="means of transports" width="150" height="150"/></div></Link>
    </div>
  </div>
  <div className={styles.column}>
    <div  className={styles.card}>
    <Link to='/birds'><div><img src={`${base_url}/assets/home/birds.png`} alt="birds" width="150" height="150"/></div></Link>
    </div>
  </div>
  <div className={styles.column}>
    <div  className={styles.card}>
    <Link to='/vegetables'> <div><img src={`${base_url}/assets/home/vegetables.png`} alt="vegetables" width="150" height="150"/></div></Link>
    </div>
  </div>
  <div className={styles.column}>
    <div  className={styles.card}>
    <Link to='/farm'> <div><img src={`${base_url}/assets/home/farm.png`} alt="farm animals" width="150" height="150"/></div></Link>
    </div>
  </div>
  <div className={styles.column}>
    <div  className={styles.card}>
    <Link to='/wild'> <div><img src={`${base_url}/assets/home/wild.png`} alt="wild animals" width="150" height="150"/></div></Link>
    </div>
  </div>
</div>
</>     
    );
}
export default Home;