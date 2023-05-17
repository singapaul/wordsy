import React from "react";
import useDarkMode from "use-dark-mode";

const DarkMode = () => {
  const darkMode = useDarkMode(false);

  return <div>DarkMode</div>;
};

export default DarkMode;
