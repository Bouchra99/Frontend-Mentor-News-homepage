import React from "react";
import Image from "next/image";
import web3 from "../public/image-web-3-desktop.jpg";

import styles from "../styles/MainCard.module.css";
const MainCard = () => {
  return (
    <div className={styles.maincard}>
      <Image className={styles.image} src={web3} alt="image" />

      <div className={styles.details}>
        
        <h3 className={styles.title}>The Bright Future of Web 3.0?</h3>
        <div className={styles.more}>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className={styles.btn}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
