import * as React from "react";

import NavbarList from "./NavbarList";
import PopupClose from "../popups/PopupClose";

import "./PopupNavbar.scss";


const PopupNavbar = (props) => {
  return (
    <nav className="popup-navbar">
      <NavbarList hidePopup={props.hidePopup} />
      <PopupClose />
    </nav>
  );
};


export default PopupNavbar;
