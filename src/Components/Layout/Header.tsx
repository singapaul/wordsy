import React from "react";
import DarkModeToggle from "../DarkModeToggle";
import "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <p>Site Title</p>
        <ul>
          <li>
            <DarkModeToggle />
          </li>
          <li>A-Z</li>
          <li>Shuffle</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
