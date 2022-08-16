import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { PopupContext } from "../../context/popup";

import "./PopupClose.scss";


const PopupClose = () => {
  const {
    hidePopup,
  } = React.useContext(PopupContext);

  return (
    <button className="popup-close" type="button" onClick={hidePopup}>
      <FontAwesomeIcon icon={faClose} />
    </button>
  );
};


export default PopupClose;
