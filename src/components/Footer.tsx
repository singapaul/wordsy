import React from "react";
import * as styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Designed by Paul Hardman 2023</p>
      <ul className={styles.footerList}>
        <li className={styles.footerListItem}>
          <a
            href="https://www.linkedin.com/in/paul-hardman-1199b6108/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className={styles.footerListItem}>
          <a
            href="https://github.com/singapaul"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
