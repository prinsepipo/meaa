import * as React from "react";

import NavbarItem from "./NavbarItem";
import PopupClose from "../popups/PopupClose";

import "./PopupNavbar.scss";


const PopupNavbar = (props) => {
  return (
    <nav className="popup-navbar">
      <ul className="navbar-list">
        <NavbarItem
          href="#home"
          onClick={props.hidePopup}
          title="Home"
        />
        <NavbarItem
          href="#about"
          onClick={props.hidePopup}
          title="About"
        />
        <NavbarItem
          href="#admission"
          onClick={props.hidePopup}
          title="Admission"
        />
        <NavbarItem
          href="#contact"
          onClick={props.hidePopup}
          title="Contact"
        />
      </ul>
      <PopupClose />
    </nav>
  );
};


export default PopupNavbar;
