import React from "react";
import * as styles from "./Header.module.scss";
import DarkModeToggle from "../DarkModeToggle";

const Header = () => {
  return (
    <header>
      <nav className={styles.navBar}>
        <p className={styles.title}>Site Title</p>
        <ul className={styles.navBarList}>
          <li className={styles.listItem}>
            <DarkModeToggle className={styles.darkModeButton} />
          </li>
          <li className={styles.listItem}>A-Z</li>
          <li className={styles.listItem}>Shuffle</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
