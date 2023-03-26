import React from "react";
import Image from "next/image";
import styles from "../styles/DiverseCard.module.css";
const DiverseCard = ({ number, source, title, preview }) => {
  return (
    <div className={styles.card}>
      <Image className={styles.image} src={source} alt="image" />
      <div className={styles.details}>
        <h2 className={styles.number}>{number}</h2>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.preview}>{preview}</p>
      </div>
    </div>
  );
};

export default DiverseCard;
