import * as React from "react";

import { CSSTransition } from "react-transition-group";

import { PopupContext } from "../../context/popup";

import "./Popup.scss";


const PopupBase = (props) => {
  return (
    <div className="popup">
      {props.children}
    </div>
  );
};

const Popup = () => {
  const {
    isOpen,
    popupComponent,
    hidePopup,
  } = React.useContext(PopupContext);

  React.useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.key === "Escape") {
        hidePopup();
      }
    };

    if (isOpen) {
      document.addEventListener("keyup", handleKeyUp);
    }

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    }
  }, [isOpen, hidePopup]);

  const handleOverlayClick = (e) => {
    if (e.target.className === "popup-overlay") {
      hidePopup();
    }
  };

  return (
    <PopupBase>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="popup"
        unmountOnExit
      >
        <div
          className="popup-overlay"
          role="button"
          tabIndex={-1}
          onClick={handleOverlayClick}
          onKeyDown={() => {}}
        >
          {popupComponent}
        </div>
      </CSSTransition>
    </PopupBase>
  );
};


export default Popup;
