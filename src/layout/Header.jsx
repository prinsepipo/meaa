import * as React from "react";

import PopupNavbarToggler from "../components/navbar/PopupNavbarToggler";

import logo from "../images/meaa.png";

import "./Header.scss";


const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <a className="hero-logo" href="/">
          <img src={logo} alt="MEAA logo" />
          <h2>MEAA</h2>
        </a>

        <PopupNavbarToggler />
      </div>
    </header>
  );
};


export default Header;
