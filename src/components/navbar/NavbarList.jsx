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
        to="/admissions"
        onClick={props.hidePopup}
        title="Admissions"
      />
      <NavbarItem
        to="/blogs"
        onClick={props.hidePopup}
        title="Blogs &amp; News"
      />
    </ul>
  );
};


export default NavbarList;
