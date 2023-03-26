import { React, useState } from "react";
import Image from "next/image";
import Logo from "../public/logo.svg";
import styles from "../styles/Header.module.css";

import iconmenu from "../public/icon-menu.svg";
import iconmenuclose from "../public/icon-menu-close.svg";

const Header = () => {
  const [checked, setCheced] = useState(false);
  const handleChange = () => {
    setCheced(!checked);
    if(!checked){
      document.body.style.overflow = 'hidden';     
    }else{
      document.body.style.overflow = 'visible';
    }
  };
  return (
    <div className={styles.header}>
      <input
        value={checked}
        onChange={handleChange}
        className={styles.input}
        type="checkbox"
        id="toggle"
      />
      <Image
        className={styles.logo}
        priority
        src={Logo}
        width={45}
        height={30}
        alt="logo"
      />
      <ul className={styles.navbar}>
        <li className={styles.navlink}>New</li>
        <li className={styles.navlink}>Home</li>
        <li className={styles.navlink}>Popular</li>
        <li className={styles.navlink}>Trending</li>
        <li className={styles.navlink}>Categories</li>
      </ul>
      <div className={styles.iconmenu}>
        <label for="toggle">
          {checked ? (
         
            <Image
              className={`${styles.iconmenu} ${styles.iconmenuclose}`}
              src={iconmenuclose}
              alt="menue"
            />
          ) : (
            <Image
              className={`${styles.iconmenu} ${styles.iconmenuopen}`}
              src={iconmenu}
              alt="menue"
            />
          )}
        </label>
      </div>
    </div>
  );
};

export default Header;
