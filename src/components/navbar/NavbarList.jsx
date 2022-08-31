import * as React from "react";

import NavbarItem from "./NavbarItem";


const NavbarList = (props) => {
  return (
    <ul className="navbar-list">
      <NavbarItem
        to="/"
        onClick={props.hidePopup}
        title="Home"
      />
      <NavbarItem
        to="/about"
        onClick={props.hidePopup}
        title="About Us"
      />
      <NavbarItem
        to="/news"
        onClick={props.hidePopup}
        title="News &amp; Events"
      />
      <NavbarItem
        to="/admission"
        onClick={props.hidePopup}
        title="Admissions"
      />
    </ul>
  );
};


export default NavbarList;
