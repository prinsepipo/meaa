import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./Introduction.scss";


const Introduction = () => {
  return (
    <section className="introduction content-section">
      <div className="wrapper">
        <p>Introducing</p>
        <h1>Mandaue Ebenezer Alliance Academy</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="/">Learn more about us. <FontAwesomeIcon icon={faArrowRight} /></a>
      </div>
    </section>
  )
};


export default Introduction;
