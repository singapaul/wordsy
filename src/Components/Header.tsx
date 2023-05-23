import React from "react";
import * as styles from "./Header.module.scss";
import DarkModeToggle from "./DarkModeToggle";
import useDarkMode from "use-dark-mode";
import { Link } from "gatsby";

// @ts-ignore

const Header = ({ className }: any) => {
  const darkMode = useDarkMode(true);

  return (
    <header className={className}>
      <nav className={styles.navBar}>
        <Link to="/">
          <p className={styles.title}>Wordy</p>
        </Link>

        <ul className={styles.navBarList}>
          <li className={styles.listItem}>
            <DarkModeToggle className={styles.darkModeButton} />
          </li>
          <li className={styles.listItem}>
            <Link to="/AZ">A-Z</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
