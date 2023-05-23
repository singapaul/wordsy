import React from "react";
import useDarkMode from "use-dark-mode";
import * as styles from "./DarkModeToggle.module.scss";

const DarkModeToggle = ({ className }: any) => {
  const darkMode = useDarkMode(true);

  return (
    <button
      className={darkMode.value ? styles.darkToggle : styles.lightToggle}
      onClick={darkMode.toggle}
    >
      {darkMode.value ? "light" : "dark"}
    </button>
  );
};

export default DarkModeToggle;
