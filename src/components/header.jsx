import React from "react";
import nasaLogo from "../assets/images/nasalogo.png";

const Header = () => {
  return (
    <header className="header-main">
      <img className="header-main__logo" src={nasaLogo} />
      <h1 className="header-main__title-text">NASA Image Search</h1>
    </header>
  );
};

export default Header;
