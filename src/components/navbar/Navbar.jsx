import * as React from "react";

import NavbarList from "./NavbarList";

import "./Navbar.scss";


const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar-nav">
        <NavbarList />
      </nav>
    </div>
  );
};


export default Navbar;
