import * as React from "react";

import "./NavbarItem.scss";


const NavbarItem = (props) => {
  return (
    <li className="navbar-item">
      <a href={props.href} onClick={props.onClick}>{props.title}</a>
    </li>
  );
};


export default NavbarItem;
