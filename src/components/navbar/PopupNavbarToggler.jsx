import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { PopupContext } from "../../context/popup";

import PopupNavbar from "./PopupNavbar";

import "./PopupNavbarToggler.scss";


const PopupNavbarToggler = () => {
  const {
    isOpen,
    openPopup,
    hidePopup,
  } = React.useContext(PopupContext);

  const handleClick = () => {
    if (!isOpen) {
      openPopup(<PopupNavbar hidePopup={hidePopup} />);
    } else {
      hidePopup();
    }
  };

  return (
    <button
      className="popup-navbar-toggler"
      type="button"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};


export default PopupNavbarToggler;
