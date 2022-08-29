import * as React from "react";

import NavbarItem from "./NavbarItem";


const NavbarList = (props) => {
  return (
    <ul className="navbar-list">
      <NavbarItem
        href="/"
        onClick={props.hidePopup}
        title="Home"
      />
      <NavbarItem
        href="/about"
        onClick={props.hidePopup}
        title="About Us"
      />
      <NavbarItem
        href="/news"
        onClick={props.hidePopup}
        title="News &amp; Events"
      />
      <NavbarItem
        href="/admission"
        onClick={props.hidePopup}
        title="Admissions"
      />
    </ul>
  );
};


export default NavbarList;
