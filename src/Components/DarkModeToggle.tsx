import React from "react";
import useDarkMode from "use-dark-mode";
import Toggle from "./Toggle";


const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);
  return (
    <div className="toggle-icons">
      <button id="sun" type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button id="moon" type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  );
};

export default DarkModeToggle;
