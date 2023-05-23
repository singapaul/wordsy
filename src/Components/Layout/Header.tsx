import React from "react";
import * as styles from "./Header.module.scss";
import DarkModeToggle from "../DarkModeToggle";
import useDarkMode from "use-dark-mode";

// @ts-ignore

const Header = ({ className }: any) => {
  const darkMode = useDarkMode(true);

  return (
    <header className={className}>
      <nav className={styles.navBar}>
        <p className={styles.title}>Wordy</p>
        <ul className={styles.navBarList}>
          <li className={styles.listItem}>
            <DarkModeToggle className={styles.darkModeButton} />
          </li>
          <li className={styles.listItem}>A-Z</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
