import React from "react";
import DiverseCard from "./DiverseCard";

import styles from '../styles/DiverseList.module.css'
import image1 from '../public/image-gaming-growth.jpg'
import image2 from '../public/image-retro-pcs.jpg'
import image3 from '../public/image-top-laptops.jpg'

const DiverseList = () => {

  // 01
  // Reviving Retro PCs
  // What happens when old PCs are given modern upgrades?

  // 02
  // Top 10 Laptops of 2022
  // Our best picks for various needs and budgets.

  // 03
  // The Growth of Gaming
  // How the pandemic has sparked fresh opportunities.
  return (
    <div className={styles.container}>
      <DiverseCard source={image2} title = "Reviving Retro PCs" number= "01" preview= "What happens when old PCs are given modern upgrades?" />
      <DiverseCard source={image3} title = "Top 10 Laptops of 2022" number= "02" preview= "Our best picks for various needs and budgets."/>
      <DiverseCard source={image1} title = "The Growth of Gaming" number= "03" preview= "How the pandemic has sparked fresh opportunities."/>
    </div>
  );
};

export default DiverseList;
