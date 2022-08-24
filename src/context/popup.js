import * as React from "react";


const PopupContext = React.createContext({});

const PopupProvider = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [popupComponent, setPopupComponent] = React.useState(null);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const openPopup = (component) => {
    setIsOpen(true);
    setPopupComponent(component);
  };

  const hidePopup = () => {
    setIsOpen(false);
    setPopupComponent(null);
  };

  const value = {
    isOpen,
    popupComponent,
    openPopup,
    hidePopup,
  };

  return (
    <PopupContext.Provider value={value}>
      {props.children}
    </PopupContext.Provider>
  );
};


export { PopupContext };
export default PopupProvider;
