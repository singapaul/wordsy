import React from "react";
import useDarkMode from "use-dark-mode";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(true);

  return (
    <div className="toggle-icons">
      <button onClick={darkMode.toggle}>
        {darkMode.value ? "light" : "dark"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
