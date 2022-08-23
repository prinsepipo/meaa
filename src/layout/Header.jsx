import * as React from "react";

import Navbar from "../components/navbar/Navbar";
import PopupNavbarToggler from "../components/navbar/PopupNavbarToggler";

import logo from "../images/logo.png";

import "./Header.scss";


const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <a className="hero-logo" href="/">
          <img src={logo} alt="MEAA logo" />
        </a>

        <Navbar />
        <PopupNavbarToggler />
      </div>
    </header>
  );
};


export default Header;
