import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import ContentHeader from "./common/ContentHeader";

import kinder from "../images/kinder.png";
import elementary from "../images/elementary.png";
import highschool from "../images/highschool.png";

import "./Levels.scss";


const levels = [
  {
    title: "Nursery & Kindergarten",
    image: kinder,
  },
  {
    title: "Elementary",
    image: elementary,
  },
  {
    title: "High School",
    image: highschool,
  },
];

const Levels = () => {
  return (
    <div className="levels content-section">
      <div className="levels-header">
        <ContentHeader>Educational Levels</ContentHeader>
      </div>
      <div className="levels-body">
        {levels.map((l, i) => {
          return (
            <div className="level" key={i}>
              <img className="level-image" src={l.image} alt={l.title + " illustration"} />
              <h3 className="level-title">{l.title}</h3>
            </div>
          )
        })}
      </div>
      <a className="admission-button" href="/">Enrollment<FontAwesomeIcon icon={faGraduationCap} /></a>
    </div>
  );
};


export default Levels;
