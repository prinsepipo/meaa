import * as React from "react";

import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import ContentHeader from "./common/ContentHeader";

import "./Levels.scss";


const Levels = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allLevelsJson {
        edges {
          node {
            title
            image {
              src {
                childImageSharp {
                  gatsbyImageData(
                    width: 360
                    placeholder: BLURRED
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  const levels = data.allLevelsJson.edges;


  return (
    <div className="levels content-section">
      <div className="levels-header">
        <ContentHeader>Educational Levels</ContentHeader>
      </div>
      <div className="levels-body">
        {levels.map((item, i) => {
          const l = item.node;

          return (
            <div className="level" key={i}>
              <GatsbyImage className="level-image" image={getImage(l.image.src)} alt={l.title + " illustration"} />
              <h3 className="level-title">{l.title}</h3>
            </div>
          )
        })}
      </div>
      <Link className="admission-button" to="/admissions">Enrollment<FontAwesomeIcon icon={faGraduationCap} /></Link>
    </div>
  );
};


export default Levels;
