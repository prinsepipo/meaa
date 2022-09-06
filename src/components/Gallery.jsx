import * as React from "react";

import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import ContentHeader from "./common/ContentHeader";

import "./Gallery.scss";


const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter:{sourceInstanceName:{eq:"images"}, relativePath:{eq:"demo.jpg"}}) {
        edges {
          node{
            childImageSharp {
              gatsbyImageData(
                height: 300
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  `);

  const image = data.allFile.edges[0].node;

  return (
    <section className="gallery content-section">
      <ContentHeader>Gallery</ContentHeader>
      <div className="gallery-body">
        <div className="gallery-grid">
          {[1, 2, 3, 4, 5, 6].map(i => {
            return (
              <GatsbyImage className="gallery-grid-item" image={getImage(image)} alt="gallery item" key={i} />
            );
          })}
        </div>
        <div className="gallery-navigator">
          <a href="/">View More</a>
        </div>
      </div>
    </section>
  );
};


export default Gallery;
