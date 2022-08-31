import * as React from "react";

import { Link } from "gatsby";

import "./NavbarItem.scss";


const NavbarItem = (props) => {
  return (
    <li className="navbar-item">
      <Link to={props.to} onClick={props.onClick}>{props.title}</Link>
    </li>
  );
};


export default NavbarItem;
