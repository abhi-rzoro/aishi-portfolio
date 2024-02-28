import React from "react";
import styles from "./styles.module.scss";
import hamburgerImage from "./images/hamburgerImage.png";

export default function Header() {
  return (
    <div className={styles["header--main-container"]}>
      <button className={styles["header--home-button"]}>AISHI</button>
      <button className={styles["header--hamburger-button"]}>
        <img
          src={hamburgerImage}
          className={styles["header--hamburger-image"]}
        />
      </button>
    </div>
  );
}
