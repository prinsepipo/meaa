import * as React from "react";

import "./AboutSection.scss";


const AboutSection = (props) => {
  return (
    <section className="about-section">
      <h2 className="section-header">{props.header}</h2>
      <div className="section-body">{props.children}</div>
    </section>
  );
};


export default AboutSection;
